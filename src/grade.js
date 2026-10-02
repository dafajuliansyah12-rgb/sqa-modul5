function calculateGrade(score) {
  if (score < 0 || score > 100) {
    throw new Error('Score must be 0-100');
  }
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'E';
}

function processOrder(price, isMember, quantity) {
  if (price <= 0 || quantity <= 0) {
    throw new Error('Invalid input');
  }

  let total = price * quantity;
  
  if (isMember) {
    total *= 0.9; // Diskon 10% member
  }

  if (quantity >= 10) {
    total *= 0.95; // Diskon grosir 5%
  }

  return total;
}

module.exports = { calculateGrade, processOrder };