//#region A. Part 1: Coding Questions (7.5 Grade):

//#region 1. Convert the string "123" to a number and add 7. 

function convertStringToNumber()
{
    console.log(Number("123") + 7);
}

// convertStringToNumber();

//#endregion

//#region 2. Check if the given variable is falsy and return "Invalid" if it is.

function checkFalsy()
{
    const var1 = 0;
    if (!var1)
    {
        console.log("Invalid");
    }
}

// checkFalsy()

//#endregion

//#region 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue.

function oddNumbers()
{
    for (let i = 1; i <= 10; i++)
    {
        process.stdout.write(`${i % 2 ? i : ","}`);
    }
}

// oddNumbers();

//#endregion

//#region 4. Create an array of numbers and return only the even numbers using filter method.

function evenNumbers(numbers)
{
    if (numbers instanceof Array) return numbers.filter((num) => num % 2 === 0);
    else return "Invalid Datatype: Requires 'Array'";
}

// console.log(evenNumbers([1, 2, 3, 4, 5]));  

//#endregion

//#region 5. Use the spread operator to merge two arrays, then return the merged array.

function mergeArrays(arr1, arr2)
{
    if (arr1 instanceof Array && arr2 instanceof Array) return [...arr1, ...arr2];
    else return "Invalid Datatype: Requires 'Array'";
}

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

//#endregion

//#region 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

function dayOfWeek(number)
{
    switch (number)
    {
        case 1:
        case 8:
            return "Sunday";

        case 2:
            return "Monday";

        case 3:
            return "Tuesday";

        case 4:
            return "Wednesday";

        case 5:
            return "Thursday";

        case 6:
            return "Friday";

        case 7:
            return "Saturday";

        default:
            return "Error: Invalid Number/Datatype";
    }
}

// console.log(dayOfWeek(2))

//#endregion

//#region 7. Create an array of strings and return their lengths using map method

function lengthOfArray()
{
    const arr1 = ["a", "ab", "abc"];
    console.log(arr1.map((_, index) =>
    {
        return index + 1;
    }));
}

// lengthOfArray();

//#endregion

//#region 8. Write a function that checks if a number is divisible by 3 and 5.

function isDivisibleBy3And5(num)
{
    if (typeof num !== "number") return "Error: Invalid Datatype";
    if (num % 3 === 0 && num % 5 === 0)
    {
        return "Divisible by both";
    }
    if (num % 3 === 0)
    {
        return "Divisible by 3 only";
    }
    if (num % 5 === 0)
    {
        return "Divisible by 5 only";
    }
    return "Not Divisible by neither";
}

// console.log(isDivisibleBy3And5(15))

//#endregion

//#region 9. Write a function using arrow syntax to return the square of a number.

const squareOf = (num) =>
{
    if (typeof num !== "number") return "Error: Invalid Datatype";
    return num ** 2;
};

// console.log(squareOf(5))

//#endregion

//#region 10.Write a function that destructures an object to extract values and returns a formatted string.

function reconstruct(obj)
{
    if (typeof obj !== "object") return "Error: Invalid Datatype";
    if (!obj.name || !obj.age) return "Error: Missing properties (name/age)";
    return `${obj.name} is ${obj.age} years old`;
}

// const person = {name: 'Omar', age: 25}
// console.log(reconstruct(person))

//#endregion

//#region 11.Write a function that accepts multiple parameters (two or more) and returns their sum.

function sums(...nums)
{
    let result = 0;
    nums.forEach(number =>
    {
        if (typeof number !== "number") return;
        result += number;
    });
    return result;
}

// console.log(sums(1, 2, 3, 4, 5))

//#endregion

//#region 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

function promiser(message, duration)
{
    if (typeof duration !== "number") return "Error: Invalid Datatype: duration is not a number";
    return new Promise((resolved) =>
    {
        setTimeout(() =>
        {
            resolved(message);
        }, duration);
    });
}

async function promiseResolver()
{
    const data = await promiser("Success", 3000);
    console.log(data);
}

// promiseResolver()

//#endregion

//#region 13. Write a function to find the largest number in an array.

function maxNum(arr)
{
    if (!arr.length) return "Error: Empty Array";
    let max = arr[0];

    for (let i = 0; i < arr.length; i++)
    {
        if (typeof arr[i] !== "number" || Number.isNaN(arr[i])) return "Error: Invalid Datatype";
        if (arr[i + 1] === undefined) break;

        if (max < arr[i + 1])
        {
            max = arr[i + 1];
        }
    }

    return max;
}

// const x = [1, 3, 7, 2, 4];
// console.log(maxNum(x));

//#endregion

//#region 14. Write a function that takes an object and returns an array containing only its keys.

function getKeys(obj)
{
    if (typeof obj !== "object") return "Error: Invalid Datatype: obj must be 'object'";
    return Object.keys(obj);
}

// const obj = { name: "John", age: 30 };
// console.log(getKeys(obj));

//#endregion

//#region 15. Write a function that splits a string into an array of words based on spaces.

function stringToArray(sentence)
{
    if (typeof sentence !== "string") return "Error: Invalid Datatype";
    return sentence.trim().split(" ").filter((element) => element !== "");
}

// const data = "The quick brown fox"
// console.log(stringToArray(data))

//#endregion


//#endregion

// ===================================================================

//#region B. Part 2: Essay Questions (2.5 Grade):

//#region 1. What is the difference between forEach and for...of? When would you use each?

// differences:
// 1- foreach runs a series of operations (callback function) simultaneously, unlike for...of sequentially.
// 2- foreach is a method for array only, unlike for...of a loop statement.
// 3- foreach accepts `thisArg` to use as `this` for the callback function.
// 4- foreach can't use control flow statements (break, continue, return). the reason is no.1
// use case:
// foreach: 
// for..of: 

const users =
    [
        { username: "user1", age: 21 },
        { username: "user2", age: 22 },
        { username: "user3", age: 23 },
        { username: "user4", age: 24 },
        { username: "user5", age: 25 },
        { username: "user6", age: 26 },
    ];

const newUser = { username: "user6", age: 26 };

users.forEach(function (user)
{
    // console.log(this);
}, { admin: "Omar", email: "omar@email.com" });


//#endregion

//#region 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.


// hoisting is a concept where the declaration of the variables and functions are being 
// initialized with the value undefined to the global object (for node) / window object 
// (for browser) in first phase of execution context (Creation Phase).
// while the variables declared using `const` or `let` are being hoisted too, but remains 
// in a local unaccessible memory (this is called temporal dead zone) until reached during 
// the second phase (Execution Phase).


// console.log({var1}); // expected: undefined
var var1 = "varUsingVar";

try
{
    // console.log({const1}); // expected: ReferenceError: Cannot access 'const1' before initialization
    const const1 = "varUsingConst";
}
catch (error)
{
    // console.log({error});
}

//#endregion

//#region 3. What are the main differences between == and ===?

// === : comparison operator compares the exact value and the datatype
// == : comparison operator compares the exact value only

//#endregion

//#region 4. Explain how try-catch works and why it is important in async operations.

// in the `try` block if an exception is thrown, it stops executing, and goes to  `catch` block.
// if async operations, the return of it not necessary is how we expect it, so `try-catch` statement
// is essential in preventing unhandled exceptions and proper error management.

//#endregion

//#region 5. What’s the difference between type conversion and coercion? Provide examples of each.

// type conversion is when we explicitly convert a type to another.
// example:

const stringNumber1 = "20";
const convertToNumber = Number(stringNumber1); // converted to number explicitly
// console.log(typeof convertToNumber);

// type coercion: is when the interpreter converts the type implicitly to another.
// example:

const stringNumber2 = "20";
const numberNumber = 30; // coerced to string to execute the concatenation of to string variables
// console.log(typeof (stringNumber2 + numberNumber))

//#endregion


//#endregion


