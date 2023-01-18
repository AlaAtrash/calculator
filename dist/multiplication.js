"use strict";
let inputA = document.querySelector('#numberA');
let numberA = inputA.value;
let inputB = document.querySelector('#numberB');
let numberB = inputB.value;
let button = document.querySelector('.button-multiplication');
let resultat;
function multiplication(a, b) {
    resultat = a * b;
    return resultat;
}
;
button.addEventListener('click', multiplication(numberA, numberB), alert("Le résultat de votre multiplication est " + resultat));
