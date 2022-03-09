// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Set Reference for Generator Functions -- https://net-comber.com/charset.html

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  function getRandomSymbol() {
      const symbols = "!@#$%^&*()_+-={}[]|;:<>,./?"; // 27 Symbols (0-26)
      return symbols[Math.floor(Math.random() * symbols.length)];
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const length = +lengthBtn.value;
  const hasLower = lowercaseBtn.checked;
  const hasUpper = uppercaseBtn.checked;
  const hasNumber = numbersBtn.checked;
  const hasSymbol = symbolsBtn.checked;

  resultBtn.innerText = writePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
});