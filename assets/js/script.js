// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for possible characters for the password
const lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specChar = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Write password to the #password input
function writePassword() {

    // User selects a length between 8 and 128
    let passwordLength;

      do {

        passwordLength = prompt("Please select a password length. MIN: 8 - MAX: 128", 8);

        if(passwordLength === null){
          return;
        }

      } while (passwordLength <8 || passwordLength > 128);

    // User chooses to include or exclude lowercase letters
    let loCases;
      do {
        loCases = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] lowercase letters?", "I");

        loCases.toUpperCase();

        if(loCases === null){
          return;
        }
      } while (loCases !== "I" || loCases !== "X");
  
    // User chooses to include or exclude uppercase letters
    let upCases = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] uppercase letters?", "I");
    do {
        passwordLength = prompt("Please select a password length. MIN: 8 - MAX: 128", "8");

        if(upCases === null){
          return;
        }
      } while (passwordLength <8 || passwordLength > 128);
  
    // User chooses to include or exclude numbers
    let numbers = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] numbers?", "I");
    do {
        passwordLength = prompt("Please select a password length. MIN: 8 - MAX: 128", "8");

        if(numbers === null){
          return;
        }
      } while (passwordLength <8 || passwordLength > 128);
      
    // User chooses to include or exclude special characters
    let special = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] special characters?", "I");
    do {
        passwordLength = prompt("Please select a password length. MIN: 8 - MAX: 128", "8");

        if(special === null){
          return;
        }
      } while (passwordLength <8 || passwordLength > 128);

      console.log (writePassword)

  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  (Math.floor(Math.random() * 77) + 34);

  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
