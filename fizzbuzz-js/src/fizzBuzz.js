class FizzBuzz {
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }
  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }
  isDivisibleByThreeAndFive(number) {
    return this._isDivisibleBy(number, 15);
  }
  
  says(number) {
    if (this.isDivisibleByThreeAndFive(number)) {
      return "FizzBuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Fizz";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
    return number;
  }
 
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
}