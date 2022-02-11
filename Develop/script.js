// Assignment Code
var generateBtn = document.querySelector("#generate");
// Decelaring Arrays
var Achar = ["~","`","!","@","#","$","%","^","&","*","(",")","/","?","<",">",",",".","_","-","+","=","|","{","}","[","]"]
var Anum = ["1","2","3","4","5","6","7","8","9","0"]
var AlowerCase = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",'s',"t","u",'v',"w","x",'y',"z"]
var AupperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",'R',"S","T","U","V","W","X","Y","Z"]
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.confirm("Would you like to select criteria for password?")
window.alert("click generate Password button")

function generatePassword()
{

if (confirm)
{
  var pwlength = prompt("select the length of password between 8 & 128 characters")
  
    if (pwlength < 8 || pwlength > 128) { //checks for password length.
      alert("your password length should be between 8 & 128 characters. Try Again")}
    else { 
      Numbers = window.confirm("Would you like the password to have numbers") // Prompts message
    specialChar = window.confirm("Would you like the password to have special characters") // Prompts message
    lowerCaseLetter = window.confirm("Would you like the password to have lowercase letters") // Prompts message
    upperCaseLetter = window.confirm("Would you like the password to have Uppercase letters") // Prompts message
  
    pwElement = []; // Declaring password element array
// checking on conditions on elements of password
    if (specialChar === true)
        pwElement = pwElement.concat(Achar)
    
    if (lowerCaseLetter === true)
        pwElement = pwElement.concat(AlowerCase)
 
    if (upperCaseLetter === true)
        pwElement = pwElement.concat(AupperCase)
  
    if (Numbers === true)
        pwElement = pwElement.concat(Anum)
       // for loop to select the password with user provided choices
     for (let i = 0; i < pwlength-1; i++) {
        function random(pwElement) {
        return pwElement[Math.floor(Math.random() * pwElement.length)];
       
      }
      }
        // Password elements are stored in a array. 
       Newelement = [random(pwElement)];

     for (let i = 0; i < pwlength-1; i++) {
      
     newpwElement = Newelement.push(random(pwElement)); 
     }
 password = ''; 
// retrieve password element from a Array to text format. 
 for (let i = 0; i < pwlength; i++) {
  
password = password + Newelement[i]
   }
   console.log(password) // genereate password.

  return password; // returns password on the password place holder provided
  }
}
}