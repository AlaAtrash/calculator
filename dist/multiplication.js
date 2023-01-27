"use strict";
const inputA = document.getElementById('numberA');
const inputB = document.getElementById('numberB');
let numberA;
let numberB;
const button = document.querySelector('.button-multiplication');
const showResult = document.getElementById('resultat');
let result;
const multiplication = (a, b) => {
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
        showResult.textContent = "Merci de renseigner uniquement des valeurs numériques";
    }
    else {
        result = a * b;
        showResult.textContent = "Résultat : " + result.toFixed(2);
    }
};
button.addEventListener('click', () => {
    numberA = parseFloat(inputA.value);
    numberB = parseFloat(inputB.value);
    multiplication(numberA, numberB);
});
