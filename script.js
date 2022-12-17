console.log("Hallo Wereld");

// declaraties van alle interactieve DOM elementen op de pagina.

var cupcake = document.querySelector("#cupcake")
var aardbei = document.querySelector("#aardbei")
var chocolade = document.querySelector("#chocolade")
var wit = document.querySelector("#wit")
var blauw = document.querySelector("#blauw")
var kaars0 = document.querySelector("#kaars0")
var kaars = document.querySelector("#kaars")



var blafAudio = document.querySelector('#laugh')

var toegangsLeeftijd = 5;
var leeftijd = 7;

// DOM manipulatie functies

if(leeftijd >= toegangsLeeftijd){
    console.log("welkom")
} else {
    console.log("helaas je bent te jong om dit te spelen")
}

function cupcakewit () {
    console.log ("cupcakewit")
    cupcake.src = 'images/cupcakewit.png';
}


//eventlisteners 
wit.addEventListener("click", cupcakewit);

// DOM manipulatie functies

function cupcakeblauw () {
    console.log ("cupcakeblauw")
    cupcake.src = 'images/cupcakeblauw.png';
}


//eventlisteners 
blauw.addEventListener("click", cupcakeblauw);

// DOM manipulatie functies

function flavorberry () {
    console.log ("flavorberry")
    cupcake.src = 'images/flavorberry.png';
}

//eventlisteners 
aardbei.addEventListener("click", flavorberry);

function flavorchoco () {
    console.log ("flavorchoco")
    cupcake.src = 'images/flavorchoco.png';
}

//eventlisteners 
chocolade.addEventListener("click", flavorchoco);

function cupcakekaars0 () {
    console.log (" cupcakekaars0")
    cupcake.src = 'images/cupcakekaars0.png';
    document.getElementById('laugh').play();
}

//eventlisteners 
kaars0.addEventListener("click", cupcakekaars0);

function cupcakekaars () {
    console.log (" cupcakekaars")
    cupcake.src = 'images/cupcakekaars.png';
    document.getElementById('laugh').play();
}

//eventlisteners 
kaars.addEventListener("click", cupcakekaars);



// namen

var namen = ["Nieuwe order van: Ella", "Nieuwe order van: Sophie", "Nieuwe order van: George", "Nieuwe order van: Thomas", "hoi mijn naam is Sara"]

var randomNummer = Math.random() * 5;

var naamElement = document.querySelector("p.naam");

randomNummer = Math.floor(randomNummer);

naamElement.textContent = namen[randomNummer];


