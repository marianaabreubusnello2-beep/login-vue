<template>
  <v-app class="dark-background">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="min-height-100vh">
        <v-col cols="12" sm="10" md="8" lg="6">
          <!-- Header -->
          <div class="text-center mb-8">
            <v-icon size="64" color="#82B1FF" class="mb-4">mdi-home</v-icon>
            <h1 class="text-h3 font-weight-bold text-white mb-2">Bem-vindo!</h1>
            <p class="text-subtitle1 text-medium-emphasis">
              Sistema de Login Seguro com CPF
            </p>
          </div>

          <!-- Cards de Informações -->
          <v-row class="mb-8">
            <!-- Card Sobre -->
            <v-col cols="12" md="6" class="mb-4">
              <v-card elevation="4" class="h-100 pa-8 card-hover">
                <div class="text-center">
                  <div class="card-icon-wrapper about-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
                      <defs>
                        <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#1976D2;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#64B5F6;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <!-- Cabeça -->
                      <circle cx="50" cy="28" r="15" fill="url(#aboutGrad)"/>
                      <!-- Corpo -->
                      <path d="M 35 48 Q 35 58 42 63 L 58 63 Q 65 58 65 48 Z" fill="url(#aboutGrad)"/>
                      <!-- Braços -->
                      <rect x="20" y="50" width="15" height="6" rx="3" fill="url(#aboutGrad)"/>
                      <rect x="65" y="50" width="15" height="6" rx="3" fill="url(#aboutGrad)"/>
                      <!-- Pernas -->
                      <rect x="40" y="63" width="5" height="15" rx="2" fill="url(#aboutGrad)"/>
                      <rect x="55" y="63" width="5" height="15" rx="2" fill="url(#aboutGrad)"/>
                    </svg>
                  </div>
                  <h2 class="text-h6 font-weight-bold text-white mb-3 mt-4">Sobre</h2>
                  <p class="text-body2 text-medium-emphasis">
                    Plataforma de autenticação moderna e segura com validação de CPF em tempo real.
                    Desenvolvida com Vue 3 e Vuetify 3.
                  </p>
                </div>
              </v-card>
            </v-col>

            <!-- Card Segurança -->
            <v-col cols="12" md="6" class="mb-4">
              <v-card elevation="4" class="h-100 pa-8 card-hover">
                <div class="text-center">
                  <div class="card-icon-wrapper security-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
                      <defs>
                        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#81C784;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <!-- Escudo -->
                      <path d="M 50 12 L 30 22 L 30 42 Q 30 62 50 72 Q 70 62 70 42 L 70 22 Z" fill="url(#securityGrad)" stroke="#fff" stroke-width="1.5"/>
                      <!-- Cadeado -->
                      <rect x="42" y="48" width="16" height="14" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/>
                      <path d="M 44 48 Q 44 42 50 42 Q 56 42 56 48" fill="none" stroke="#fff" stroke-width="1.5"/>
                      <!-- Chave no cadeado -->
                      <circle cx="50" cy="55" r="2" fill="#fff"/>
                    </svg>
                  </div>
                  <h2 class="text-h6 font-weight-bold text-white mb-3 mt-4">Segurança</h2>
                  <p class="text-body2 text-medium-emphasis">
                    Proteção contra XSS, CSRF e injeção de SQL. Pronto para HTTPS.
                    Validação dupla (client e server).
                  </p>
                </div>
              </v-card>
            </v-col>

            <!-- Card Responsivo -->
            <v-col cols="12" md="6" class="mb-4">
              <v-card elevation="4" class="h-100 pa-8 card-hover">
                <div class="text-center">
                  <div class="card-icon-wrapper responsive-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
                      <defs>
                        <linearGradient id="responsiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#FF9800;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#FFB74D;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <!-- Desktop -->
                      <rect x="15" y="20" width="35" height="28" rx="2" fill="none" stroke="url(#responsiveGrad)" stroke-width="2"/>
                      <rect x="19" y="25" width="27" height="18" fill="url(#responsiveGrad)" opacity="0.3"/>
                      <path d="M 20 47 L 48 47" stroke="url(#responsiveGrad)" stroke-width="2"/>
                      <!-- Mobile -->
                      <rect x="60" y="28" width="20" height="32" rx="2" fill="none" stroke="url(#responsiveGrad)" stroke-width="2"/>
                      <rect x="63" y="32" width="14" height="23" fill="url(#responsiveGrad)" opacity="0.3"/>
                      <circle cx="70" cy="60" r="1.5" fill="url(#responsiveGrad)"/>
                    </svg>
                  </div>
                  <h2 class="text-h6 font-weight-bold text-white mb-3 mt-4">Responsivo</h2>
                  <p class="text-body2 text-medium-emphasis">
                    Interface adaptável para mobile, tablet e desktop.
                    Acessível em qualquer dispositivo.
                  </p>
                </div>
              </v-card>
            </v-col>

            <!-- Card Acessível -->
            <v-col cols="12" md="6" class="mb-4">
              <v-card elevation="4" class="h-100 pa-8 card-hover">
                <div class="text-center">
                  <div class="card-icon-wrapper accessible-icon">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-svg">
                      <defs>
                        <linearGradient id="accessibleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#9C27B0;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#CE93D8;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <!-- Cabeça -->
                      <circle cx="50" cy="22" r="10" fill="url(#accessibleGrad)"/>
                      <!-- Corpo -->
                      <rect x="45" y="33" width="10" height="18" rx="2" fill="url(#accessibleGrad)"/>
                      <!-- Braços -->
                      <path d="M 45 38 L 28 40 M 55 38 L 72 40" stroke="url(#accessibleGrad)" stroke-width="2.5" stroke-linecap="round"/>
                      <!-- Pernas -->
                      <path d="M 47 51 L 40 68 M 53 51 L 60 68" stroke="url(#accessibleGrad)" stroke-width="2.5" stroke-linecap="round"/>
                      <!-- Cadeira de rodas (representação) -->
                      <circle cx="38" cy="72" r="6" fill="none" stroke="url(#accessibleGrad)" stroke-width="1.5"/>
                      <circle cx="62" cy="72" r="6" fill="none" stroke="url(#accessibleGrad)" stroke-width="1.5"/>
                      <line x1="40" y1="75" x2="60" y2="75" stroke="url(#accessibleGrad)" stroke-width="1.5"/>
                    </svg>
                  </div>
                  <h2 class="text-h6 font-weight-bold text-white mb-3 mt-4">Acessível</h2>
                  <p class="text-body2 text-medium-emphasis">
                    WCAG 2.1 AA compliant. Suporte a leitores de tela e navegação por teclado.
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Informações de Contato -->
          <v-card elevation="4" class="pa-6 mb-8">
            <h2 class="text-h5 font-weight-bold text-white mb-6 d-flex align-center">
              <v-icon size="32" color="#1976D2" class="mr-3">mdi-phone</v-icon>
              Entre em Contato
            </h2>

            <v-row class="mb-6">
              <v-col cols="12" sm="6" class="mb-4">
                <div class="d-flex align-start">
                  <v-icon size="24" color="#1976D2" class="mr-3 mt-1">mdi-email</v-icon>
                  <div>
                    <p class="text-body2 text-medium-emphasis mb-1">Email</p>
                    <a href="mailto:contato@example.com" class="text-decoration-none social-link">
                      contato@example.com
                    </a>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-4">
                <div class="d-flex align-start">
                  <v-icon size="24" color="#1976D2" class="mr-3 mt-1">mdi-phone</v-icon>
                  <div>
                    <p class="text-body2 text-medium-emphasis mb-1">Telefone</p>
                    <a href="tel:+5511999999999" class="text-decoration-none social-link">
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-4">
                <div class="d-flex align-start">
                  <v-icon size="24" color="#1976D2" class="mr-3 mt-1">mdi-map-marker</v-icon>
                  <div>
                    <p class="text-body2 text-medium-emphasis mb-1">Localização</p>
                    <p class="text-body2 social-link">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-4">
                <div class="d-flex align-start">
                  <v-icon size="24" color="#1976D2" class="mr-3 mt-1">mdi-clock</v-icon>
                  <div>
                    <p class="text-body2 text-medium-emphasis mb-1">Horário</p>
                    <p class="text-body2 social-link">Seg-Sex: 09:00 - 18:00</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- Redes Sociais -->
          <v-card elevation="4" class="pa-6 mb-8">
            <h2 class="text-h5 font-weight-bold text-white mb-6 d-flex align-center">
              <v-icon size="32" color="#1976D2" class="mr-3">mdi-share-social</v-icon>
              Redes Sociais
            </h2>

            <div class="social-grid">
              <!-- Facebook -->
              <div class="social-item">
                <v-btn
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn facebook"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">Facebook</p>
              </div>

              <!-- Twitter -->
              <div class="social-item">
                <v-btn
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn twitter"
                  aria-label="Twitter"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <path d="M23.953 4.57a10 10 0 002.856-3.915 10.009 10.009 0 01-2.876.989 4.993 4.993 0 00-8.617-4.554c-1.512.892-2.457 2.556-2.457 4.289 0 .348.039.686.118 1.013a14.05 14.05 0 01-10.212-5.251c-.4.69-.657 1.485-.657 2.334 0 1.732.886 3.26 2.231 4.157a4.988 4.988 0 01-2.261-.616v.061c0 2.18 1.55 4.001 3.605 4.418-.376.1-.777.154-1.191.154-.292 0-.575-.028-.855-.083.575 1.78 2.25 3.073 4.23 3.11-1.537 1.205-3.478 1.92-5.587 1.92-.363 0-.72-.02-1.076-.062 2.179 1.396 4.768 2.213 7.548 2.213 9.057 0 13.996-7.496 13.996-13.985 0-.213-.005-.426-.014-.637.961-.695 1.796-1.562 2.457-2.549z" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">Twitter</p>
              </div>

              <!-- LinkedIn -->
              <div class="social-item">
                <v-btn
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn linkedin"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor"/>
                    <path d="M2 9h7v11H2z" fill="currentColor"/>
                    <path d="M15 9c2.5 0 3.8 1.5 4 3h.1V9h7v11h-7v-5.5c0-1-.3-2.2-1.5-2.2s-1.8.8-1.8 2.2V20h-7v-11h6.8v1.5h.5z" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">LinkedIn</p>
              </div>

              <!-- Instagram -->
              <div class="social-item">
                <v-btn
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn instagram"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="18" cy="6" r="1" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">Instagram</p>
              </div>

              <!-- WhatsApp -->
              <div class="social-item">
                <v-btn
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn whatsapp"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a8.96 8.96 0 00-4.646 1.159l-.332.214-3.444.824.84 3.075c.563 1.05.573 2.233.16 3.331a8.993 8.993 0 0012.848-5.524 8.967 8.967 0 00-4.482-8.075z" fill="currentColor"/>
                    <path d="M23.12 1.06A11.98 11.98 0 0012.029 0C5.495 0 .128 5.422.01 12.006c0 2.11.549 4.178 1.594 6.016L0 24l6.305-1.654a11.98 11.98 0 005.724 1.46h.006c6.534 0 11.9-5.422 12.019-12.006A11.976 11.976 0 0023.12 1.06z" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">WhatsApp</p>
              </div>

              <!-- YouTube -->
              <div class="social-item">
                <v-btn
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn youtube"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">YouTube</p>
              </div>

              <!-- GitHub -->
              <div class="social-item">
                <v-btn
                  href="https://github.com"
                  target="_blank"
                  rel="noopener"
                  class="social-btn github"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="social-svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                  </svg>
                </v-btn>
                <p class="text-caption text-center mt-2">GitHub</p>
              </div>
            </div>
          </v-card>

          <!-- Botões de Ação -->
          <v-row class="gap-3 justify-center">
            <v-btn
              @click="goToLogin"
              color="primary"
              size="large"
              prepend-icon="mdi-login"
              class="px-8"
            >
              Ir para Login
            </v-btn>

            <v-btn
              href="#"
              color="secondary"
              size="large"
              variant="outlined"
              prepend-icon="mdi-file-document"
              class="px-8"
              aria-label="Documentação"
            >
              Documentação
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  emits: ['navigate-to-login'],
  methods: {
    goToLogin() {
      this.$emit('navigate-to-login')
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped lang="scss">
.min-height-100vh {
  min-height: 100vh;
}

.dark-background {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
}

.gap-3 {
  gap: 1rem;
}

/* Card Icons */
.card-icon-wrapper {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  .card-svg {
    width: 100%;
    height: 100%;
    padding: 12px;
  }
}

.card-hover:hover .card-icon-wrapper {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
  
  .about-icon { box-shadow: 0 0 20px rgba(25, 118, 210, 0.3); }
  .security-icon { box-shadow: 0 0 20px rgba(76, 175, 80, 0.3); }
  .responsive-icon { box-shadow: 0 0 20px rgba(255, 152, 0, 0.3); }
  .accessible-icon { box-shadow: 0 0 20px rgba(156, 39, 176, 0.3); }
}

.social-link {
  color: #82B1FF;
  transition: all 0.3s ease;

  &:hover {
    color: #64B5F6;
    text-decoration: underline;
  }
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: start;
  padding: 1rem 0;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    
    .social-btn {
      transform: scale(1.1);
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    letter-spacing: 0.5px;
  }
}

.social-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: #82B1FF;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 64px !important;
  height: 64px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  min-width: auto !important;
  padding: 0 !important;

  .social-svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(130, 177, 255, 0.4);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &.facebook {
    &:hover {
      background: linear-gradient(135deg, #3b5998 0%, #1e3a8a 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(59, 89, 152, 0.5);
    }
  }

  &.twitter {
    &:hover {
      background: linear-gradient(135deg, #1da1f2 0%, #1a8cd8 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(29, 161, 242, 0.5);
    }
  }

  &.linkedin {
    &:hover {
      background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(0, 119, 181, 0.5);
    }
  }

  &.instagram {
    &:hover {
      background: linear-gradient(135deg, #f47f0b 0%, #e1306c 50%, #c13584 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(224, 130, 131, 0.5);
    }
  }

  &.whatsapp {
    &:hover {
      background: linear-gradient(135deg, #25d366 0%, #20ba58 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(37, 211, 102, 0.5);
    }
  }

  &.youtube {
    &:hover {
      background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(255, 0, 0, 0.5);
    }
  }

  &.github {
    &:hover {
      background: linear-gradient(135deg, #333 0%, #000 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(51, 51, 51, 0.5);
    }
  }
}

.card-hover {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(130, 177, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 12px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4), 0 0 30px rgba(130, 177, 255, 0.2);
    border-color: rgba(130, 177, 255, 0.3);

    &::before {
      opacity: 1;
    }

    .icon-glow {
      filter: drop-shadow(0 0 12px currentColor);
    }
  }
}

.icon-glow {
  transition: filter 0.3s ease;
}

.v-card {
  &:not(.card-hover) {
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    }
  }
}

h1, h2 {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
  .social-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
  }
  
  .card-icon-wrapper {
    width: 80px;
    height: 80px;
  }
}
</style>
