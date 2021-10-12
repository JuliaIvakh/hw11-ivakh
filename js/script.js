const numUser = +prompt("Enter any number");
function isPrime() {
  for (let i = 2; i < numUser; i++) {
    if (numUser % 2 === 0) {
      return false;
    }
  }
  return numUser > 1;
}
const result = isPrime();
console.log(result);
