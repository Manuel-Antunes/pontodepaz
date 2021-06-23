const frases = ['A Vingança nunca é plena, mata a alma e a envenena', 'Que bonita a sua roupa'];
var index = 0;
const frase = document.getElementById('frase');

function addFraseToScreen(fraseParaAdicionar) {
    frase.innerHTML = '';
    console.log(index);
    const paragrafo = document.createElement('p');
    paragrafo.innerText = fraseParaAdicionar;
    frase.appendChild(paragrafo);
}
function indexUp() {
    if (index === frases.length - 1) {
        index = 0;
    } else {
        index++;
    }
    addFraseToScreen(frases[index]);
}
function indexDown() {
    if (index === 0) {
        index = frases.length - 1;
    } else {
        index--;
    }
    addFraseToScreen(frases[index]);
}
addFraseToScreen(frases[index]);