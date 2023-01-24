const inputA = <HTMLInputElement>document.getElementById('numberA')
const inputB = <HTMLInputElement>document.getElementById('numberB')
let numberA: number
let numberB: number
const button = <HTMLButtonElement>document.querySelector('.button-multiplication')
const affichageResultat = <HTMLParagraphElement>document.getElementById('resultat')
let resultat: number


const multiplication = (a: number, b: number) => {

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
