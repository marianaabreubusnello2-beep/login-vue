<template>
  <v-container class="fill-height py-16">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="6" class="text-center">
        <v-icon size="96" class="text-primary mb-6">mdi-login-variant</v-icon>
        <h1 class="text-h3 font-weight-bold mb-4">Bem-vindo ao Sistema</h1>
        <p class="text-h6 text-grey-darken-1 mb-8">
          Faça login para acessar sua conta
        </p>
        <v-btn
          to="/login"
          size="x-large"
          class="bg-gradient text-white font-weight-bold px-12"
        >
          <v-icon left>mdi-login</v-icon>
          Ir para Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
