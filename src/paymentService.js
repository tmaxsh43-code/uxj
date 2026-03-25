/**
 * Process a payment amount and mark it as processed.
 *
 * Logs "High payment" to the console when the amount is greater than 10000.
 *
 * @param {number} amount - The payment amount.
 * @returns {boolean} `true` if the payment was processed successfully.
 */
export function processPayment(amount) {
  if (amount > 10000) {
    console.log("High payment");
  }
  return true;
}
