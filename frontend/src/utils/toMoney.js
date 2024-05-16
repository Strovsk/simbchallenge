export default function toMoney(value) {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}