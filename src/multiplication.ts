let inputA = document.querySelector('#numberA') as HTMLInputElement;
let numberA: number 
let inputB = document.querySelector('#numberB') as HTMLInputElement;
let numberB: number
let button = document.querySelector('.button-multiplication') as HTMLButtonElement;
let affichageResultat = document.querySelector('#resultat') as HTMLParagraphElement
let resultat: number


function multiplication(a: number, b: number) {

	if (a == null || b == null || isNaN(a) || isNaN(b)) {

		affichageResultat.textContent = "Merci de renseigner uniquement des valeurs numériques"

	}
	else {

		resultat = a * b;
		affichageResultat.textContent = "Résultat : " + resultat;

	}

}

button.addEventListener('click', () => {
	numberA = parseInt(inputA.value)
	numberB = parseInt(inputB.value)
	multiplication(numberA, numberB)
})
