function printDigits(num) {
    var result = 0,
      counter = 0;
    for (i = num; i >= 1; i = i / 10 - (i % 10) * 0.1) {
      counter = i % 10;
      result = result * 10 + counter;
    }
    return result
  }
  
  console.log(printDigits(123456789));
  