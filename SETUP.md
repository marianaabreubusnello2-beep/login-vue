# Como Usar a Tela de Login

## Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn instalado

## Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

## Rodar em Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`

## 🔐 Testar o Login

### Credenciais Válidas
- **Email**: `demo@example.com`
- **Senha**: `password123`

### Fluxo de Teste

1. **Acessar a página inicial**
   - URL: `http://localhost:5173/`
   - Clique no botão "Ir para Login"

2. **Ir direto para login**
   - URL: `http://localhost:5173/login`

3. **Preencher o formulário**
   - Digite um email válido
   - Digite uma senha com no mínimo 6 caracteres
   - Observe o feedback visual em tempo real

4. **Login bem-sucedido**
   - Será redirecionado para `/dashboard`
   - Veja a página do dashboard com as informações

5. **Logout**
   - Clique no ícone de perfil (canto superior direito)
   - Clique em "Sair"
   - Retornará para a página de login

## 📝 Validações Implementadas

### Email
- ✓ Campo obrigatório
- ✓ Deve estar no formato de email válido
- ✓ Feedback visual de validação

### Senha
- ✓ Campo obrigatório
- ✓ Mínimo 6 caracteres
- ✓ Toggle de visibilidade
- ✓ Sempre mascarada por padrão (segurança)

### Formulário Completo
- ✓ Botão de envio desabilitado até validações passarem
- ✓ Loading state durante processamento
- ✓ Mensagens de erro descritivas
- ✓ Opção de "Lembrar-me"

## 🎨 Recursos Visuais

- **Gradiente Purple/Blue**: Usado no header e botões
- **Ícones MDI**: Material Design Icons para melhor UX
- **Responsividade**: Funciona em mobile, tablet e desktop
- **Animações Suaves**: Transições elegantes entre estados

## 🔧 Customizações Possíveis

### Alterar Cores
Editar em `src/styles/settings.scss`:
```scss
$gradient-primary: linear-gradient(135deg, #sua-cor1 0%, #sua-cor2 100%);
```

### Mudar Credenciais de Teste
Editar em `src/components/LoginForm.vue`:
```javascript
if (email.value === 'novo@email.com' && password.value === 'nova-senha') {
  // Login bem-sucedido
}
```

### Integrar com API Real
Exemplo para conectar com backend:
```javascript
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: email.value, password: password.value })
})

const data = await response.json()
if (data.success) {
  // Armazenar token
  localStorage.setItem('token', data.token)
  router.push('/dashboard')
}
```

## 📱 Resposta em Diferentes Tamanhos

### Desktop (1920px+)
- Card de login com 4 colunas (1/3 da largura)
- Alinhado horizontalmente
- Todos os botões visíveis

### Tablet (768px - 1024px)
- Card de login com 5 colunas (55% da largura)
- Margem lateral reduzida
- Layout adaptado

### Mobile (até 767px)
- Card de login fullwidth com margens
- Stack vertical de elementos
- Botões expandidos

## 🐛 Troubleshooting

### "Port 5173 já está em uso"
```bash
# Usar uma porta diferente
npm run dev -- --port 3000
```

### Erro de módulos não encontrados
```bash
# Reinstalar dependências
rm -r node_modules package-lock.json
npm install
```

### Estilos não carregando
```bash
# Limpar cache
npm run dev -- --force
```

## 🚀 Build para Produção

```bash
npm run build
```

Isso cria uma pasta `dist/` com arquivos otimizados para produção.

## Preview do Build

```bash
npm run preview
```

Visualizar o build de produção localmente.

## 📚 Recursos Adicionais

- [Documentação Vuetify](https://vuetifyjs.com/)
- [Documentação Vue Router](https://router.vuejs.org/)
- [Material Design Icons](https://materialdesignicons.com/)
- [Guia de Boas Práticas](LOGIN_GUIDE.md)
