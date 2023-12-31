import inquirer from "inquirer";
/*async function userInput() {
  const questions: QuestionCollection = [
    {
      name: "num1",
      type: "number",
      message: "Enter the first number:",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number:",
    }
  ]
  const result: results =  await inquirer.prompt(questions)
  console.log("Result of sum is:", result.num1 + result.num2);
}
await userInput()
console.log("After executing the function.");

// --------------------------------------------------

const questions: QuestionCollection = [{
    name: "num1",
    type: "number",
    message: "Enter first number:"
},
{
    name: "num2",
    type: "number",
    message: "Enter second number:"
},
{
    name: "operation",
    type: "list",
    message: "Enter the operation:",
    choices: ["+", "-", "*", "%", "/", "^"]
}
]
let results: Promise<results> = inquirer.prompt(questions);
results
    .then((result: results) => {
        switch (result.operation) {
            case "+":
                console.log(`Sum of ${result.num1} + ${result.num2} = ${result.num1 + result.num2}`);
                break;
            case "-":
                console.log(`Subtarction of ${result.num1} - ${result.num2} = ${result.num1 - result.num2}`);
                break;
            case "*":
                console.log(`Multiplication of ${result.num1} * ${result.num2} = ${result.num1 * result.num2}`);
                break;
            case "%":
                console.log(`Modulus of ${result.num1} % ${result.num2} = ${result.num1 % result.num2}`);
                break;
            case "/":
                console.log(`Division of ${result.num1} / ${result.num2} = ${result.num1 / result.num2}`);
                break;
            case "^":
                console.log(`Exponent of ${result.num1} ^ ${result.num2} = ${result.num1 ** result.num2}`);
                break;
            default:
                break;
        }
    })
    .catch((error: results) => {
        console.error("Something went wrong", error);

    });*/
async function calculator() {
    const questions = [{
            name: "num1",
            type: "number",
            message: "Enter first number:"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter second number:"
        },
        {
            name: "operation",
            type: "list",
            message: "Enter the operation:",
            choices: ["+", "-", "*", "%", "/", "^"]
        }
    ];
    const result = inquirer.prompt(questions);
    switch (result.operation) {
        case "+":
            console.log(`Sum of ${result.num1} + ${result.num2} = ${result.num1 + result.num2}`);
            break;
        case "-":
            console.log(`Subtarction of ${result.num1} - ${result.num2} = ${result.num1 - result.num2}`);
            break;
        case "*":
            console.log(`Multiplication of ${result.num1} * ${result.num2} = ${result.num1 * result.num2}`);
            break;
        case "%":
            console.log(`Modulus of ${result.num1} % ${result.num2} = ${result.num1 % result.num2}`);
            break;
        case "/":
            console.log(`Division of ${result.num1} / ${result.num2} = ${result.num1 / result.num2}`);
            break;
        case "^":
            console.log(`Exponent of ${result.num1} ^ ${result.num2} = ${result.num1 ** result.num2}`);
            break;
        default:
            break;
    }
}
calculator();
//console.log("After executing the function.");
