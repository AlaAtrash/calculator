"use strict";
let inputA = document.querySelector('#numberA');
let numberA;
let inputB = document.querySelector('#numberB');
let numberB;
let button = document.querySelector('.button-multiplication');
let affichageResultat = document.querySelector('#resultat');
let resultat;

function multiplication(a, b) {
    if (a == null || b == null || isNaN(a) || isNaN(b)) {
        affichageResultat.textContent = "Merci de renseigner uniquement des valeurs numériques";
    }
    else {
        resultat = a * b;
        affichageResultat.textContent = "Résultat : " + resultat;
    }
}
button.addEventListener('click', () => {
    numberA = parseInt(inputA.value);
    numberB = parseInt(inputB.value);
    multiplication(numberA, numberB);
});
