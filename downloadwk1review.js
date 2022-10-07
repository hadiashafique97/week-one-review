////////////////////////////////////////////////////////////////
// Conditionals:
///////////////////////////////////////////////////////////////

//1. Write a JavaScript display the larger of two integers

// console.log(Math.max(5,6,7))

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

// let studentGrade = 85

// if(studentGrade >= 90){
//   console.log('You get an A')
// }else if
//   (studentGrade >= 80){
//     console.log('You get a B')
//   }else if
//     (studentGrade >= 70){
//       console.log('You get a C')
//     }else if
//     (studentGrade >= 55){
//       console.log('You get a D')
//     }else {
//       console.log('You get an F')
//     }
// console.log(studentGrade)




//3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"


// let time = 1700

// if(time <= 1159){
//   console.log('Good Morning')
// } else if(time <= 1600){ 
//   console.log("Good Afternoon")
// }else {
// console.log("Hey there")
// }



////////////////////////////////////////////////////////////////
// Strings:
///////////////////////////////////////////////////////////////


// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

// const herName = 'Sabrina'
// console.log(`${herName.charAt(4)}`)

// // Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// // Unicode is a unique value that is asigned to every character 

// var letterName = 'Teddy'
// console.log(letterName.charCodeAt(2))

// // Using fromCharCode() - make it readable for us :). You'll see!
// console.log(String.fromCharCode(84, 101, 100, 100, 121))


// Take your first and last name and concat()

// console.log('Hadia' + ' ' + 'Shafique')

// Create a string and make it return true using startsWith()

// let basicString = ' This lab is really helping me learn'
// console.log(basicString.startsWith(' This', 0))

// Now use any variable with endsWith() and return false

// let basicString = ' This lab is really helping me learn'
// console.log(basicString.endsWith('lab', 4))

// Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
// console.log(ozgur.includes('Ozgur'))


// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// console.log(joshHadALittleLambOopsCow.indexOf('cow'))
// // cows index is 149

////////////////////////////////////////////////////////////////
// Boolean:
///////////////////////////////////////////////////////////////

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a === 5 && b === 10)
// console.log(c === 15 && b === 10)
// console.log(d === "Keke" && d === "Keke")
// console.log(d === "Keke" && a === 5)
// console.log(a === 5 && 15 === c)
// console.log(a === 5 && b === 10 && c === 15)
// console.log(c === 15 && b === 10 && a === 5 && d === "Keke")


////////////////////////////////////////////////////////////////
// Loops:
///////////////////////////////////////////////////////////////
// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

//  roomSpin = 10 

// for (let roomSpin = 0; roomSpin < 11; roomSpin++){
//   console.log(' Omg make this stop!!')
// }


// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

// roomSpin = 20
// for (let roomSpin = 0; roomSpin < 21; roomSpin++){
//   console.log(roomSpin)
// }



// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

// roomSpin = 0
// while(roomSpin < 21){
//   console.log("I\'m sorry")
//   roomSpin++
// }


// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
    thing1: 'shoes',
    thing2: 'clothes',
    thing3: 'gaming console'
  }
//   for (const things in whateverQueenBeySaid){
//     console.log(whateverQueenBeySaid[things])
//   }
// for (const things in whateverQueenBeySaid){
//   console.log(`${things}: ${whateverQueenBeySaid[things]}`)
// }


  // Using (FOR IN LOOP), print the indexes of the array.
  // const lana = ['l', 'a', 'n', 'a']
  
  // for(const things in lana){
  //   console.log(`${things}: ${lana[things]}`)
  // }

  // USE (FOR OF LOOP)!

  // const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
  
  // for (const family of tia){
  //   console.log(family)
  // }


  // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  const perscholas = ['Amira', 'Arely', 'Jonathan']
// let varCallback = "PS"

// perscholas.forEach(element =>{
//   let str= "PS "
//   console.log(str+element)
// })

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push() adds one or more than one element to the end of the array 
// pop() removes the last element from an array 
// unshift() can add one or more then one element to the beginning of an array and then gives you the new length of array 
// shift() removes the first element of an array and then returns that removed element. This also changes the length of the array as well.
// concat() adds two or more arrays
// splice() it changes the contents of the array by removing and or replacing the elements already inside the array 
// slice() changes part of the array when you can add a portion of a different array to a different array in return producing a new array 
// sort() sorts the elements inside of an array, and returns the content into the same array 
// includes() lets us know whether or not the element insie of an array includes the data, itll then output true and or false
// indexOf() gives us the placement within of the element within an array 
// length lets us know the number of elements within that array 


/* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ]; console.log(shoppingList + ", bottle of Hendricks gin")



//3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// yoda.reverse()
// console.log(yoda)

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
// var waitLength = waitList.length
// console.log(`wait List is ${waitList}`)
// for (let i = 0; i < waitLength; i++){
//   var nowServing = waitList.shift()
//   console.log(`now Serving ${nowServing}`)
// }
// console.log(`waitList is ${waitList}`)




//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];
// let shoeString = shoe.toString()
// console.log(shoeString)




// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// const fruits = [ 'Bananas ', 'Strawberry', 'Mango']
// const smoothies = [ ...fruits, ' are all smoothies']
// console.log(smoothies)


// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// const fruits = [ 'bananas ', 'Strawberry', 'Mango']
// const smoothies = [ ' These are the fruits  ', ' I like the most ']
// const total = [...fruits, ...smoothies]
// console.log(total)



 
////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.

// function maxOfTwoNumbers(a,b){
//   if( a > b){
//    return console.log(' A is greater than B')
//   } else {
//     return console.log(' B is greater than A')
//   }
// }
// (maxOfTwoNumbers(1,2))

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.




//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise




//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.

