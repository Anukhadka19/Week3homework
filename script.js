// Assignment Code
const generateBtn = document.querySelector("#generate");

// Password variables
let characterLength = ["012345678"];
let lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
let upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let specialCharacters = ["!@#$%?&*:.,"];

// Write user input for password
function generatePassword() {
  const criteriaInput = prompt("Select number of characters between the value 8 and 128 for your password.");
  const length = parseInt(criteriaInput);

// Conditions
  if (isNaN(length)) {
    alert("Enter a numeric value.");
    return false;
  }
  else if (length <= 8 || length >= 128)  {
    alert("Please select password between values 8 and 128.");
    return false;
  }

  const includescharacterLength = confirm("Do you want the password to include numbers?");
  const includeslowerCase = confirm("Do you want the password to include lowercase letters?");
  const includesupperCase = confirm("Do you want the password to include uppercase letters?");
  const includesspecialCharacters = confirm("Do you want the password to include special characters?");
  
  console.log(includeslowerCase);

  // Array for characters in password
  let passwordCharacters = [];

  if (includescharacterLength === "true") {
    passwordCharacters = passwordCharacters + characterLength;
    passwordCharacters += characterLength;
  }

  if (includeslowerCase === "true") {
    passwordCharacters = passwordCharacters + lowerCase;
    passwordCharacters += lowerCase;
  }

  if (includesupperCase === "true") {
    passwordCharacters = passwordCharacters + upperCase;
    passwordCharacters += upperCase;
  }

  if (includesspecialCharacters === "true") {
    passwordCharacters = passwordCharacters + specialCharacters;
    passwordCharacters += specialCharacters;
  }



  // Random password generator and return password at the end
  let password = "";

  for (let i = 0; i < length; i++) {
    password += passwordCharacters[Math.floor(Math.random() * (passwordCharacters.length))];
      
    }

    return password;
  }
  
  


  


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
