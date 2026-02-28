// 1️⃣ Create a function called greetUser

const greetUser = (name)=>{
    console.log ("Hello, "+ name)
}
greetUser("sherif")

// 2️⃣ Create a function called squareNumber
const squareNumber = (number)=>{
return (number * number);
}
squareNumber(5);
console.log(squareNumber(5));

// 3️⃣ Create a function called isEven

const isEven = (number)=>{
    let even = number % 2 === 0;
    if (number === even) {
        return true;
    } 
    else {
        return false;   
    }
}
isEven(5);
console.log(isEven(5))



