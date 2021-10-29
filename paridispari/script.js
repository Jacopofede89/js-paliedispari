// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Genera un numero random (sempre da 1 a 5) per il computer 

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari 

// Dichiariamo chi ha vinto.

const user = document.getElementById("user");
const pc = document.getElementById("pc");
const btn = document.getElementById("btn");


const userA = Math.floor(Math.random()* 5) +1;
console.log(userA);
const pcA = Math.floor(Math.random()* 5) +1;
console.log(pcA);


btn.addEventListener("click",

function(){
if (userA > pcA){
    user.innerHTML= "Hai vinto"
}
else if (userA < pcA){
    user.innerHTML= "Hai perso"
}
else if (userA == pcA){
    user.innerHTML= "Hai pareggiato"
}
}
);