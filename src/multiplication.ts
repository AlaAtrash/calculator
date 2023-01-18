const inputA = <HTMLInputElement>document.getElementById('numberA')
const inputB = <HTMLInputElement>document.getElementById('numberB')
let numberA: number
let numberB: number
const button = <HTMLButtonElement>document.querySelector('.button-multiplication')
const showResult = <HTMLParagraphElement>document.getElementById('resultat')
let result: number


const multiplication = (a: number, b: number) => {

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


