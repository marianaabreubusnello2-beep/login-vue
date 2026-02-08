<template>
  <v-card-text class="pa-8">
    <v-form ref="form" @submit.prevent="handleLogin" class="login-form">
      <!-- Email Field -->
      <div class="mb-6">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          placeholder="seu@email.com"
          prepend-inner-icon="mdi-email"
          :rules="emailRules"
          :error-messages="emailError"
          variant="outlined"
          density="comfortable"
          clearable
          @blur="validateEmail"
        >
          <template v-slot:details>
            <span v-if="!emailError && email" class="text-success text-caption">
              <v-icon size="x-small" class="me-1">mdi-check</v-icon>
              Email válido
            </span>
          </template>
        </v-text-field>
      </div>

      <!-- Password Field -->
      <div class="mb-4">
        <v-text-field
          v-model="password"
          :label="showPassword ? 'Senha' : 'Senha'"
          :type="showPassword ? 'text' : 'password'"
          placeholder="••••••••"
          prepend-inner-icon="mdi-lock"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="passwordRules"
          variant="outlined"
          density="comfortable"
          @click:append-inner="showPassword = !showPassword"
        >
        </v-text-field>
      </div>

      <!-- Remember & Forgot Password -->
      <div class="d-flex justify-space-between align-center mb-6">
        <v-checkbox
          v-model="rememberMe"
          label="Lembrar-me"
          density="compact"
          class="ma-0"
        ></v-checkbox>
        <router-link to="/forgot-password" class="text-primary text-caption text-decoration-none font-weight-medium">
          Esqueceu a senha?
        </router-link>
      </div>

      <!-- Submit Button -->
      <v-btn
        type="submit"
        size="large"
        class="w-100 mb-4 bg-gradient text-white font-weight-bold"
        :loading="isLoading"
        :disabled="!isFormValid || isLoading"
      >
        <v-icon left class="me-2">mdi-login</v-icon>
        {{ isLoading ? 'Entrando...' : 'Entrar' }}
      </v-btn>

      <!-- Error Alert -->
      <v-alert
        v-if="loginError"
        type="error"
        variant="tonal"
        closable
        class="mb-4"
        @click:close="loginError = ''"
      >
        <v-icon left>mdi-alert-circle</v-icon>
        {{ loginError }}
      </v-alert>

      <!-- Success Message -->
      <v-alert
        v-if="loginSuccess"
        type="success"
        variant="tonal"
        class="mb-4"
      >
        <v-icon left>mdi-check-circle</v-icon>
        Login realizado com sucesso!
      </v-alert>

      <!-- Divider with text -->
      <div class="d-flex align-center my-6">
        <v-divider></v-divider>
        <span class="px-3 text-caption text-grey">ou</span>
        <v-divider></v-divider>
      </div>

      <!-- Social Login Buttons -->
      <div class="d-grid gap-3">
        <v-btn
          variant="outlined"
          size="large"
          prepend-icon="mdi-google"
          class="font-weight-medium"
        >
          Google
        </v-btn>
        
      </div>
    </v-form>
  </v-card-text>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref()

// Form state
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)
const loginError = ref('')
const loginSuccess = ref(false)
const emailError = ref('')

// Validation rules
const emailRules = [
  v => !!v || 'Email é obrigatório',
  v => /.+@.+\..+/.test(v) || 'Email deve ser válido',
]

const passwordRules = [
  v => !!v || 'Senha é obrigatória',
  v => v.length >= 6 || 'Senha deve ter no mínimo 6 caracteres',
]

// Computed properties
const isFormValid = computed(() => {
  return email.value && password.value && emailRules.every(rule => rule(email.value) === true) && passwordRules.every(rule => rule(password.value) === true)
})

// Methods
const validateEmail = async () => {
  emailError.value = ''
  const rule = emailRules.find(r => r(email.value) !== true)
  if (rule) {
    emailError.value = rule(email.value)
  }
}

const handleLogin = async () => {
  // Validate form
  const { valid } = await form.value.validate()
  if (!valid) {
    loginError.value = 'Por favor, preencha todos os campos corretamente'
    return
  }

  isLoading.value = true
  loginSuccess.value = false
  loginError.value = ''

  try {
    // Simular requisição ao servidor
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Validação simples (em produção, seria uma chamada à API)
    if (email.value === 'demo@example.com' && password.value === 'password123') {
      loginSuccess.value = true
      
      // Simular redirecionamento após sucesso
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    } else {
      throw new Error('Email ou senha inválidos')
    }
  } catch (error) {
    loginError.value = error.message || 'Erro ao fazer login. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-form {
  width: 100%;
}

.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.w-100 {
  width: 100%;
}

.d-grid {
  display: grid;
}

.gap-3 {
  gap: 12px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-6 {
  margin-bottom: 24px;
}

.pa-8 {
  padding: 32px;
}

.text-decoration-none {
  text-decoration: none;
}

.opacity-75 {
  opacity: 0.75;
}

/* Melhor feedback visual */
:deep(.v-field--error .v-field__outline__start) {
  border-color: var(--v-error-base);
}

/* Animação suave */
:deep(.v-alert) {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
