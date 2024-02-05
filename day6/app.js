/*
// 노마더 코딩 숙제 계산기 만들기.

//오브젝트 안의 사칙연산을 return
const calculater = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multifly: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  square: function (a, b) {
    return a ** b;
  },
};

//상수의 값으로 사칙연산을 정의
const resultAdd = calculater.add(2, 3);
const resultMinus = calculater.minus(2, 3);
const resultMultifly = calculater.multifly(2, 3);
const resultDivide = calculater.divide(2, 3);
const resultSquare = calculater.square(2, 3);
calculater.add(5, 3);
calculater.minus(5, 3);
calculater.multifly(5, 3);
calculater.divide(5, 3);
calculater.square(5, 3);

//창을 띄움
console.log(resultAdd);
console.log(resultMinus);
console.log(resultMultifly);
console.log(resultDivide);
console.log(resultSquare);

const age = parseInt(prompt("How old are you?"));
if (isNaN(age)) {
  console.log("Please Write a number");
} else if (age < 18) {
  console.log("Oh~ no~");
} else if (age > 50) {
  console.log("no..");
}
*/
