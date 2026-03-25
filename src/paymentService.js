export function processPayment(amount) {
  if (amount > 10000) {
    console.log("High payment");
  }
  return true;
}
