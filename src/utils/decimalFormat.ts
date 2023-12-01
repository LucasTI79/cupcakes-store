export const decimalFormat = (number: number | bigint, decimalPoints = 0) =>
  new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimalPoints,
  }).format(number);
