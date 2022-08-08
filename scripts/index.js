const formulario = document.getElementById('formulario').addEventListener('click', e => e.preventDefault());
const divcopyButton = document.getElementById('copyButton');
const imagenDiv = document.getElementById('imagen');
const textareaTwo = document.getElementById('secondTextarea');



const hideShowContent = () => {
    divcopyButton.style.display = 'flex';
    imagenDiv.style.display = 'none';
};

const writeTextarea = (text) => {
    textareaTwo.innerHTML = text;

};

const copy = () => {
    let copiando = textareaTwo;
    copiando.select();
    document.execCommand('copy');

};
divcopyButton.addEventListener('click',copy)

const encriptar = () => {
    let texto = document.getElementById('inText').value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm, 'enter');
    var textoCifrado = textoCifrado.replace(/i/igm, 'imes');
    var textoCifrado = textoCifrado.replace(/a/igm, 'ai');
    var textoCifrado = textoCifrado.replace(/o/igm, 'ober');
    var textoCifrado = textoCifrado.replace(/u/igm, 'ufat');

    hideShowContent();
    writeTextarea(textoCifrado);
};

const desencriptar = () => {
    let texto = document.getElementById('inText').value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm, 'e');
    var textoCifrado = textoCifrado.replace(/imes/igm, 'i');
    var textoCifrado = textoCifrado.replace(/ai/igm, 'a');
    var textoCifrado = textoCifrado.replace(/ober/igm, 'o');
    var textoCifrado = textoCifrado.replace(/ufat/igm, 'u');

    hideShowContent();
    writeTextarea(textoCifrado);
};