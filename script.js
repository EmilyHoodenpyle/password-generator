// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Set Reference for Generator Functions -- https://net-comber.com/charset.html

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// create buckets for each character type (variable type: array, strings)
//UPPERCASE LETTERS
const Upper = "A" + "B" + "C" + "D" + "E" + "F" + "G" + "H" + "I" + "J" + "K" + "L" + "M" + "N" + "O" + "P" + "Q" + "R" + "S" + "T" + "U" + "V" + "W" + "X" + "Y" + "Z";

function getRandomUpper() {
    return Upper[Math.floor(Math.random() * Upper.length)];
  }
console.log(getRandomUpper())

// LOWERCASE LETTERS
const Lower = "abcdefghijklmnopqrstuvwxyz";

function getRandomLower() {
  return Lower[Math.floor(Math.random() * Lower.length)];
}
console.log(getRandomLower())

// NUMBERS
const Digit = "1234567890";

function getRandomDigit() {
  return Digit[Math.floor(Math.random() * Digit.length)];
}
console.log(getRandomDigit())

// SYMBOLS
const Symbol = "!#$%&()*+,-./:;<=>?@[]^_{}|~"

function getRandomSymbol() {
  return Symbol[Math.floor(Math.random() * Symbol.length)];
}
console.log(getRandomSymbol())

function generatePassword() {
  // 1. get user preferences
  var passwordLength = prompt("Please enter password length")

  if (passwordLength< 8 && passwordLength> 20) {
    alert("please enter valid password length");
  } else {
    Null }
  } 

  var passwordUpper = confirm("Would you like to use uppercase letters in your password?")

  if (passwordUpper === true) {
    function getRandomUpper() {
      return Upper[Math.floor(Math.random() * Upper.length)];
    }
  }

  var passwordLower = confirm("Would you like to use lowercase letters in your password?")
  if (passwordLower === true) {
    function getRandomLower() {
      return Lower[Math.floor(Math.random() * Lower.length)];
    }
  }

  var passwordDigit = confirm("Would you like to use numbers in your password?")
  if (passwordDigit === true) {
    function getRandomDigit() {
      return Digit[Math.floor(Math.random() * Digit.length)];
    }
  }

  var passwordSymbol = confirm("Would you like to use symbols in your password?")
  if (passwordSymbol === true) {
    function getRandomSymbol() {
      return Symbol[Math.floor(Math.random() * Symbol.length)];
    }
  }

  // 2. identify and collect buckets user has chosen
  // 3. create guaranteed collection (array)
  // 4. create a password variable // an array
  // 5. Randomly draw a character
  // 6. put that character on the password variable (?)
  // 7. repeat as many times as specified  (for loop)
  // 8. loop through the garanteed elements, replace elements in password array (math.floor(math.random))
  // 9. join characters in the password array into a string
  // 10. return the password string
}

// ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~ \\

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }

// function getRandomSymbol() {
//   const symbols = "!@#$%^&*()_+-={}[]|;:<>,./?"; // 27 Symbols (0-26)
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// { () => {
//   const length = +lengthBtn.value;
//   const hasLower = lowercaseBtn.checked;
//   const hasUpper = uppercaseBtn.checked;
//   const hasNumber = numbersBtn.checked;
//   const hasSymbol = symbolsBtn.checked;

//   resultBtn.innerText = writePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
// });

// var passwordLength = prompt("Enter password length (8-20)")

// if (passwordLength< 8 && passwordLength> 20) {
//   alert("please enter valid password length");
// } else {
//   var uppercase = confirm("Would you like to use uppercase letters?")

//   if (uppercase === true) {
//     function getRandomUpper() {
//       return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
//   }
//   } else {

//   }

// }