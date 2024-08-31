import { pertenceASequenciaFibonacci } from '../src/calculadoraFibonacci';

test('Verifica se o número pertence à sequência de Fibonacci', () => {
  expect(pertenceASequenciaFibonacci(21)).toBe(true);
  expect(pertenceASequenciaFibonacci(4)).toBe(false);
});
