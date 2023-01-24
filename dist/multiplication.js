"use strict";
const inputA = document.getElementById('numberA');
const inputB = document.getElementById('numberB');
let numberA;
let numberB;
const button = document.querySelector('.button-multiplication');
const affichageResultat = document.getElementById('resultat');
let resultat;
const multiplication = (a, b) => {
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
        affichageResultat.textContent = "Merci de renseigner uniquement des valeurs numériques";
    }
    else {
        resultat = a * b;
        affichageResultat.textContent = "Résultat : " + resultat;
    }
};
button.addEventListener('click', () => {
    numberA = parseInt(inputA.value);
    numberB = parseInt(inputB.value);
    multiplication(numberA, numberB);
});
