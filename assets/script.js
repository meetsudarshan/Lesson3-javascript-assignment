// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordObj = {
  length: 0,
  upperChar: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerChar: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numChar: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specChar: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "<", ">", ",", ".", "?", "/", ":", ";", "'", "`", "~", "'"]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var capitalLetters;
var smallLetters;
var numerics;
var symbols;

function askUser() {
  smallLetters = confirm("Choose lower case letters?");
  capitalLetters = confirm("Choose upper case letters?");
  numerics = confirm("Choose numbers?");
  symbols= confirm("Choose special characters?");
}

function generatePassword() {
  var passwordLength = 0;
  var userChoice = prompt("Welcome to Password Generator page. You can generate a password which ranges between 8 and 128 characters including upper case, lower case, numerics and special chars. Choose the password length.");
  var output = "";
  // var capitalLetters;
  // var smallLetters;
  // var numerics;
  //  var passwordMinLength = 8;
  //  var passwordMaxLength = 128;
  // var symbols;
 

  //  passwordAlert =prompt("How many character password do you want?");
  //  }

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be between 8 and 128 characters.");
   
    if (passwordLength === null) {
      return "Your secure password";
    }
  else {
    askUser();

    while (passwordObj.length < passwordLength) {

    if (smallLetters === false && capitalLetters === false && numerics === false && symbols === false) {

      alert("Password must be of 8 chars at a minimum or 128 at the maximum")
      askUser();
    }

    else {

   if (smallLetters === true && passwordObj.length < passwordLength) {
                var small = passwordObj.lowerChar[Math.floor(Math.random() * passwordObj.lowerChar.length)]
                output = output + small;
                passwordObj.length++;
              }

    if (capitalLetters === true && passwordObj.length < passwordLength) {
                var caps = passwordObj.upperChar[Math.floor(Math.random() * passwordObj.upperChar.length)]
                output = output + caps;
                passwordObj.length++;
              }
    
    if (numerics === true && passwordObj.length < passwordLength) {
                var digits = passwordObj.numChar[Math.floor(Math.random() * passwordObj.numChar.length)]
                output = output + digits;
                passwordObj.length++;
              }

    if (symbols === true && passwordObj.length < passwordLength) {
                var special = passwordObj.specChar[Math.floor(Math.random() * passwordObj.specChar.length)]
                output = output + special;
                passwordObj.length++;
              }

   
 

  }
  
}}}
return output;
}
