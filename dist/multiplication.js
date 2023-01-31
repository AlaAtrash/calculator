"use strict";
const inputA = document.getElementById('numberA');
const inputB = document.getElementById('numberB');
let numberA;
let numberB;
const button = document.querySelector('.button-multiplication');
const showResult = document.getElementById('resultat');
let result = 1;
const multiplication = (...numbers) => {
    if (numbers.includes(NaN) || numbers.includes(null)) {
        showResult.textContent = "Merci de renseigner uniquement des valeurs numériques";
    }
    else {
        console.log("ok ce sont des nombres");
        for (const number of numbers) {
            result *= number;
        }
        console.log(result);
        showResult.textContent = "Résultat : " + result.toFixed(2);
        result = 1;
    }
};
button.addEventListener('click', () => {
    numberA = parseFloat(inputA.value);
    numberB = parseFloat(inputB.value);
    multiplication(numberA, numberB);
});
