const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const addButton = document.getElementById("add");

function add(a, b) {
  return a + b;
}

addButton.addEventListener("click", () => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  const result = add(firstValue, secondValue);
  console.log(result);
});

// Fill up the first input with the value 2.
// and the second input with the value 3.
// Now look at the output in the console.
// Can you spot the problem?
// Can you explain what is happening?

// Even if we define the type number in the inputs
// in the html, an input value will always be a string
// in JS world.
// That is why the result is 23, we are concatenating
// '2' and '3' as we would do with 'hello' + ' ' + world',
// yielding to 'hello world'.

// We could try to circumvent this error by adding JS
// runtime checks. Comment out the previous code and
// uncomment the following multiline comment.

// const firstInput = document.getElementById("number1");
// const secondInput = document.getElementById("number2");
// const addButton = document.getElementById("add");

// function add(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     throw "This function only accepts numbers!";
//   }

//   return a + b;
// }

// addButton.addEventListener("click", () => {
//   const firstValue = Number(firstInput.value);
//   const secondValue = Number(secondInput.value);
//   const result = add(firstValue, secondValue);
//   console.log(result);
// });

// If you want to see the function above throw an error,
// you can delete the Number function that wraps one of the
// const values.

// The only way to have type safety in JS is at runtime,
// that is to say, when the code is running in production,
// we can check our types with the built-in typeof function
// and give user feedback accordingly.

// However, most of the time we wish for type safety before
// this step, since most input in our code is not by the user
// and runtime checks are not stripped out of the target code,
// making our final bundle much larger.

// So, let's rewrite our code with TS!
// The ! in TS means that selection will never yield null. In other words it means: when you add an exclamation mark after variable/property name, you're telling to TypeScript that you're certain that value is not null or undefined.
// HTMLInputElement in TS means it will always have a value.
// The number type for the function params enforces our code to
// only accept numbers.
// To see TS in action, try to remove to conversion to Number in one of the input values: the code will complain about the string value.

// const firstInput = document.getElementById("number1")! as HTMLInputElement;
// const secondInput = document.getElementById("number2")! as HTMLInputElement;
// const addButton = document.getElementById("add")!;

// function add(a: number, b: number) {
//   return a + b;
// }

// addButton.addEventListener("click", () => {
//   const firstValue = Number(firstInput.value);
//   const secondValue = Number(secondInput.value);
//   const result = add(firstValue, secondValue);
//   console.log(result);
// });
