// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  let length = prompt("Enter a password length between 8 and 128 characters");

  if (length === null || isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a password length between 8 and 128 characters.");
    return "";
  }

  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeSpecialCharacters = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialCharacters)) {
    alert("Please select one character type.");
    return "";
  }

  let password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialCharacters);

  return password;
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialCharacters) {
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericCharacters = "0123456789";
  const specialCharacters = "!@#$%^&*()?";

  let allCharacters = "";
  if (includeLowercase) allCharacters += lowercaseCharacters;
  if (includeUppercase) allCharacters += uppercaseCharacters;
  if (includeNumeric) allCharacters+= numericCharacters;
  if (includeSpecialCharacters) allCharacters += specialCharacters;

  if (allCharacters === "") {
    alert("Please select at least one character type.");
    return '';
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}