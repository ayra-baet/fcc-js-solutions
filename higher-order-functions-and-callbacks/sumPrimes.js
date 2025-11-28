function sumPrimes(num) {
  const primes = [];

  // immediately return 0 if input number is less than 2
  if (num < 2) return 0;

  // helper function to check if a number is prime
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }

    return true;
  }

  // push prime numbers to primes array
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primes.push(i);
  }

  // computes for the sum of the prime numbers
  return primes.reduce((sum, prime) => sum + prime);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));