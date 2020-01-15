// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

var fraseRandom = Math.floor(Math.random() * 6);

if (fraseRandom == 0) {
  alert('Oggi troverai una cosa dimenticata');
} else if (fraseRandom == 1) {
  alert('Ciò che è fatto è fatto');
} else if (fraseRandom == 2) {
  alert('Il buon giorno si vede dal mattino');
} else if (fraseRandom == 3) {
  alert('Sicuro di aver chiuso il gas?');
} else if (fraseRandom == 4) {
  alert('Chi semina vento raccoglie tempesta');
} else if (fraseRandom == 5) {
  alert('Il mattino ha l\'oro in bocca');
} else if (fraseRandom == 6) {
  alert('Tanto va la gatta al lardo che ci lascia lo zampino');
}
