import { calcularPercentuais } from '../src/percentuaisEstado';

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

test('Calcula o percentual de representação de cada estado', () => {
  const percentuais = calcularPercentuais(faturamento);
  expect(percentuais.SP).toBe('37.53%');
  expect(percentuais.RJ).toBe('20.29%');
  expect(percentuais.MG).toBe('16.17%');
  expect(percentuais.ES).toBe('15.03%');
  expect(percentuais.Outros).toBe('10.98%');
});
