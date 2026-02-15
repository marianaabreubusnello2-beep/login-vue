<template>
  <v-app class="dark-background">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="min-height-100vh">
        <v-col cols="12" sm="8" md="6" lg="4" class="max-width-500">
          <v-card elevation="4" class="login-card">
            <v-card-title class="text-center py-8 text-h3 font-weight-bold">
              <v-icon size="50" class="mr-3 mb-2">mdi-lock</v-icon>
              <div>Login</div>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="py-8">
              <form @submit.prevent="handleSubmit" novalidate>
                <!-- Campo CPF -->
                <v-text-field
                  v-model="formData.cpf"
                  label="CPF"
                  placeholder="000.000.000-00"
                  prepend-inner-icon="mdi-identifier"
                  :error="!!errors.cpf"
                  :error-messages="errors.cpf"
                  maxlength="14"
                  @input="handleCPFInput"
                  @blur="validateCPF"
                  class="mb-4"
                  hint="Digite seu CPF"
                  persistent-hint
                  clearable
                  aria-label="Campo de CPF"
                  aria-required="true"
                  required
                ></v-text-field>

                <!-- Campo Senha -->
                <v-text-field
                  v-model="formData.password"
                  :label="showPassword ? 'Senha' : 'Senha'"
                  :type="showPassword ? 'text' : 'password'"
                  :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  prepend-inner-icon="mdi-lock"
                  :error="!!errors.password"
                  :error-messages="errors.password"
                  @click:append-inner="showPassword = !showPassword"
                  class="mb-6"
                  hint="Mínimo 8 caracteres"
                  persistent-hint
                  aria-label="Campo de senha"
                  aria-required="true"
                  required
                ></v-text-field>

                <!-- Checkbox Lembrar-me -->
                <div class="d-flex justify-space-between align-center mb-6">
                  <v-checkbox
                    v-model="formData.rememberMe"
                    label="Lembrar-me"
                    color="primary"
                    aria-label="Lembrar-me neste computador"
                  ></v-checkbox>
                  <v-btn variant="text" size="small" to="#" aria-label="Esqueci minha senha">
                    Esqueci a senha?
                  </v-btn>
                </div>

                <!-- Mensagem de Alerta -->
                <v-alert
                  v-if="alertMessage"
                  :type="alertType"
                  dismissible
                  @click:close="alertMessage = ''"
                  class="mb-4"
                  role="alert"
                >
                  {{ alertMessage }}
                </v-alert>

                <!-- Botão Enviar -->
                <v-btn
                  @click="handleSubmit"
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  :loading="isLoading"
                  :disabled="isLoading || !canSubmit"
                  aria-label="Fazer login"
                >
                  <v-icon left>mdi-login</v-icon>
          Entrar
        </v-btn>
              </form>

              <!-- Link Registro -->
              <div class="text-center mt-6">
                <span class="text-body2 text-medium-emphasis">
                  Não tem conta?
                  <v-btn variant="text" to="#" aria-label="Criar nova conta">
                    Registre-se aqui
                  </v-btn>
                </span>
              </div>
            </v-card-text>

            <!-- Rodapé -->
            <v-divider></v-divider>
            <v-card-text class="text-center text-caption text-medium-emphasis py-4">
              <v-icon size="16" class="mr-1">mdi-shield-check</v-icon>
              Esta página é segura (HTTPS). Seus dados são protegidos.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { isValidCPF, formatCPF, unformatCPF } from '../utils/cpfValidator'

export default {
  name: 'LoginForm',
  emits: ['navigate-to-home'],
  data() {
    return {
      formData: {
        cpf: '',
        password: '',
        rememberMe: false
      },
      errors: {
        cpf: [],
        password: []
      },
      showPassword: false,
      isLoading: false,
      alertMessage: '',
      alertType: 'error'
    }
  },
  computed: {
    canSubmit() {
      return (
        this.formData.cpf.length > 0 &&
        this.formData.password.length >= 8 &&
        Object.values(this.errors).every(err => err.length === 0)
      )
    }
  },
  methods: {
    /**
     * Formata o CPF enquanto o usuário digita
     */
    handleCPFInput(value) {
      const formatted = formatCPF(value)
      this.formData.cpf = formatted
      
      // Limpa erro ao usuário começar a digitar
      if (this.errors.cpf.length > 0) {
        this.errors.cpf = []
      }
    },

    /**
     * Valida o CPF ao sair do campo
     */
    validateCPF() {
      this.errors.cpf = []

      if (!this.formData.cpf) {
        this.errors.cpf.push('CPF é obrigatório')
        return false
      }

      if (!isValidCPF(this.formData.cpf)) {
        this.errors.cpf.push('CPF inválido')
        return false
      }

      return true
    },

    /**
     * Valida a senha
     */
    validatePassword() {
      this.errors.password = []

      if (!this.formData.password) {
        this.errors.password.push('Senha é obrigatória')
        return false
      }

      if (this.formData.password.length < 8) {
        this.errors.password.push('Senha deve ter no mínimo 8 caracteres')
        return false
      }

      return true
    },

    /**
     * Submete o formulário
     */
    async handleSubmit() {
      // Valida todos os campos
      const isCPFValid = this.validateCPF()
      const isPasswordValid = this.validatePassword()

      if (!isCPFValid || !isPasswordValid) {
        return
      }

      this.isLoading = true
      this.alertMessage = ''

      try {
        // Simula chamada à API
        await this.authenticateUser()

        this.alertType = 'success'
        this.alertMessage = 'Login realizado com sucesso!'

        // Emite evento para navegar para home
        this.$root.$emit('navigate-to-home')
        
        setTimeout(() => {
          this.$emit('navigate-to-home')
          this.resetForm()
        }, 1500)
      } catch (error) {
        this.alertType = 'error'
        this.alertMessage = error.message || 'Erro ao fazer login. Tente novamente.'
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Simula autenticação de usuário
     * Em produção, seria uma chamada real à API
     */
    async authenticateUser() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const cpfLimpo = unformatCPF(this.formData.cpf)

          // Simula validação básica
          if (cpfLimpo.length === 11 && this.formData.password.length >= 8) {
            resolve({
              success: true,
              token: 'fake-jwt-token',
              user: {
                cpf: cpfLimpo,
                name: 'Usuário Teste'
              }
            })
          } else {
            reject(new Error('CPF ou senha inválidos'))
          }
        }, 1500)
      })
    },

    /**
     * Limpa o formulário
     */
    resetForm() {
      this.formData = {
        cpf: '',
        password: '',
        rememberMe: false
      }
      this.errors = {
        cpf: [],
        password: []
      }
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.v-card) {
  border-radius: 12px;
}

:deep(.v-text-field) {
  .v-field {
    border-radius: 8px;
  }
  
  .v-input__details,
  .v-messages,
  .v-messages__message {
    color: #ffffff !important;
  }
}

:deep(.v-btn) {
  border-radius: 8px;
  text-transform: none;
  letter-spacing: 0.5px;
}

form {
  width: 100%;
}

.max-width-500 {
  max-width: 500px;
  margin: 0 auto;
}

.login-card {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  :deep(.v-card__title) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.dark-background {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
}

:deep(.v-app) {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.min-height-100vh {
  min-height: 100vh;
}
</style>
