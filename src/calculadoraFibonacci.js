export function pertenceASequenciaFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b < numero) {
    const temp = a;
    a = b;
    b = temp + b;
  }

  return b === numero || numero === 0;
}
