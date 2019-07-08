// funzione che capisce se la parola inserita è palindroma

var input = prompt("Inserisci la parola");
var output = Palindromo(input);
alert(output);


function Palindromo(parola) {
	//init indice ultima lettera parola
	var indiceContrario = parola.length - 1;

	for (var i = 0; i < parola.length; i++) {
		if (parola[i] != parola[indiceContrario]) {
			return "La parola non è palindroma";
		} else {
			indiceContrario--;
		}
	}
	// return solo nel caso in cui non siano emerse coppie diverse
	return "La parola è palindroma";
}