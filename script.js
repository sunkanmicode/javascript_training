//function
// const hello = (name) => {
//   console.log("hello there " + name);
// };
// hello("john");
// hello("anna");
// hello("bob");

//FUNCTION RETURN
// const calculate = (value) => {
//   const newValue = value * 2.54;
//   console.log("the Value is " + value * 2.54 + " cm");
//   return newValue;
// };
// const width = calculate(100);
// const height = calculate(80);

// const dimension = [width, height];
// console.log(dimension);

// //FUNCTION DECLARATION
// function addValue(num1, num2) {
//   return num1 + num2;
// }
// const firstValue = addValue(10, 5);
// const secondValue = addValue(5, 5);

// //like arrow function or declaration
// const addValue2 = function (num1, num2) {
//   return num1 + num2;
// };
// const thirdValue = addValue2(20, 30);

// const numValue = [firstValue, secondValue, thirdValue];
// console.log(numValue);

//OBJECTS AND DOT NOTATION
// const person = {
//   name: "Seun",
//   lastName: "Oluwafemi",
//   age: 40,
//   education: false,
//   married: true,
//   siblings: ["Kemi", "Dami", "Bola", "Dotun"],
//   greeting() {
//     console.log("hello there am SEUN");
//   },
// };
// //to access them use dot natation
// console.log(person.name);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.siblings[2]);
// person.greeting();

const readMore = document.querySelector(".read-more");
const showImage = document.querySelector(".showImage");
const showText = document.querySelector(".moreText");

readMore.addEventListener("click", () => {
  showText.classList.toggle("show-more");
  if (readMore.innerText === "Read More") {
    readMore.innerText = "Read Less";
  } else {
    readMore.innerText = "Read More";
  }
});
