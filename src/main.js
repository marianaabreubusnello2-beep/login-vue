import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import App from './App.vue'

// Estilos globais
import './styles/global.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          warning: '#FFC107',
          info: '#2196F3',
          success: '#4CAF50'
        }
      }
    }
  }
})

createApp(App)
  .use(vuetify)
  .mount('#app')
