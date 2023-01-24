let inputA = document.querySelector('#numberA') as HTMLInputElement;
let numberA: number 
let inputB = document.querySelector('#numberB') as HTMLInputElement;
let numberB: number
const button = <HTMLButtonElement>document.querySelector('.button-multiplication')
const showResult = <HTMLParagraphElement>document.getElementById('resultat')
let result: number


function multiplication(a: number, b: number) {

	if (a == null || b == null || isNaN(a) || isNaN(b)) {

		showResult.textContent = "Merci de renseigner uniquement des valeurs numériques"

	}
	else {

		result = a * b;
		showResult.textContent = "Résultat : " + result;

	}

}

button.addEventListener('click', () => {
	numberA = parseInt(inputA.value)
	numberB = parseInt(inputB.value)
	multiplication(numberA, numberB)
})


