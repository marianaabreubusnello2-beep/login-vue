<template>
  <div v-if="currentPage === 'login'">
    <login-form @navigate-to-home="currentPage = 'home'" />
  </div>
  <div v-else-if="currentPage === 'home'">
    <home-page @navigate-to-login="currentPage = 'login'" />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    LoginForm,
    'home-page': Home
  },
  data() {
    return {
      currentPage: 'home' // Inicia na home
    }
  }
}
</script>
