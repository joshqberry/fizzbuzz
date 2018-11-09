function FizzBuzz() {

    var integerOrFizzOrBuzzOrFizzBuzz = "";
    var i = 1;

    while (i < 101) {
      if (i % 15 == 0) {
        integerOrFizzOrBuzzOrFizzBuzz += "fizzbuzz" + "<br>";
      }  else if (i % 3 == 0) {
        integerOrFizzOrBuzzOrFizzBuzz +=  "fizz" + "<br>";
      }  else if (i % 5 == 0) {
        integerOrFizzOrBuzzOrFizzBuzz += "buzz" + "<br>";
      } else {
      integerOrFizzOrBuzzOrFizzBuzz += i + "<br>";
      };
      i++;
    };

    document.getElementById("numlist").innerHTML = integerOrFizzOrBuzzOrFizzBuzz;
};
