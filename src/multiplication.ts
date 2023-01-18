let inputA = document.querySelector('#numberA') as HTMLInputElement;
let numberA = inputA.value;
let inputB = document.querySelector('#numberB') as HTMLInputElement;
let numberB = inputB.value;
let button = document.querySelector('.button-multiplication') as HTMLButtonElement;
let resultat: number


function multiplication(a: number, b: number): number {
        resultat = a * b
        alert("Le résultat de votre multiplication est " + resultat)
        return resultat       
};
