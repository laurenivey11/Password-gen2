// Assignment code here

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Get references to the #generate element




function generatePasswordInfo() {

    var getPasswordLength = window.prompt("Choose number of characters for your password. (8-128)");
    if(getPasswordLength >= 8 && getPasswordLength <= 128) {
    } else {
      alert("Invalid input. Please insert a number.");
      generatePasswordInfo();
    }
    
    var includeChars = window.confirm("Would you like to use special characters?");


    var includeUppers = window.confirm("Would you like to use uppercase letters?");


    var includeNumbers = window.confirm("Would you like to use numbers?");

  var passwordInfo = {
    passwordLength: getPasswordLength,
    includeLowerCase: LOWERCASE_CHAR_CODES,
    includeUppers: includeUppers,
    includeNumbers: includeNumbers,
    includeChars: includeChars
    }

  console.log(passwordInfo);
  return passwordInfo;

};

function randomGen(arr) {
  var randomChar = Math.floor(Math.random() * arr.length);
  var selectedChar = arr[randomChar];

  return selectedChar;
}

function generatePassword() {
  var passwordIncludes = generatePasswordInfo();

  var createPassword = [];

  var charCodes = [];

  if (passwordIncludes.includeNumbers) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  } 

  if (passwordIncludes.includeChars) {
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  }

  if (passwordIncludes.includeUppers) {
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  }

  for (var i = 0; i < passwordIncludes.passwordLength; i++) {
    var c = randomGen(charCodes);

    // add characters to password array
    createPassword.push(c);
  }
  console.log(createPassword)
  return createPassword.join("");
  
};


function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);


