import fs from 'fs';

export function calcularFaturamento(dados) {
  const diasComFaturamento = dados.filter((dia) => dia.valor > 0);
  const totalFaturamento = diasComFaturamento.reduce(
    (acc, dia) => acc + dia.valor,
    0
  );
  const mediaMensal = totalFaturamento / diasComFaturamento.length;

  const menorFaturamento = Math.min(
    ...diasComFaturamento.map((dia) => dia.valor)
  );
  const maiorFaturamento = Math.max(
    ...diasComFaturamento.map((dia) => dia.valor)
  );

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.valor > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

export function carregarDados() {
  const dados = JSON.parse(
    fs.readFileSync('data/faturamentoDiario.json', 'utf-8')
  );
  return calcularFaturamento(dados);
}
