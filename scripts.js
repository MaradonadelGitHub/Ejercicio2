const resultado = document.getElementById('resultado');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

document.getElementById('suma').addEventListener('click', () => {
    suma(parseInt(num1.value), parseInt(num2.value), mostrarResultado);
})
document.getElementById('resta').addEventListener('click', () => {
    resta(parseInt(num1.value), parseInt(num2.value), mostrarResultado);
})
document.getElementById('multip').addEventListener('click', () => {
    multi(parseInt(num1.value), parseInt(num2.value), mostrarResultado);
})
document.getElementById('division').addEventListener('click', () => {
    divi(parseInt(num1.value), parseInt(num2.value), mostrarResultado);
})

document.getElementById('limpiar').addEventListener('click', () => {
    num1.value = "";
    num2.value = "";
    resultado.innerHTML = "";
})

function suma(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

function resta(a, b, callback) {
    let resultado = a - b;
    callback(resultado);
}

function multi(a, b, callback) {
    let resultado = a * b;
    callback(resultado);
}

function divi(a, b, callback) {
    let resultado = a / b;
    callback(resultado);
}

function mostrarResultado(result) {
    resultado.innerHTML = result;
}