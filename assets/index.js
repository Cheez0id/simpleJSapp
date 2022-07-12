
// Write a function that takes in an array of integers and response is the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

//I think I'm going to need an array of integers with some duplicate numbers

const myArray = [1,2,3,4,5,6,6,7,7,8,9]

//I need to write a function that compares the integers

let compareFunction = () =>{
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] = myArray[i++])
        console.log(i)
      }
      
}


//I need to map a new array
let arrayManager = () =>{
    console.log(`let's get started!`);
    const newArray = myArray.map(compareFunction)
}

arrayManager();
















//let's build a simple game using javascript
//first, let's do variables that will hold the number of wins and losses.

// let wins = 0;
// let losses = 0;
//These are just floating 0 variables right now.  We want to create options to choose from.


//now we need a prompt to start the game.

