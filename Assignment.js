// const miles: number = 130;
// const kilometers: number = miles * 1.60934;
// console.log(
//   `The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles`
// );
//---------------------------------------------------------------------
// Question 2
import inquirer from "inquirer";
let dynamicNumber = Math.floor(Math.random() * 10) + 1;
let userInput = await inquirer.prompt({
    name: "num1",
    type: "input",
    message: "Enter the number",
});
if (userInput.num1 > dynamicNumber) {
    console.log(`${userInput.num1} is greater then ${dynamicNumber}`);
}
else if (userInput.num1 === dynamicNumber) {
    console.log(`${userInput.num1} is eqaul too ${dynamicNumber}`);
}
else if (userInput.num1 < dynamicNumber) {
    console.log(`${userInput.num1} is less then ${dynamicNumber}`);
}
//--------------------------------------------------------------------------------------
// Question 3
// import inquirer from "inquirer";
// let userInput = await inquirer.prompt({
//   name: "value",
//   type: "input",
//   message: "Enter the name",
// });
// const knownFriends: string[] = ["AROOJ", "WAJEEHA", "SAFDAR"];
// switch (userInput.value.toUpperCase()) {
//   case knownFriends[0]:
//   case knownFriends[1]:
//   case knownFriends[2]:
//     console.log(`Yes, ${userInput.value} is a known friend.`);
//     break;
//   default:
//     console.log("This name is not recognized as a known friend.");
// }
//-----------------------------------------------------------------------------
// Question 3
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// let val1 = 2;
// let val2 = 5;
// console.log(`The sum of ${val1} and ${val2} is ${add(val1, val2)}.`);
// let val3 = 8;
// let val4 = 7;
// console.log(`The sum of ${val3} and ${val4} is ${add(val3, val4)}.`);
//------------------------------------------------------------------------------------
// Question 4
// let num1 = 15;
// let num2 = 10;
// let operatorAddition = "+";
// let operatorSubtraction = "-";
// function calculate(num1: number, num2: number, operator: string) {
//   switch (operator) {
//     case operatorAddition:
//       return num1 + num2;
//     case operatorSubtraction:
//       return num1 - num2;
//     default:
//   }
// }
// console.log(
//   `The result of ${num1} ${operatorAddition} ${num2} is ${calculate(
//     num1,
//     num2,
//     operatorAddition
//   )}.`
// );
// console.log(
//   `The result of ${num1} ${operatorSubtraction} ${num2} is ${calculate(
//     num1,
//     num2,
//     operatorSubtraction
//   )}.`
// );
//----------------------------------------------------------------------------------------
// Question 4
// let funExpression = function (name: string) {
//   console.log(`Hi ${name}, how is ur T.S learning today !`);
// };
// funExpression("Shaheer");
// function declaration(name: string) {
//   console.log(`Hi ${name}, how is ur T.S learning today !`);
// }
// declaration("Shaheer");
