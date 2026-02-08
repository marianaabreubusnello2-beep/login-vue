// src/stores/auth.js (Exemplo com Pinia)
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isLoading = ref(false)
  const error = ref(null)

  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const userName = computed(() => user.value?.name || '')

  // Actions
  const login = async (email, password) => {
    isLoading.value = true
    error.value = null

    try {
      // Chamada à API real
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Falha na autenticação')
      }

      const data = await response.json()

      // Armazenar token
      token.value = data.token
      user.value = data.user
      localStorage.setItem('token', data.token)

      return {
        success: true,
        user: data.user,
      }
    } catch (err) {
      error.value = err.message
      return {
        success: false,
        error: err.message,
      }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
  }

  const checkAuth = async () => {
    if (!token.value) return false

    try {
      const response = await fetch('/api/auth/verify', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })

      if (!response.ok) {
        logout()
        return false
      }

      const data = await response.json()
      user.value = data.user
      return true
    } catch {
      logout()
      return false
    }
  }

  return {
    // State
    user,
    token,
    isLoading,
    error,

    // Getters
    isAuthenticated,
    userName,

    // Actions
    login,
    logout,
    checkAuth,
  }
})
