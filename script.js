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

// LOWERCASE LETTERS
const Lower = "abcdefghijklmnopqrstuvwxyz";
function getRandomLower() {
  return Lower[Math.floor(Math.random() * Lower.length)];
}

// NUMBERS
const Digit = "1234567890";
function getRandomDigit() {
  return Digit[Math.floor(Math.random() * Digit.length)];
}

// SYMBOLS
const Symbol = "!#$%&()*+,-./:;<=>?@[]^_{}|~"
function getRandomSymbol() {
  return Symbol[Math.floor(Math.random() * Symbol.length)];
}

// GET ALL
const randomAll = Upper.concat(Lower, Symbol, Digit)
function getRandomAll() {
  return randomAll[Math.floor(Math.random() * randomAll.length -1)];
}

// SYMBOLS + DIGITS + LOWER
const randomSDL = Symbol.concat(Lower, Digit)
function getRandomSDL() {
  return randomSDL[Math.floor(Math.random() * randomSDL.length - 1)];
}

// SYMBOLS + DIGITS + UPPPER
const randomSDU = Symbol.concat(Upper, Digit)
function getRandomSDU() {
  return randomSDU[Math.floor(Math.random() * randomSDU.length -1)];
}

// SYMBOLS + UPPER + LOWER
const randomSUL = Symbol.concat(Upper, Lower)
function getRandomSUL() {
  return randomSUL[Math.floor(Math.random() * randomSUL.length -1)];
}

// UPPER + LOWER + DIGIT
const randomULD = Upper.concat(Digit, Lower)
function getRandomULD() {
  return randomULD[Math.floor(Math.random() * randomULD.length -1)];
}

// SYMBOLS + UPPER
const randomSU = Symbol.concat(Upper)
function getRandomSU() {
  return randomSU[Math.floor(Math.random() * randomSU.length -1)];
}

// SYMBOLS + LOWER
const randomSL = Symbol.concat(Lower)
function getRandomSL() {
  return randomSL[Math.floor(Math.random() * randomSL.length -1)];
}

// UPPER + LOWER
const randomUL = Upper.concat(Lower)
function getRandomUL() {
  return randomUL[Math.floor(Math.random() * randomUL.length -1)];
}

// SYMBOLS + DIGIT
const randomSD = Symbol.concat(Digit)
function getRandomSD() {
  return randomSD[Math.floor(Math.random() * randomSD.length -1)];
}

// UPPER + DIGIT
const randomUD = Upper.concat(Digit)
function getRandomUD() {
  return randomUD[Math.floor(Math.random() * randomUD.length -1)];
}

// LOWER + DIGIT
const randomLD = Lower.concat(Digit)
function getRandomLD() {
  return randomLD[Math.floor(Math.random() * randomLD.length -1)];
}

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

  var passwordLength = prompt("Please enter password length, between 8 and 128")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please enter valid password length");
    return;
  }
      
    var passwordUpper = confirm("Would you like to use uppercase letters in your password?");

    var passwordLower = confirm("Would you like to use lowercase letters in your password?");

    var passwordDigit = confirm("Would you like to use numbers in your password?");

    var passwordSymbol = confirm("Would you like to use symbols in your password?");
    
   var passwordArray = []
    // ALL
    if (passwordUpper === true && passwordLower === true && passwordDigit === true && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomAll();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }

    //UPPERCASE LETTERS
    if (passwordUpper === true && passwordLower === false && passwordDigit === false && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomUpper();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomUpper())

    // LOWERCASE LETTERS
    if (passwordUpper === false && passwordLower === true && passwordDigit === false && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomLower();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomLower())
    
    // NUMBERS
    if (passwordUpper === false && passwordLower === false && passwordDigit === true && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomDigit();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS
    if (passwordUpper === false && passwordLower === false && passwordDigit === false && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSymbol();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS + DIGITS + LOWER
    if (passwordUpper === false && passwordLower === true && passwordDigit === true && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSDL();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS + DIGITS + UPPPER 
    if (passwordUpper === true && passwordLower === false && passwordDigit === true && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSDU();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS + UPPER + LOWER
    if (passwordUpper === true && passwordLower === true && passwordDigit === false && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSUL();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // UPPER + LOWER + DIGIT
    if (passwordUpper === true && passwordLower === true && passwordDigit === true && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomULD();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS + UPPER
    if (passwordUpper === true && passwordLower === false && passwordDigit === false && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSU();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS + LOWER
    if (passwordUpper === false && passwordLower === true && passwordDigit === false && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSL();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // UPPER + LOWER
    if (passwordUpper === true && passwordLower === true && passwordDigit === false && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomUL();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())
    
    // SYMBOLS + DIGIT
    if (passwordUpper === false && passwordLower === false && passwordDigit === true && passwordSymbol === true) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomSD();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }
    // console.log(getRandomAll())

    // UPPER + DIGIT
    if (passwordUpper === true && passwordLower === false && passwordDigit === true && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomUD();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }

    // LOWER + DIGIT
    if (passwordUpper === false && passwordLower === true && passwordDigit === true && passwordSymbol === false) {
      for (let i = 0; i < passwordLength; i++) { 
        var passwordCharacter = getRandomLD();
        passwordArray.push(passwordCharacter);
      } return passwordArray.join("")
    }

}