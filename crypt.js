

/* let symbol = "d c"
let str = "В центре трясины стоит одинокая старая на сваях. В окне удается разглядеть мерцающее пламя свечи"
let access2 = symbol.charCodeAt(1).toString(2);
let key = "f"
let keyIn2 = parseInt(key.charCodeAt(0).toString(2))
let array = []

let a = parseInt("110010", 2)
let b = parseInt("111111", 2)
let sum = a ^ b
console.log(sum)





arrayOfSymbols2 = function getEcryptedStr (str){
    console.log(str)
    return str.split('').map(function(item){
        return item.charCodeAt(item).toString(2)
        
    })
    
}



array = arrayOfSymbols2(str)


let xoredArray = []

let xored = function xor (array){
    return array.map(function(item){
        return item ^ keyIn2
        
    })
}

xoredArray = xored(array)
console.log(xoredArray) */


//ЛАБА2

/* let enc = function encryptXor(text, key) {
    var result = '';


    for (var i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(Math.sqrt(key.length)));
    }
    return result;
}


 
let a = "В центре трясины стоит одинокая старая хижина насваях. В окне удается разглядеть мерцающее пламя свечи" // подставить зашифрованное

console.log(enc("В центре трясины стоит одинокая старая хижина насваях. В окне удается разглядеть мерцающее пламя свечи", '123456789'));  */


//ЛАБА2


// ЛАБА1

/* let smallAlphabet = []

let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
smallAlphabet = alphabet.map(function (item) {
  return item.toLowerCase();
})
function encrypt(str,change,smallAlphabet) {
  return str.replace(/[a-z]/g, function (letter) {
    return smallAlphabet.indexOf(letter) + change >= smallAlphabet.length ? letter = smallAlphabet[(smallAlphabet.length + change) - smallAlphabet.length - 1] : letter = smallAlphabet[smallAlphabet.indexOf(letter) + change]
  })
}
let str = "mama"
var change = 6;
console.log(encrypt(str,change,smallAlphabet)) */



//ЛАБА1


const password = "123"
let attempt = 3

while (attempt != 0){
  let enteredPassword = prompt("Enter your password: ")
  if (enteredPassword === password) {
    alert("Успешно!")
  }
  
  else{
    alert(`У вас осталось ${attempt} попыток`)
  }
  attempt--;
}













