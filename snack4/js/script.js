// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ['pippo', 'pluto', 'paperino', 'minnie', 'topolino' ]

var nomeUtente = prompt('Qual é il tuo nome?')

var trovato = false;

for (var i = 0; i < invitati.length; i++) {
if (nomeUtente == invitati[i]) {
  var trovato = true;
}
console.log(invitati[i]);
}

if (trovato == true) {
  alert('puoi partecipare');
} else {
  alert('non puoi partecipare');
