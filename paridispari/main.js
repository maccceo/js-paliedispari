// pari o dispari contro il computer:
// prompt utente "pari o dispari" e numero da 1 a 5
// genera numero da 1 a 5 per il computer e dichiara chi ha vinto

//acquisisco input utente
var choice = prompt("Pari o dispari?","Pari");
var playerNumeber = prompt("Inserisci un numero da 1 a 5:");

//genero numero computer
var comNumber = RandomGenerator();

//trovo vincitore e lo stampo
Winner(choice, playerNumeber, comNumber);
