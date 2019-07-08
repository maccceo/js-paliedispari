// pari o dispari contro il computer:
// prompt utente "pari o dispari" e numero da 1 a 5
// genera numero da 1 a 5 per il computer e dichiara chi ha vinto

var choice, playerNumber, comNumber, result, allClear = false;


//acquisisco input utente
choice = prompt("Pari o dispari?");
choice = choice.toLowerCase();
//accetto solo l'input "pari" o "dispari"
while (allClear == false) {
	if (choice === "pari" || choice === "dispari") {
		allClear = true;
	} else {
		choice = prompt('Formato non valido, scrivi "pari" o "dispari:"');
		choice = choice.toLowerCase();
	}
}
allClear = false;

playerNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
//accetto solo un numero
while (allClear == false) {
	if (!isNaN(playerNumber)) {
		allClear = true;
	} else {
		playerNumber = parseInt(prompt('Inserisci un numero da 1 a 5:'));
	}
}
console.log(choice + ', numero utente: ' + playerNumber);

//genero numero computer
comNumber = RandomGenerator();

//trovo vincitore e lo stampo
result = Winner(choice, playerNumber, comNumber);
alert(result + ' Hai scelto ' + choice + ', ' + playerNumber + ' (tu) + ' + comNumber + ' (computer)');



// # # FUNZIONI # #
function RandomGenerator() {
	var number = Math.floor(Math.random() * 5 + 1);
	console.log('numero computer: ' + number);
	return number;
}

function Winner(choice, num1, num2) {
	num1 = num1 + num2;
	if (num1 % 2 == 0 && choice === "pari") {
		return "Hai vinto!";
	} else if (num1 % 2 == 0 && choice === "dispari") {
		return "Hai perso!";
	} else if (num1 % 2 == 1 && choice === "pari") {
		return "Hai perso!";
	} else if (num1 % 2 == 1 && choice === "dispari") {
		return "Hai vinto!";
	} else {
		return "E' successo qualcosa di imprevisto..."
		//non dovrebbe..
	}
}