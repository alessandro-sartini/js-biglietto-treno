// Ciao ragazzi,
// esercizio di oggi: Biglietto del treno
// cartella/repo js-biglietto-treno



// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.




// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:



// - il prezzo del biglietto è definito in base ai km (0.21 € al km)


// - va applicato uno sconto del 20% per i minorenni


// - va applicato uno sconto del 40% per gli over 65.



// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Buon lavoro!



let eta = prompt("Inserisci la tua eta")

let kmPercorsi= prompt("Quanti km devi percorrere?")

let priceBase = 0.21;
const scontoGiovani = 0.20;
const scontoAnziani = 0.40;

// if (eta>17 && eta < 65) {
    
//     console.log(kmPercorsi * priceBase)

// } else if (eta < 18) {
//     console.log((kmPercorsi * priceBase)- 20 / 100)

// } else {
//     console.log((kmPercorsi * priceBase)- 40 / 100)


// }
if (eta < 18) {

    let priceDiscount = (kmPercorsi * priceBase) * scontoGiovani;
    console.log("Il prezzo del tuo biglietto è di ",priceDiscount.toFixed(2))

} else if (eta >= 65) {

    priceDiscount = (kmPercorsi * priceBase) * scontoAnziani;
    console.log("Il prezzo del tuo biglietto è di ",priceDiscount.toFixed(2))

} else {

    let price = kmPercorsi * priceBase
    
    console.log("Il prezzo del tuo biglietto è di ",price.toFixed(2))
    
}
