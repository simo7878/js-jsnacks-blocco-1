// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var numeroUtente = parseInt(prompt('inserisci numero'));

for (var i = 1; i <= numeroUtente; i++) {
 console.log(Math.pow(i, 3));
}
