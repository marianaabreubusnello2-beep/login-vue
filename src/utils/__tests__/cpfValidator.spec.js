/**
 * Testes para cpfValidator.js
 * 
 * Para executar, instale vitest:
 * npm install -D vitest
 * 
 * Depois execute:
 * npm run test
 */

// import { describe, it, expect } from 'vitest'
// import { isValidCPF, formatCPF, unformatCPF } from '../cpfValidator'

// describe('CPF Validator', () => {
//   describe('isValidCPF', () => {
//     it('deve validar um CPF válido', () => {
//       expect(isValidCPF('123.456.789-09')).toBe(true)
//     })

//     it('deve rejeitar um CPF inválido', () => {
//       expect(isValidCPF('123.456.789-00')).toBe(false)
//     })

//     it('deve rejeitar CPF com dígitos repetidos', () => {
//       expect(isValidCPF('111.111.111-11')).toBe(false)
//       expect(isValidCPF('000.000.000-00')).toBe(false)
//     })

//     it('deve rejeitar CPF vazio', () => {
//       expect(isValidCPF('')).toBe(false)
//       expect(isValidCPF(null)).toBe(false)
//       expect(isValidCPF(undefined)).toBe(false)
//     })

//     it('deve rejeitar CPF com menos de 11 dígitos', () => {
//       expect(isValidCPF('123.456.789')).toBe(false)
//     })

//     it('deve validar CPF sem formatação', () => {
//       expect(isValidCPF('12345678909')).toBe(true)
//     })
//   })

//   describe('formatCPF', () => {
//     it('deve formatar CPF corretamente', () => {
//       expect(formatCPF('12345678909')).toBe('123.456.789-09')
//     })

//     it('deve formatar CPF parcialmente', () => {
//       expect(formatCPF('123')).toBe('123')
//       expect(formatCPF('123456')).toBe('123.456')
//       expect(formatCPF('123456789')).toBe('123.456.789')
//     })

//     it('deve preservar formatação já existente', () => {
//       expect(formatCPF('123.456.789-09')).toBe('123.456.789-09')
//     })
//   })

//   describe('unformatCPF', () => {
//     it('deve remover formatação', () => {
//       expect(unformatCPF('123.456.789-09')).toBe('12345678909')
//     })

//     it('deve retornar CPF sem formatação sem mudanças', () => {
//       expect(unformatCPF('12345678909')).toBe('12345678909')
//     })
//   })
// })
