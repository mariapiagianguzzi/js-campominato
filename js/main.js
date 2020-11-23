/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
Consigli del giorno:Fai meditazione */ 



/* CREO IL CICLO CON MATH RANDOM PER GENERARE 16 NUMERI */
var numeroPc = [];
console.log(numeroPc);

i = 0;
while (numeroPc.length < 16) {
  var numeroRandom = Math.floor(Math.random() * 100 ) + 1;

  if (numeroPc.includes(numeroRandom)) {
  } else {
    numeroPc.push(numeroRandom);
  }

  i++
}

/* CREO UN CICLO WHILE DOVE L'UTENTE INSERISCE UN NUMERO DA 1 A 100 */

var numeroUtente = []; 
console.log(numeroUtente);

i = 0;
while (numeroUtente.length < (100 - 16)) {
    var insertNumber = Number (prompt("Inserisci un numero da 1 a 100"));
    if (numeroUtente.includes(insertNumber)){
        alert("Hai già inserito questo numero")

    } else {
        numeroUtente.push(insertNumber);

        if (numeroPc.includes(insertNumber)){
            alert("Hai perso")
        } else {
            alert("Vai avanti")
        }

    }

i++

}


