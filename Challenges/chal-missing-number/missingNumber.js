let missingNum = [1, 2, 3, 4, 5, 6, 7, 9, 10],
  count = 10;
let missing = new Array();

for (i = 1; i <= count; i++) {
  if (missingNum.indexOf(i) === -1) {
    missing.push(i);
  }
}
console.log(missing); 