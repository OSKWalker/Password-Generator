// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for possible characters for the password
const lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specChar = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var parameters = [];
var tempArray = [];
var index;

// Write password to the #password input
function writePassword() {

  // Series of prompts for user inputs to determine password parameters
  function getParameters(){
    
    // User selects a length between 8 and 128
    let passwordLength;

      do {

        passwordLength = prompt("Please select a password length. MIN: 8 - MAX: 128", 8);

        // Allows user to CANCEL the prompt loop
        if(passwordLength === null){

          return;

        }else{

          parameters[0] = passwordLength;

        }

      } while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
    // End of password length prompt

    // User chooses to include or exclude lowercase letters
    let wantLoCases;

      do {

        wantLoCases = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] lowercase letters?", "I");
        
        // Allows user to CANCEL the prompt loop
        if(wantLoCases === null){

          return;

        }else{

          wantLoCases = wantLoCases.toUpperCase();
          parameters[1] = wantLoCases;

        }

      } while (wantLoCases !== "I" && wantLoCases !== "X");
    // End of lowercase letters prompt

    // User chooses to include or exclude uppercase letters
    let wantUpCases;

    do {

        wantUpCases = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] uppercase letters?", "I");       

        // Allows user to CANCEL the prompt loop
        if(wantUpCases === null){

          return;

        }else{

          wantUpCases = wantUpCases.toUpperCase();
          parameters[2] = wantUpCases;

        }
        
      } while(wantUpCases !== "I" && wantUpCases !== "X");
    // End of uppercase letters prompt

    // User chooses to include or exclude numbers
    let wantNumbers;

    do {

        wantNumbers = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] numbers?", "I");        

        // Allows user to CANCEL the prompt loop
        if(wantNumbers === null){

          return;

        }else{

          wantNumbers = wantNumbers.toUpperCase();
          parameters[3] = wantNumbers;

        }

      } while (wantNumbers !== "I" && wantNumbers !== "X");
    // End of numbers prompt

    // User chooses to include or exclude special characters
    let wantSpecial;

    do {

        wantSpecial = prompt("Would you like to INCLUDE [Press 'I'] or EXCLUDE [Press 'X'] special characters?", "I");        

        // Allows user to CANCEL the prompt loop
        if(wantSpecial === null){

          return;

        }else{

          wantSpecial = wantSpecial.toUpperCase();
          parameters[4] = wantSpecial;

        }

      } while (wantSpecial !== "I" && wantSpecial !== "X");
    // End of special characters prompt
    
    
     // Confirmation of parameters    
     window.alert("Your password will have the following parameters:\n\n"+"LENGTH: " + parameters[0] + " characters\n" + "LOWERCASE CHARACTERS: " + parameters[1] + "\n" + "UPPERCASE CHARACTERS: " + parameters[2] + "\n" + "NUMBERS: " + parameters[3] + "\n" + "SPECIAL CHARACTERS: " + parameters[4]);

     var isCorrect = window.confirm("Is this correct?");

     // If user pressed OK, proceed to password generation
     if (isCorrect && parameters[1]==="I" || parameters[2]==="I" || parameters[3]==="I" || parameters[4]==="I") {

       return parameters;

    // If user chooses to exclude all characters, repeat parameter selection
     }else if(isCorrect){

      window.alert("Please select at least one (1) type of character for password generation.")

       getParameters();

     }
     // End of parameters confirmation

  };
  // End of getParameters function

  //Populates the parameters array with the getParameters function
  parameters = getParameters();

 
  // Password Generator
  function generatePassword(){

    // Populates a temporary array based on user preferences
    function populateArray(){

      if(parameters[1]==="I"){

        if(parameters[2] === "I" && parameters[3] === "I" && parameters[4] === "I"){

          tempArray = lowChar.concat(upChar, numChar, specChar);

        }else if(parameters[2] === "X" && parameters[3] === "I" && parameters[4] === "I"){

          tempArray = lowChar.concat(numChar, specChar);

        }else if(parameters[2] === "I" && parameters[3] === "X" && parameters[4] === "I"){

          tempArray = lowChar.concat(upChar, specChar);

        }else if(parameters[2] === "X" && parameters[3] === "X" && parameters[4] === "I"){

          tempArray = lowChar.concat(specChar);

        }else if(parameters[2] === "I" && parameters[3] === "I" && parameters[4] === "X"){

          tempArray = lowChar.concat(upChar, numChar);

        }else if(parameters[2] === "X" && parameters[3] === "I" && parameters[4] === "X"){

          tempArray = lowChar.concat(numChar);

        }else if(parameters[2] === "I" && parameters[3] === "X" && parameters[4] === "X"){

          tempArray = lowChar.concat(upChar);

        }else if(parameters[2] === "X" && parameters[3] === "X" && parameters[4] === "X"){

          tempArray = lowChar;

        }

      }else if(parameters[1] === "X"){

        if(parameters[2] === "I" && parameters[3] === "I" && parameters[4] === "I"){

          tempArray = upChar.concat(numChar, specChar);

        }else if(parameters[2] === "I" && parameters[3] === "X" && parameters[4] === "I"){

          tempArray = upChar.concat(specChar);

        }else if(parameters[2] === "I" && parameters[3] === "I" && parameters[4] === "X"){

          tempArray = upChar.concat(numChar);

        }else if(parameters[2] === "I" && parameters[3] === "X" && parameters[4] === "X"){

          tempArray = upChar;

        }else if(parameters[2] === "X" && parameters[3] === "I" && parameters[4] === "I"){

          tempArray = numChar.concat(specChar);

        }else if(parameters[2] === "X" && parameters[3] === "I" && parameters[4] === "X"){

          tempArray = numChar;

        }else if(parameters[2] === "X" && parameters[3] === "X" && parameters[4] === "I"){

          tempArray = specChar;
        }
      }
      
      return tempArray;      

    };
    // End of populateArray function
    
    tempArray = populateArray();
    
    // Generates a random number to represent the tempArray index
    function indexGen() {/*

      console.log(tempArray.length);*/
      return index = Math.floor(Math.random() * tempArray.length);

    };    
    // End of indexGen function

    
    // Returns a string of characters randomly selected from the tempArray
    password = "";

    for (var i = 0; i < parameters[0]; i++) {

      password = password.concat(tempArray[indexGen()]);

      }
      return password;
    
  };
  // End of Password Generator function

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  window.alert(password);

};
// End of writePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);