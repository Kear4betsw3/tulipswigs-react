export function formatPrice(amount) {
    return "R " + amount.toLocaleString("en-ZA", { minimumFractionDigits: 2 });
  }
  