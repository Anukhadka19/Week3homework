// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write user input for password
function generatePassword() {
  const criteriaInput = prompt("Select number of characters between the value 8 and 128 for your password.");
  const parsed = parseInt(criteriaInput);

// Conditions
  if (isNaN(parsed)) {
    alert("Enter a numeric value.");
    return false;
  }
  else if (parsed <= 8 || parsed >= 128)  {
    alert("Please select password between values 8 and 128.");
    return false;
  }



  const includescharacterLength = confirm("Do you want the password to include numbers?");
  const includeslowerCase = confirm("Do you want the password to include lowercase letters?");
  const includesupperCase = confirm("Do you want the password to include uppercase letters?");
  const includesspecialCharacters = confirm("Do you want the password to include special characters?");
  
  console.log(includeslowerCase);

// Password variables
let characterLength = ["012345678"];
let lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
let upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let specialCharacters = ["!@#$%?&*:.,"];



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
