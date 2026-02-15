# Página de Login com CPF - Vue 3 + Vuetify 3

Uma aplicação de login moderna e segura desenvolvida com Vue 3 e Vuetify 3, seguindo as melhores práticas de desenvolvimento web.

## Características

✅ **Validação de CPF** - Algoritmo oficial da Receita Federal  
✅ **Máscara de Entrada** - Formatação automática (XXX.XXX.XXX-XX)  
✅ **Responsivo** - Funciona em qualquer dispositivo  
✅ **Acessível** - WCAG 2.1 AA compliant  
✅ **Seguro** - Proteção contra XSS, CSRF  
✅ **Design Moderno** - Material Design 3  
✅ **TypeScript Ready** - Pronto para migração  

## Requisitos

- Node.js 16+
- npm ou yarn

## Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/
│   └── LoginForm.vue        # Formulário de login
├── utils/
│   └── cpfValidator.js      # Lógica de validação de CPF
├── App.vue                  # Componente raiz
└── main.js                  # Entry point
```

## Funcionalidades

### 1. Validação de CPF
- Valida formato (11 dígitos)
- Verifica algoritmo oficial
- Rejeita CPFs sequenciais (111.111.111-11)
- Mensagens de erro claras

### 2. Formatação Automática
- Formata enquanto o usuário digita
- Suporta cópia/cola
- Máximo de 14 caracteres (formatado)

### 3. Validação de Senha
- Mínimo 8 caracteres
- Campo com toggle show/hide
- Feedback em tempo real

### 4. Acessibilidade
- Labels associadas com aria-label e aria-required
- Navegação por teclado completa
- Mensagens de erro anunciadas para leitores de tela
- Contraste WCAG AA

### 5. Segurança
- Sem armazenamento de dados sensíveis no localStorage
- Pronto para HTTPS
- Proteção contra XSS
- Validação tanto client-side quanto server-side (recomendado)

## Como Usar

1. **Desenvolver**

```bash
npm run dev
```

O aplicativo abrirá em http://localhost:3000

2. **Testar com CPF Válido**

Use um CPF válido, por exemplo:
- 123.456.789-09 (após validação)

3. **Build para Produção**

```bash
npm run build
```

Os arquivos otimizados estão em `dist/`

## Integração com Backend

Para integrar com seu backend:

1. Configure sua URL de API em `.env`
2. Modifique o método `authenticateUser()` em `LoginForm.vue`
3. Implemente autenticação real (JWT, OAuth, etc.)

Exemplo:

```javascript
async authenticateUser() {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cpf: unformatCPF(this.formData.cpf),
      password: this.formData.password
    })
  })
  
  if (!response.ok) throw new Error('Falha na autenticação')
  return await response.json()
}
```

## Segurança em Produção

- Use HTTPS obrigatoriamente
- Configure CORS adequadamente
- Implemente rate limiting para tentativas de login
- Use tokens JWT com expiração
- Implemente 2FA para maior segurança
- Valide CPF sempre no servidor

## Browser Support

- Chrome 91+
- Firefox 88+
- Safari 14+
- Edge 91+

## Licença

MIT

## Autor

Desenvolvido com boas práticas de segurança e UX em mente.
