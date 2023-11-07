const passwordOne = document.getElementById("password-one")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let length = 20;
const allCharacters = characters;

function generatePasswords(){
    let password = ""
    password += characters [(Math.floor(Math.random() * characters.length))]

    while(length > password.length){ 
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    passwordOne.textContent = password
}

function copyButton(){
    let content = document.getElementById('password-one').textContent;
    navigator.clipboard.writeText(content.value);
    alert("Password Copied!")
}









