// const hello = (name) => {
//   console.log("hello there " + name);
// };
// hello("john");
// hello("anna");
// hello("bob");

const calculate = (value) => {
  const newValue = value * 2.54;
  console.log("the Value is " + value * 2.54 + " cm");
  return newValue;
};
const width = calculate(100);
const height = calculate(80);

const dimension = [width, height];
console.log(dimension);
