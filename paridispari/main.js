// pari o dispari contro il computer:
// prompt utente "pari o dispari" e numero da 1 a 5
// genera numero da 1 a 5 per il computer e dichiara chi ha vinto

var choice, playerNumeber, comNumber;


//acquisisco input utente
choice = prompt("Pari o dispari?","Pari");
choice = choice.toLowerCase();
playerNumeber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
console.log(choice + ' ' + playerNumeber);

//genero numero computer
comNumber = RandomGenerator();

//trovo vincitore e lo stampo
Winner(choice, playerNumeber, comNumber);




// # # FUNZIONI # #
function RandomGenerator () {
	var number = Math.floor(Math.random() * 5 + 1);
	console.log(number);
	return number;
}