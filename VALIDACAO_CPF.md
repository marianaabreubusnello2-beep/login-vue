# Detalhes de Validação de CPF

## Algoritmo de Validação

O CPF (Cadastro de Pessoa Física) utiliza um algoritmo de validação com 11 dígitos:
- Primeiros 8 dígitos: identificação do contribuinte
- 9º dígito: dígito verificador 1
- 10º dígito: dígito verificador 2
- 11º dígito: dígito verificador 3 (não usado, apenas para formatação)

**Formato**: XXX.XXX.XXX-XX

## Cálculo dos Dígitos Verificadores

### Primeiro Dígito Verificador

1. Multiplica cada um dos 9 primeiros dígitos pela sequência 10, 9, 8, 7, 6, 5, 4, 3, 2
2. Soma o resultado
3. Calcula o resto da divisão por 11
4. Se o resultado for 10 ou 11, será 0; caso contrário, mantém o valor

**Fórmula**:
```
Soma = (d1×10) + (d2×9) + (d3×8) + ... + (d9×2)
Resto = (Soma × 10) % 11
Se Resto = 10 ou 11, então Verificador = 0
Senão Verificador = Resto
```

### Segundo Dígito Verificador

1. Multiplica cada um dos 10 primeiros dígitos pela sequência 11, 10, 9, 8, 7, 6, 5, 4, 3, 2
2. Soma o resultado
3. Calcula o resto da divisão por 11
4. Se o resultado for 10 ou 11, será 0; caso contrário, mantém o valor

**Fórmula**:
```
Soma = (d1×11) + (d2×10) + (d3×9) + ... + (d10×2)
Resto = (Soma × 10) % 11
Se Resto = 10 ou 11, então Verificador = 0
Senão Verificador = Resto
```

## Exemplo Prático

CPF: **123.456.789-09**

### Cálculo do Primeiro Dígito:
```
1×10 + 2×9 + 3×8 + 4×7 + 5×6 + 6×5 + 7×4 + 8×3 + 9×2
= 10 + 18 + 24 + 28 + 30 + 30 + 28 + 24 + 18
= 210

(210 × 10) % 11 = 2100 % 11 = 0

Primeiro verificador = 0 ✓
```

### Cálculo do Segundo Dígito:
```
1×11 + 2×10 + 3×9 + 4×8 + 5×7 + 6×6 + 7×5 + 8×4 + 9×3 + 0×2
= 11 + 20 + 27 + 32 + 35 + 36 + 35 + 32 + 27 + 0
= 255

(255 × 10) % 11 = 2550 % 11 = 9

Segundo verificador = 9 ✓
```

**Resultado**: 123.456.789-09 ✅ Válido

## CPFs Inválidos Comuns

### CPFs com Dígitos Repetidos
Sempre inválidos:
- 000.000.000-00
- 111.111.111-11
- 222.222.222-22
- ... até 999.999.999-99

### Motivos de Rejeição

| Condição | Exemplo | Razão |
|----------|---------|-------|
| Menos de 11 dígitos | 123.456.789 | Incompleto |
| Mais de 11 dígitos | 123.456.789-090 | Completo demais |
| Dígitos repetidos | 111.111.111-11 | Padrão inválido |
| Dígito verificador errado | 123.456.789-08 | Falha na validação |
| Caracteres inválidos | 123.456.789-ab | Contém letras |

## Implementação em cpfValidator.js

```javascript
export function isValidCPF(cpf) {
  if (!cpf) return false

  // 1. Remove caracteres especiais
  const cleanCPF = cpf.replace(/[^\d]/g, '')

  // 2. Verifica se tem 11 dígitos
  if (cleanCPF.length !== 11) return false

  // 3. Rejeita dígitos repetidos
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false

  // 4. Calcula primeiro verificador
  let sum = 0
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i)
  }
  let remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false

  // 5. Calcula segundo verificador
  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false

  return true
}
```

## Máscara de Formatação

A máscara é aplicada progressivamente:

```
Input:  1234567890
        12345678901

Output: 1 → 1
        12 → 12
        123 → 123.
        1234 → 123.4
        12345 → 123.45
        123456 → 123.456.
        1234567 → 123.456.7
        12345678 → 123.456.78
        123456789 → 123.456.789.
        1234567890 → 123.456.789-0
        12345678901 → 123.456.789-01
```

## Segurança

### Client-Side (JavaScript)
- Valida formato rapidamente
- Melhora UX com feedback
- **NÃO é seguro para autenticação**

### Server-Side (Backend) - OBRIGATÓRIO
- Sempre validar novamente
- Verificar existência no banco
- Comparar com dados pessoais
- Logar tentativas suspeitas
- Rate limiting

## Testes de Validação

```javascript
// Válidos
isValidCPF('123.456.789-09')  // true
isValidCPF('12345678909')     // true

// Inválidos
isValidCPF('123.456.789-08')  // false (dígito errado)
isValidCPF('111.111.111-11')  // false (repetido)
isValidCPF('123.456.78')      // false (incompleto)
isValidCPF('')                // false (vazio)
isValidCPF(null)              // false (nulo)
```

## Referências

- [Receita Federal - CPF](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/institucional/faq/pessoa-fisica/geral/cpf)
- [Algoritmo de Validação CPF](https://www.macoratti.net/alg_cpf.htm)
- [RFC 3986 - URI Generic Syntax](https://tools.ietf.org/html/rfc3986)

