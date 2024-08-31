export function calcularPercentuais(faturamento) {
  const total = Object.values(faturamento).reduce(
    (acc, valor) => acc + valor,
    0
  );

  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] =
      ((faturamento[estado] / total) * 100).toFixed(2) + '%';
  }

  return percentuais;
}
