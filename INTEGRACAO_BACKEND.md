# Guia de Integração com Backend

## Overview

Este guia mostra como integrar a página de login com um backend real.

## 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
VITE_API_URL=https://seu-api.com/api
VITE_APP_NAME=Seu App
```

## 2. Criar Serviço de API

Crie um arquivo `src/services/authService.js`:

```javascript
const API_URL = import.meta.env.VITE_API_URL

export async function login(cpf, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', // Para cookies
    body: JSON.stringify({
      cpf,
      password
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Erro na autenticação')
  }

  return await response.json()
}

export async function logout() {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Erro ao fazer logout')
  return true
}

export async function verifyToken(token) {
  const response = await fetch(`${API_URL}/auth/verify`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) throw new Error('Token inválido')
  return await response.json()
}
```

## 3. Atualizar LoginForm.vue

Modifique o método `authenticateUser()`:

```javascript
import { login } from '../services/authService'
import { unformatCPF } from '../utils/cpfValidator'

// ...

async authenticateUser() {
  try {
    const response = await login(
      unformatCPF(this.formData.cpf),
      this.formData.password
    )

    // Armazenar token (preferencialmente em httpOnly cookie)
    if (response.token) {
      sessionStorage.setItem('auth_token', response.token)
      // ou localStorage se necessário
      // localStorage.setItem('auth_token', response.token)
    }

    return response
  } catch (error) {
    throw new Error(error.message || 'Falha na autenticação')
  }
}
```

## 4. Exemplo de Backend (Node.js/Express)

```javascript
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// Validar CPF
const isValidCPF = (cpf) => {
  // Implementar validação do CPF
  if (!/^\d{11}$/.test(cpf)) return false
  // ... resto da lógica
  return true
}

// Rota de login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { cpf, password } = req.body

    // Validar entrada
    if (!cpf || !password) {
      return res.status(400).json({
        message: 'CPF e senha são obrigatórios'
      })
    }

    // Validar formato do CPF
    if (!isValidCPF(cpf)) {
      return res.status(400).json({
        message: 'CPF inválido'
      })
    }

    // Buscar usuário no banco de dados
    const user = await User.findOne({ cpf })

    if (!user) {
      return res.status(401).json({
        message: 'CPF ou senha inválidos'
      })
    }

    // Verificar senha
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({
        message: 'CPF ou senha inválidos'
      })
    }

    // Gerar token JWT
    const token = jwt.sign(
      { id: user.id, cpf: user.cpf },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Definir cookie httpOnly
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 horas
    })

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        cpf: user.cpf
      }
    })
  } catch (error) {
    console.error('Erro no login:', error)
    res.status(500).json({
      message: 'Erro no servidor. Tente novamente mais tarde.'
    })
  }
})

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const token = req.cookies.auth_token || req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.id
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' })
  }
}

// Rota protegida de exemplo
app.get('/api/dashboard', authenticate, (req, res) => {
  res.json({ message: 'Bem-vindo ao dashboard' })
})

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})
```

## 5. Segurança

### No Frontend
- ✅ Validar CPF antes de enviar
- ✅ Usar HTTPS
- ✅ Não armazenar senhas
- ✅ Limpar dados sensíveis

### No Backend (CRITICAL)
- ✅ Validar CPF novamente
- ✅ Hash de senhas com bcrypt (mínimo 10 rounds)
- ✅ Rate limiting (máximo 5 tentativas por IP/min)
- ✅ Logs de tentativas falhadas
- ✅ HTTPS obrigatório
- ✅ CORS configurado corretamente
- ✅ JWT com expiração
- ✅ HttpOnly cookies para tokens

## 6. Rate Limiting (Node.js/Express)

```javascript
const rateLimit = require('express-rate-limit')

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // máximo 5 requisições
  message: 'Muitas tentativas de login. Tente novamente mais tarde.'
})

app.post('/api/auth/login', loginLimiter, async (req, res) => {
  // ... lógica de login
})
```

## 7. Tratamento de Erros

### Resposta de Erro Padrão
```json
{
  "success": false,
  "message": "Descrição do erro",
  "code": "ERROR_CODE"
}
```

### Códigos de Erro
- `INVALID_CPF` - CPF inválido
- `INVALID_PASSWORD` - Senha inválida
- `USER_NOT_FOUND` - Usuário não encontrado
- `TOO_MANY_ATTEMPTS` - Muitas tentativas
- `INTERNAL_ERROR` - Erro do servidor

## 8. Testes

```bash
# Teste com curl
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "cpf": "12345678909",
    "password": "sua-senha-segura"
  }'
```

## 9. Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] HTTPS ativado
- [ ] Rate limiting ativado
- [ ] Logs de segurança
- [ ] Testes de penetração
- [ ] Certificado SSL válido
- [ ] Backup do banco de dados
- [ ] Monitoramento ativo
- [ ] Recovery plan definido

