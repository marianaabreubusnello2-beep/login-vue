<template>
  <div>
    <!-- Top Navigation Bar -->
    <v-app-bar color="primary" dark sticky>
      <v-app-bar-title class="font-weight-bold">
        <v-icon left>mdi-dashboard</v-icon>
        Dashboard
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-account-circle</v-icon>
            <v-badge color="success" dot offset-x="-8" offset-y="-8"></v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item prepend-icon="mdi-account" title="Perfil"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Configurações"></v-list-item>
          <v-divider></v-divider>
          <v-list-item prepend-icon="mdi-logout" title="Sair" @click="handleLogout"></v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Main Content -->
    <v-container class="py-8">
      <v-row>
        <v-col cols="12">
          <v-banner color="success" icon="mdi-check-circle" class="mb-6">
            <template v-slot:text>
              <strong>Bem-vindo!</strong> Você fez login com sucesso em nossa plataforma.
            </template>
          </v-banner>
        </v-col>
      </v-row>

      <!-- Cards de Informações -->
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card class="elevation-2 rounded-lg" :elevation="3">
            <v-card-text class="text-center pb-4">
              <v-icon size="48" color="primary" class="mb-3">mdi-file-document</v-icon>
              <h3 class="text-h6 font-weight-bold">Documentos</h3>
              <p class="text-h4 font-weight-bold text-primary">12</p>
              <v-btn variant="text" color="primary" size="small">Ver tudo</v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card class="elevation-2 rounded-lg">
            <v-card-text class="text-center pb-4">
              <v-icon size="48" color="success" class="mb-3">mdi-check-circle</v-icon>
              <h3 class="text-h6 font-weight-bold">Concluído</h3>
              <p class="text-h4 font-weight-bold text-success">8</p>
              <v-btn variant="text" color="success" size="small">Ver tudo</v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card class="elevation-2 rounded-lg">
            <v-card-text class="text-center pb-4">
              <v-icon size="48" color="warning" class="mb-3">mdi-clock-alert</v-icon>
              <h3 class="text-h6 font-weight-bold">Pendente</h3>
              <p class="text-h4 font-weight-bold text-warning">4</p>
              <v-btn variant="text" color="warning" size="small">Ver tudo</v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card class="elevation-2 rounded-lg">
            <v-card-text class="text-center pb-4">
              <v-icon size="48" color="error" class="mb-3">mdi-alert-circle</v-icon>
              <h3 class="text-h6 font-weight-bold">Atenção</h3>
              <p class="text-h4 font-weight-bold text-error">2</p>
              <v-btn variant="text" color="error" size="small">Ver tudo</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Tabela de Atividades Recentes -->
      <v-row class="mt-4">
        <v-col cols="12">
          <v-card class="elevation-2 rounded-lg">
            <v-card-title class="font-weight-bold py-6">
              <v-icon left>mdi-history</v-icon>
              Atividades Recentes
            </v-card-title>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Data</th>
                  <th class="text-left">Atividade</th>
                  <th class="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>08/02/2026</td>
                  <td>Login no sistema</td>
                  <td>
                    <v-chip small color="success" text-color="white">Sucesso</v-chip>
                  </td>
                </tr>
                <tr>
                  <td>07/02/2026</td>
                  <td>Documento enviado</td>
                  <td>
                    <v-chip small color="primary" text-color="white">Processando</v-chip>
                  </td>
                </tr>
                <tr>
                  <td>06/02/2026</td>
                  <td>Perfil atualizado</td>
                  <td>
                    <v-chip small color="success" text-color="white">Sucesso</v-chip>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  router.push('/login')
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
