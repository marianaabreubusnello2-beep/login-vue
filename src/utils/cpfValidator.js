/**
 * Valida CPF seguindo o algoritmo oficial da Receita Federal
 * @param {string} cpf - CPF com ou sem formatação
 * @returns {boolean} - true se CPF é válido, false caso contrário
 */
export function isValidCPF(cpf) {
  if (!cpf) return false

  // Remove caracteres especiais
  const cleanCPF = cpf.replace(/[^\d]/g, '')

  // Verifica se tem 11 dígitos
  if (cleanCPF.length !== 11) return false

  // Verifica se todos os dígitos são iguais (CPFs inválidos)
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false

  // Calcula primeiro dígito verificador
  let sum = 0
  let remainder

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i)
  }

  remainder = (sum * 10) % 11

  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false

  // Calcula segundo dígito verificador
  sum = 0

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i)
  }

  remainder = (sum * 10) % 11

  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false

  return true
}

/**
 * Formata CPF para o padrão XXX.XXX.XXX-XX
 * @param {string} cpf - CPF apenas com dígitos
 * @returns {string} - CPF formatado
 */
export function formatCPF(cpf) {
  const cleanCPF = cpf.replace(/[^\d]/g, '')
  
  if (cleanCPF.length <= 3) return cleanCPF
  if (cleanCPF.length <= 6) return cleanCPF.replace(/(\d{3})(\d+)/, '$1.$2')
  if (cleanCPF.length <= 9) return cleanCPF.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3')
  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

/**
 * Remove formatação do CPF
 * @param {string} cpf - CPF formatado
 * @returns {string} - CPF apenas com dígitos
 */
export function unformatCPF(cpf) {
  return cpf.replace(/[^\d]/g, '')
}
