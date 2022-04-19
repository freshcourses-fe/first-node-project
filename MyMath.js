class MyMath {
  static sum = (...numbers) =>
    numbers.reduce((total, number) => total + number);
  static subtract = (...numbers) =>
    numbers.reduce((total, number) => total - number);
}

const data = 12354;

exports.MyMath = MyMath;