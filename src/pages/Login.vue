<template>
  <v-container class="fill-height" fluid>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card class="elevation-8" rounded="lg">
          <!-- Header com gradient -->
          <v-sheet class="bg-gradient pa-8 text-white text-center rounded-t-lg">
            <v-icon size="48" class="mb-4">mdi-lock</v-icon>
            <h1 class="text-body2 mt-2 opacity-75">Entre com suas credenciais</h1>
          </v-sheet>

          <!-- Formulário -->
          <LoginForm />

          <!-- Divider -->
          <v-divider class="my-6"></v-divider>

          <!-- Footer -->
          <v-card-text class="text-center pb-6">
            <p class="text-body2 text-grey-darken-1">
              Não tem uma conta?
              <router-link to="/signup" class="text-primary font-weight-medium text-decoration-none">
                Cadastre-se
              </router-link>
            </p>
          </v-card-text>
        </v-card>

        <!-- Rodapé -->
        <v-card-text class="text-center mt-8 text-caption text-grey">
          © 2026 Sua Aplicação. Todos os direitos reservados.
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.text-decoration-none {
  text-decoration: none;
}
</style>
