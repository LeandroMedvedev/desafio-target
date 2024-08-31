import { calcularSoma } from '../src/somaNumeros';

test('Calcula a soma dos números até o índice dado', () => {
  expect(calcularSoma(13)).toBe(91);
  expect(calcularSoma(5)).toBe(15);
});
