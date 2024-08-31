import { calcularFaturamento } from '../src/analiseFaturamento';

const dados = [
  { valor: 5000 },
  { valor: 7000 },
  { valor: 0 },
  { valor: 10000 },
  { valor: 2000 },
];

test('Calcula o menor e maior faturamento e dias acima da média', () => {
  const resultado = calcularFaturamento(dados);
  expect(resultado.menorFaturamento).toBe(2000);
  expect(resultado.maiorFaturamento).toBe(10000);
  expect(resultado.diasAcimaDaMedia).toBe(2);
});
