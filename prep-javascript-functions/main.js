
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResults = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResults);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMintutes Exercise:', convertHoursToMinutesResults);

function getGreeting(name) {
  return name;
}
var getGreetingResult = getGreeting('World');
console.log('getGreetingResult Excercise: Hello' + ' ' + getGreetingResult + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy Excercise:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResults = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResults = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', getFullNameResults);

function cube(number) {
  return number * number * number;
}
var cubeResults = cube(5);
console.log('cube Exercise:', cubeResults);
