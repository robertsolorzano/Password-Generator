// Assignment code here
function generatePassword() {

  var passwordLength = prompt("Choose Password Length (8 - 128 Characters");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumber = confirm("Include Numbers?");
  var includeSpecialChar = confirm("Include Special Characters?");


  var length = parseInt(passwordLength);
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Invalid password length, please enter a number between 8 and 128')
    return "";
  }
  

  if (!includeLowercase && !includeUppercase && !includeNumber && !includeSpecialChar) {
    alert("At least one character type must be selected.");
    return ""; 
  }


  var CharacterResult = "";
  if (includeLowercase) CharacterResult += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) CharacterResult += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumber) CharacterResult += '0123456789';
  if (includeSpecialChar) CharacterResult += '!@#$%^&*()';


  var randomPassword = "";
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * CharacterResult.length);
    randomPassword += CharacterResult[index]
  }

  
  return randomPassword;
}


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
