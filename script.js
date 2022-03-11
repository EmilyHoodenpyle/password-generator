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

// ^^^ DO NOT TOUCH ABOVE ^^^ \\

// create buckets for each character type (variable type: array, strings)
//UPPERCASE LETTERS
const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

// GET ALL
const randomAll = Upper.concat(Lower, Symbol, Digit)
function getRandomAll() {
  return randomAll[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomAll())

// SYMBOLS + DIGITS + LOWER
const randomSDL = Symbol.concat(Lower, Digit)
function getRandomSDL() {
  return randomSDL[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomSDL())

// SYMBOLS + DIGITS + UPPPER
const randomSDU = Symbol.concat(Upper, Digit)
function getRandomSDU() {
  return randomSDU[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomSDU())

// SYMBOLS + UPPER + LOWER
const randomSUL = Symbol.concat(Upper, Lower)
function getRandomSUL() {
  return randomSUL[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomSUL())

// UPPER + LOWER + DIGIT
const randomULD = Upper.concat(Digit, Lower)
function getRandomULD() {
  return randomULD[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomULD())

// SYMBOLS + UPPER
const randomSU = Symbol.concat(Upper)
function getRandomSU() {
  return randomSU[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomSU())

// SYMBOLS + LOWER
const randomSL = Symbol.concat(Lower)
function getRandomSL() {
  return randomSL[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomSL())

// UPPER + LOWER
const randomUL = Upper.concat(Lower)
function getRandomUL() {
  return randomUL[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomUL())

// SYMBOLS + DIGIT
const randomSD = Symbol.concat(Digit)
function getRandomSD() {
  return randomSD[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomSD())

// UPPER + DIGIT
const randomUD = Upper.concat(Digit)
function getRandomUD() {
  return randomUD[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomUD())

// LOWER + DIGIT
const randomLD = Lower.concat(Digit)
function getRandomLD() {
  return randomLD[Math.floor(Math.random() * randomAll.length)];
}
console.log(getRandomLD())

function generatePassword() {
  // 1. get user preferences
  // 2. identify and collect buckets user has chosen
  // 3. create guaranteed collection (array)
  // 4. create a password variable // an array
  // 5. Randomly draw a character
  // 6. put that character on the password variable (?)
  // 7. repeat as many times as specified  (for loop)
  // 8. loop through the garanteed elements, replace elements in password array (math.floor(math.random))
  // 9. join characters in the password array into a string
  // 10. return the password string

  var passwordLength = prompt("Please enter password length")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please enter valid password length");
    return;
  } else {
      
    var passwordUpper = confirm("Would you like to use uppercase letters in your password?");
      if (passwordUpper === true){
      randomAll.concat(Upper)
    } else {
    console.log(getRandomAll())
  }

    var passwordLower = confirm("Would you like to use lowercase letters in your password?");
      if (passwordLower === true){
     randomAll.concat(Lower)
    } else {
    console.log(getRandomAll())
    }
    var passwordDigit = confirm("Would you like to use numbers in your password?");
      if (passwordDigit === true){
      randomAll.concat(Digit)
    } else {
    console.log(getRandomAll())
    }

    var passwordSymbol = confirm("Would you like to use symbols in your password?");
      if (passwordSymbol === true){
      randomAll.concat(Symbol)
    } else {
    console.log(getRandomAll())
    }
    
    if (passwordUpper === true && passwordLower === true && passwordDigit === true && passwordSymbol === true) {
      for(var i = 0; i <= passwordLength; i++){
        writePassword = writePassword + randomAll.charAt(Math.floor(Math.random) * Math.floor(randomAll));
      }
    }
    console.log(getRandomAll())
  }

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