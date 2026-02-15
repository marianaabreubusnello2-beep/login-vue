# Guia Rápido de Início

## 1️⃣ Instalação Rápida

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O aplicativo abrirá automaticamente em **http://localhost:3000**

## 2️⃣ Testar o Formulário

### CPF de Teste Válido
- Digite: `123.456.789-09` (ou qualquer CPF válido)
- A máscara será aplicada automaticamente

### Senha
- Mínimo 8 caracteres
- Qualquer combinação funciona para teste

### Comportamento
- ✅ Layout responsivo
- ✅ Validação em tempo real
- ✅ Mensagens de erro claras
- ✅ Toggle de mostrar/ocultar senha
- ✅ Botão "Lembrar-me"
- ✅ Link "Esqueci a senha"
- ✅ Link "Registre-se aqui"

## 3️⃣ Estrutura de Arquivos

```
cpf/
├── index.html                 # Página HTML
├── package.json              # Dependências
├── vite.config.js            # Config do Vite
├── .env.example              # Variáveis de exemplo
├── .gitignore                # Git ignore
├── .eslintrc.json            # ESLint config
│
├── README.md                 # Documentação principal
├── BOAS_PRATICAS.md          # Práticas implementadas
├── INTEGRACAO_BACKEND.md     # Como integrar com API
├── QUICK_START.md            # Este arquivo
│
└── src/
    ├── main.js               # Entry point
    ├── App.vue               # Componente raiz
    ├── components/
    │   └── LoginForm.vue     # Formulário de login
    ├── utils/
    │   ├── cpfValidator.js   # Lógica de CPF
    │   └── __tests__/
    │       └── cpfValidator.spec.js  # Testes (exemplo)
```

## 4️⃣ Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor com hot reload

# Build
npm run build        # Cria versão otimizada em dist/
npm run preview      # Visualiza a build localmente

# Testing (quando configurado)
npm run test         # Executa testes

# Linting (quando configurado)
npm run lint         # Verifica qualidade do código
npm run lint:fix     # Corrige problemas automáticos
```

## 5️⃣ Arquivos Importantes

### `src/utils/cpfValidator.js`
Contém funções de validação de CPF:
- `isValidCPF(cpf)` - Valida formato e dígitos
- `formatCPF(cpf)` - Aplica máscara
- `unformatCPF(cpf)` - Remove formatação

### `src/components/LoginForm.vue`
Formulário completo com:
- Validação de CPF
- Validação de senha
- Tratamento de erros
- Estados de carregamento
- Acessibilidade

## 6️⃣ Próximas Etapas

### Desenvolvimento
1. [ ] Conectar com um backend real
2. [ ] Adicionar página de registro
3. [ ] Implementar "Esqueci a Senha"
4. [ ] Adicionar autenticação com 2FA
5. [ ] Criar página de dashboard

### Qualidade
1. [ ] Adicionar testes unitários (Vitest)
2. [ ] Adicionar testes E2E (Cypress)
3. [ ] Configurar ESLint e Prettier
4. [ ] Setup de CI/CD

### Segurança
1. [ ] HTTPS em produção
2. [ ] Rate limiting no backend
3. [ ] Testes de penetração
4. [ ] OWASP compliance

### Performance
1. [ ] Minificar CSS/JS
2. [ ] Lazy loading
3. [ ] Caching estratégico
4. [ ] Lighthouse 90+

## 7️⃣ Troubleshooting

### Porta 3000 já em uso
```bash
# Use outra porta
npm run dev -- --port 3001
```

### Erro ao instalar dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de validação de CPF
- Certifique-se que o CPF tem 11 dígitos
- Não pode ser CPF com dígitos repetidos (111.111.111-11)

## 8️⃣ Recursos Úteis

- 📖 [Documentação Vue 3](https://vuejs.org)
- 🎨 [Documentação Vuetify 3](https://vuetifyjs.com)
- ⚡ [Documentação Vite](https://vitejs.dev)
- 🔐 [OWASP Top 10](https://owasp.org/Top10/)

## 9️⃣ Support

Para dúvidas ou problemas:
1. Verifique a documentação em `README.md`
2. Consulte `INTEGRACAO_BACKEND.md` para integração
3. Revise `BOAS_PRATICAS.md` para implementações

---

**Pronto para começar? Execute `npm run dev` e veja em ação!** 🚀

