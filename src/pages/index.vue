<template>
  <div>
    <!-- Seção Principal de Boas-vindas -->
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

    <!-- Seção de Contatos -->
    <v-container class="py-16 ">
      <v-row justify="center" class="mb-12">
        <v-col cols="12" class="text-center">
          <h2 class="text-h4 font-weight-bold mb-2 text-black">Entre em Contato</h2>
          <p class="text-body1 text-grey-darken-1">
            Estamos aqui para ajudar. Fale conosco através de qualquer canal
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" class="ga-4">
        <!-- Card de Telefone -->
        <v-col cols="12" md="4">
          <v-card class="text-center pa-6 h-100 card-hover">
            <v-icon size="48" class="text-primary mb-4">mdi-phone</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Telefone</h3>
            <p class="text-body2 text-grey-darken-1 mb-4">
              Ligar para nosso suporte
            </p>
            <a href="tel:+551133334444" class="text-decoration-none">
              <span class="text-primary font-weight-bold">(11) 3333-4444</span>
            </a>
          </v-card>
        </v-col>

        <!-- Card de Email -->
        <v-col cols="12" md="4">
          <v-card class="text-center pa-6 h-100 card-hover">
            <v-icon size="48" class="text-primary mb-4">mdi-email</v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Email</h3>
            <p class="text-body2 text-grey-darken-1 mb-4">
              Envie-nos uma mensagem
            </p>
            <a href="mailto:contato@example.com" class="text-decoration-none">
              <span class="text-primary font-weight-bold">contato@example.com</span>
            </a>
          </v-card>
        </v-col>

        <!-- Card de Redes Sociais -->
        <v-col cols="12" md="4">
          <v-card class="text-center pa-6 h-100 card-hover">
            <v-icon size="48" class="text-primary mb-4">mdi-share-variant</v-icon>
            <h3 class="text-h6 font-weight-bold mb-4">Redes Sociais</h3>
            <div class="d-flex justify-center gap-3">
              <v-btn
                icon
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                size="small"
                class="text-facebook"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                icon
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                size="small"
                class="text-twitter"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                size="small"
                class="text-instagram"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                icon
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                size="small"
                class="text-linkedin"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-hover {
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card-hover:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.text-facebook {
  color: #1877f2 !important;
}

.text-facebook:hover {
  color: #166fe5 !important;
}

.text-twitter {
  color: #1da1f2 !important;
}

.text-twitter:hover {
  color: #1a91da !important;
}

.text-instagram {
  color: #e4405f !important;
}

.text-instagram:hover {
  color: #d63447 !important;
}

.text-linkedin {
  color: #0a66c2 !important;
}

.text-linkedin:hover {
  color: #095195 !important;
}

.bg-grey-lighten-4 {
  background-color: #f5f5f5;
}

.gap-3 {
  gap: 12px;
}

a {
  transition: color 0.2s ease;
}

a:hover {
  opacity: 0.8;
}
</style>
