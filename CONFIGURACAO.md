# Configuração e Ambiente

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto (não faça commit):

```env
# API
VITE_API_URL=http://localhost:3001/api
VITE_API_TIMEOUT=10000

# App Info
VITE_APP_NAME=Login CPF
VITE_APP_VERSION=1.0.0

# Segurança
VITE_ENABLE_DEVTOOLS=false

# Logging
VITE_LOG_LEVEL=warn
```

## Variáveis por Ambiente

### Desenvolvimento (.env.development.local)
```env
VITE_API_URL=http://localhost:3001/api
VITE_ENABLE_DEVTOOLS=true
VITE_LOG_LEVEL=debug
```

### Produção (.env.production)
```env
VITE_API_URL=https://api.production.com
VITE_ENABLE_DEVTOOLS=false
VITE_LOG_LEVEL=error
```

## Usar Variáveis no Código

```javascript
import.meta.env.VITE_API_URL
import.meta.env.VITE_APP_NAME
```

## Variáveis do Sistema

### Node.js
```bash
# Linux/Mac
NODE_ENV=production npm run build

# Windows PowerShell
$env:NODE_ENV='production'; npm run build
```

## Configuração do Git

Este projeto já inclui `.gitignore` com:
- `node_modules/`
- `.env` (não versione!)
- `.env.local`
- `dist/` (build)
- `.DS_Store`
- Arquivos de IDE

## Configuração Visual Studio Code

Extensões recomendadas:
1. **Volar** - Suporte para Vue 3
2. **Vuetify Extension** - Autocomplete Vuetify
3. **ESLint** - Linting
4. **Prettier** - Formatação de código
5. **Material Icon Theme** - Ícones

Arquivo `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue"
  ]
}
```

## Dependências Principais

| Pacote | Versão | Propósito |
|--------|--------|----------|
| vue | ^3.3.4 | Framework JS |
| vuetify | ^3.3.20 | Componentes UI |
| vite | ^4.4.9 | Build tool |
| axios | ^1.5.0 | HTTP client |
| sass | ^1.66.1 | CSS preprocessor |

## Performance

### Otimizações Implementadas
- Tree-shaking no build
- Minificação automética
- CSS purged (remover CSS não usado)
- Code splitting por componente

### Build Size
```bash
npm run build

# Verifique o tamanho em dist/
```

Esperado: ~50-100KB (gzipped)

## Monitoramento

### Lighthouse
```bash
# Build e verifique performance
npm run build
npm run preview

# Abra DevTools (F12) > Lighthouse
# Teste em modo anônimo
```

Targets:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 90+

### Testes de Acessibilidade
- Usar axe DevTools (extensão Chrome)
- Validar com WAVE
- Testar com teclado (Tab, Enter, Escape)
- Testar com leitor de tela (NVDA, JAWS)

