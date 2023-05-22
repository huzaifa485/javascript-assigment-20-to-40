// chapter 21

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.


// var allLower = userInput.toLowerCase();


// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.


// var x = "Hello World";
// x = x.toLowerCase();
// console.log(x);



// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.


// var y = "Hello World";
// y = y.toUpperCase();
// console.log(y);



// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

// var originalString = "Hello World";
// var lowerCaseString = originalString.toLowerCase();
// console.log(lowerCaseString); 



// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.


// var arr = ["Hello", "World"];
// var lowercaseElement = arr[0].toLowerCase();
// console.log(lowercaseElement);


// 6. Display in an alert the upper-case version of the string
// represented by a variable.


// var myString = "Hello World";
// var uppercaseString = myString.toUpperCase();
// alert(uppercaseString);



// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.



// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedCityName); 



// chapter 22-25

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

// var sameWords = "captain";
// var slicedWords = sameWords.slice(0, 2) + sameWords.slice(4);
// console.log(slicedWords); 




// 2. The number of characters in the string will be assigned to the
// variable.


// var myString = "Hello World";
// var characterCount = myString.length;
// console.log(characterCount); 




// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.


// var animal = "elephant";
// var seg = animal.substring(2, 6);
// console.log(seg);



// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.



// var myString = "Hello World";
// var characterCount = myString.length;
// console.log(characterCount); 




// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.


// var myString = "Hello World";
// var characterCount = myString.length;
// var slicedString = myString.slice(1, -3);

// console.log(characterCount); 
// console.log(slicedString); 


// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?



// The value of indx is 3.




// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.




// The value of indx is 16




// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.


// var text = "Let it go, let it go, can't hold it back anymore";
// var searchString = "go";
// var indx = text.lastIndexOf(searchString) + searchString.length;

// console.log(indx); 





// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.


// var str = "Hello World";
// var indexNum = 4;

// if (str.charAt(indexNum) !== "") {

//   console.log("Segment exists!");
// } else {

//   console.log("Segment does not exist!");
// }




// 10. In this string "abcde", what character is at index 2? (Use
// charAt)

// var str = "abcde";
// var characterAtIndex2 = str.charAt(2);

// console.log(characterAtIndex2); 



// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.


// var text = "Hello World";
// var cha = text.charAt(9);

// console.log(cha); 



// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.


// var str = "Hello World";
// var x = str.charAt(str.length - 1);

// console.log(x); 




// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.


// var input = "Hello World";
// var cha = input.charAt(4);

// console.log(cha); 



// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.


// var myString = "Hello World";
// var specificCharacter = "l";

// if (myString.charAt(2) === specificCharacter) {
 
//   console.log("The 3rd character is 'l'");
// } else {
  
//   console.log("The 3rd character is not 'l'");
// }



// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.



// var myString = "Hello World";
// var charArray = [];

// for (var i = 0; i < myString.length; i++) {
//   charArray.push(myString.charAt(i));
// }

// console.log(charArray);



// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.


// var str = "1, 2, 3, 1, 4, 1";
// var newStr = str.replace(/1/, "one");

// console.log(newStr);




// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");



// var x = "abcabcabc";
// var y = x.replace(/abc/g, "xyz");

// console.log(y);








// chapter 26



// 1. Form a statement that rounds a number to the nearest integer.


// var number = 3.7;
// var roundedNumber = Math.round(number);

// console.log(roundedNumber);



// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.


// var origNum = 3.2;
// var roundNum = Math.ceil(origNum);

// console.log(roundNum);




// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.


// var origNum = 3.8;
// var roundNum = Math.floor(origNum);

// console.log(roundNum);




// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.



// var origNum = 3.7;
// var roundNum = Math.round(origNum);

// console.log(roundNum);



// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.


// var originalNum = 0.5;
// var roundedNum = Math.round(originalNum);

// console.log(roundedNum);



// chapter 27


// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50



// var randomNum = Math.floor(Math.random() * 50) + 1;

// console.log(randomNum);


// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.


// var randomNumber = Math.random();

// console.log(randomNumber);





// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.


// var min = 1; 
// var max = 6; 


// var diceRoll = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(diceRoll);



// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.



// var randomNum = Math.random();

// var result = randomNum < 0.5 ? 'head' : 'tail';

// console.log(result);





// chapter 28-29


// 1. How do you convert a string to an integer in JavaScript?

// var str = "123";
// var num = parseInt(str);

// console.log(num);





// 2. Write a JavaScript function to convert the string "123" to an
// integer.



// function convertStringToInteger(str) {
//     var num = parseInt(str);
//     return num;
//   }
  
//   var stringNum = "123";
//   var integerNum = convertStringToInteger(stringNum);
  
//   console.log(integerNum);
  



// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?


// var str = "3.14";
// var floatNum = parseFloat(str);

// console.log(floatNum);





// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?




// function isConvertibleToNumber(str) {
   
//     var isInteger = !isNaN(parseInt(str));
  
   
//     var isDecimal = !isNaN(parseFloat(str));
  
//     return isInteger || isDecimal;
//   }
  
 
  


// 5. How can you convert a number to a string in JavaScript?

// var num = 123;
// var str = num.toString();

// console.log(str);  // Output: "123"




// 6. Write a JavaScript function to convert the number 42 to a string.



// function convertNumberToString(num) {
//     var str = num.toString();
//     return str;
//   }
  
//   var number = 42;
//   var string = convertNumberToString(number);
  
//   console.log(string);
  


// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?




// var decimalStr = "3.14";
// var integerNum = parseInt(decimalStr);

// console.log(integerNum);






// chapter 30


// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.


// var num = 3.14159265359;
// var newNum = num.toFixed(4).toString();

// console.log(newNum);




// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.


// var num = 3.14159;
// num = parseFloat(num.toFixed(2));

// console.log(num);





// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.



// if (num.toFixed(2).toString().length > 4) 






// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.


// var num = 3.14159265359;
// var roundedNum = num.toFixed(2).toString();

// alert(roundedNum);



// Chapter 31 - 34 (Date & Time)

// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

// var dObj = new Date();


// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

// var dStr = new Date().toString();


// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

// var d = new Date();
// var day = d.getDay();


// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.


// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var d = new Date().getDay();

// alert("The current day is: " + dayNames[d]);


// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.


// var currentDate = new Date();

// var year = currentDate.getFullYear();
// var month = currentDate.getMonth();
// var day = currentDate.getDate();
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();
// var seconds = currentDate.getSeconds();
// var milliseconds = currentDate.getMilliseconds();

// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);
// console.log("Milliseconds:", milliseconds);


// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.


// var later = new Date(2020, 11, 31);


// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.


// var dateObj = new Date(1992, 1, 2);


// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.


// alert(new Date(1980, 0, 1) - new Date());


// 9. How do you change the year of a date in JavaScript?
// 10. Write a JavaScript function to change the month of a given
// date to January.


// var date = new Date();
// date.setFullYear(2022);

// function changeToJanuary(date) {
//     date.setMonth(0); // January is represented by 0
//     return date;
//   }
  
//   var myDate = new Date();
//   var dateWithJanuary = changeToJanuary(myDate);


// 11. What is the method to change the day of the week for a
// specific date in JavaScript?


// var myDate = new Date();
// myDate.setDate(myDate.getDate() + 2); // Change to 2 days ahead

// console.log(myDate);


// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)


// function changeMinutesToSpecificValue(time) {
//     var minutes = parseInt(prompt("Enter the specific value for minutes:"));
  
//     if (!isNaN(minutes)) {
//       time.setMinutes(minutes);
//       return time;
//     } else {
//       return "Invalid input for minutes.";
//     }
//   }
  
//   // Example usage:
//   var myTime = new Date();
//   var timeWithSpecificMinutes = changeMinutesToSpecificValue(myTime);
//   console.log(timeWithSpecificMinutes);


// 13. Write a JavaScript function to add a specific number of
// hours to a given time.


// function addHoursToTime(time, hoursToAdd) {
//     var milliseconds = hoursToAdd * 60 * 60 * 1000; // Convert hours to milliseconds
//     var newTime = new Date(time.getTime() + milliseconds);
//     return newTime;
//   }
  
//   // Example usage:
//   var myTime = new Date(); // Current time
//   var hoursToAdd = parseInt(prompt("Enter the number of hours to add:"));
  
//   if (!isNaN(hoursToAdd)) {
//     var newTime = addHoursToTime(myTime, hoursToAdd);
//     console.log(newTime);
//   } else {
//     console.log("Invalid input for hours.");
//   }


// 14. You have to create a age calculator in JavaScript.


// function calculateAge(birthYear) {
//     var currentYear = new Date().getFullYear();
//     var age = currentYear - birthYear;
//     return age;
//   }
  
//   // Example usage:
//   var birthYear = parseInt(prompt("Enter your birth year:"));
  
//   if (!isNaN(birthYear)) {
//     var age = calculateAge(birthYear);
//     console.log("Your age is: " + age);
//   } else {
//     console.log("Invalid input for birth year.");
//   }
  






// Chapter 35 - 37 (Functions)


// 1. Code the first line of a function displayAlert.


// function displayAlert() {


// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.


// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
//   }

//   var nameEntered = askName();
//   console.log("Hello, " + nameEntered + "!");

  
// 3. Code a function that calls 2 other functions.

// function callTwoFunctions() {
//     // Call the first function
//     functionOne();
  
//     // Call the second function
//     functionTwo();
//   }

//   function functionOne() {
//     console.log("This is functionOne");
//   }
  
//   function functionTwo() {
//     console.log("This is functionTwo");
//   }
  
//   callTwoFunctions(); // Call the main function
    

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.


// function displayAndAlertName() {
//     var name = prompt("Enter name");
//     alert("Your name is: " + name);
//   }
  
//   displayAndAlertName(); // Call the function


// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.


// function concat(a, b, c) {

//     var variable = "Hello";
//     var str = "World";
//     var num = 42;
    
//     concat(variable, str, num);


// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.


// function concatenateStrings(string1, string2) {
//     var result = string1 + string2;
//     return result;
//   }
  
//   // Example usage:
//   var param1 = "Hello";
//   var param2 = "World";
  
//   var concatenated = concatenateStrings(param1, param2);
//   console.log(concatenated);


// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.


// function multiplyNumbers(num1, num2, num3) {
//     var result = num1 * num2 * num3;
//     return result;
//   }
  
//   // Example usage:
//   var param1 = 2;
//   var param2 = 3;
//   var param3 = 4;
  
//   var multiplied = multiplyNumbers(param1, param2, param3);
//   console.log(multiplied);


// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.


// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     var average = sum / numbers.length;
//     return average;
//   }
  
//   // Example usage:
//   var inputArray = [2, 4, 6, 8, 10];
//   var result = calculateAverage(inputArray);
//   console.log("The average is: " + result);
  

// 9. Write a JavaScript function that takes two parameters and returns
// their sum.


// function calculateSum(a, b) {
//     var sum = a + b;
//     return sum;
//   }
  
//   // Example usage:
//   var num1 = 5;
//   var num2 = 10;
//   var result = calculateSum(num1, num2);
//   console.log("The sum is: " + result);
  

// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.


// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     var average = sum / numbers.length;
//     return average;
//   }
  
//   // Example usage:
//   var inputArray = [2, 4, 6, 8, 10];
//   var result = calculateAverage(inputArray);
//   console.log("The average is: " + result);
  

// 11. You have to capture the returned value from a function and
// store it in a variable?


// function calculateSum(a, b) {
//     var sum = a + b;
//     return sum;
//   }
  
//   var num1 = 5;
//   var num2 = 10;
  
//   var result = calculateSum(num1, num2);
//   console.log("The sum is: " + result);


// 12. Write a function which tells letter counts of (word).


// function countLetters(word) {
//     var letterCounts = {};
    
//     for (var i = 0; i < word.length; i++) {
//       var letter = word[i];
      
//       if (letterCounts[letter]) {
//         letterCounts[letter]++;
//       } else {
//         letterCounts[letter] = 1;
//       }
//     }
    
//     return letterCounts;
//   }
  
//   // Example usage:
//   var word = "hello";
//   var result = countLetters(word);
//   console.log(result);


// 13. Write a function to set (year) in date object.


// function setYear(date, year) {
//     date.setFullYear(year);
//   }
  
//   // Example usage:
//   var myDate = new Date();
//   console.log("Before setting year:", myDate);
  
//   setYear(myDate, 2023);
//   console.log("After setting year:", myDate);


// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)


// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);
    
//     var age = today.getFullYear() - birthDate.getFullYear();
    
//     var monthDifference = today.getMonth() - birthDate.getMonth();
    
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
    
//     return age;
//   }
  
//   // Example usage:
//   var dateOfBirth = "1990-05-22"; // Format: yyyy-mm-dd
//   var age = calculateAge(dateOfBirth);
//   console.log("The age is:", age);


// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false


// function checkWordPresence(word, array) {
//     return array.includes(word);
//   }
  
//   // Example usage:
//   var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
//   var word = 'raza';
//   var isPresent = checkWordPresence(word, array);
//   console.log("Is the word present? " + isPresent);


// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)


// function repeatLetter(letter, times) {
//     return letter.repeat(times);
//   }
  
//   // Example usage:
//   var letter = 'a';
//   var repeatedLetter = repeatLetter(letter, 10);
//   console.log("Repeated letter:", repeatedLetter);


// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()


// function reverseArray(arr) {
//     return arr.reverse();
//   }
  
//   // Example usage:
//   var array = ['a', 'b', 'c', 'd', 'e'];
//   var reversedArray = reverseArray(array);
//   console.log("Reversed array:", reversedArray);
  









// Chapter 38 (Local vs. Global Variables)


// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.


// function demonstrateLocalVariable() {
//     var localVar = "This is a local variable.";
//     console.log(localVar);
//   }
  
//   demonstrateLocalVariable();


// 2. How can you access a global variable inside a function in
// JavaScript?


// var globalVar = "This is a global variable.";

// function accessGlobalVariable() {
//   console.log(globalVar);
// }

// accessGlobalVariable();








// Chapter 39, 40 (Switch Statements)


// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.


// var variable = 2;

// switch (variable) {
//   case 1:
//     console.log("The variable is 1");
//     break;
//   case 2:
//     console.log("The variable is 2");
//     break;
//   case 3:
//     console.log("The variable is 3");
//     break;
//   default:
//     console.log("The variable does not match any case");
//     break;
// }


// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.


// var cityName = prompt("Enter a city name:");
// var message;

// switch (cityName) {
//   case "London":
//     message = "You entered London!";
//     break;
//   case "Paris":
//     message = "You entered Paris!";
//     break;
//   case "New York":
//     message = "You entered New York!";
//     break;
//   default:
//     message = "The city name does not match any expected city.";
//     break;
// }

// alert(message);