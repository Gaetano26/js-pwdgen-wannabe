let nome= prompt('Inserisci il tuo nome');
let cognome= prompt('Inserisci il tuo cognome');
let color = prompt('Inserisci il tuo colore preferito');
const number = 21;

document.getElementById('testo').innerHTML = `
<h1> La tua password sara: ${nome}${cognome}${color}${number} </h1>
`;