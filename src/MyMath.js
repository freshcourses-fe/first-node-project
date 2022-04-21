class MyMath {
  static sum = (...numbers) =>
    numbers.reduce((total, number) => total + number);
  static subtract = (...numbers) =>
    numbers.reduce((total, number) => total - number);
}
const data1 = 123456;
// module.exports = { default: MyMath};
export default MyMath;
export {data1};
export let test = false;