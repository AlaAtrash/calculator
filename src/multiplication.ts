const inputA = <HTMLInputElement>document.getElementById('numberA')
const inputB = <HTMLInputElement>document.getElementById('numberB')
let numberA: number
let numberB: number
const button = <HTMLButtonElement>document.querySelector('.button-multiplication')
const showResult = <HTMLParagraphElement>document.getElementById('resultat')
let result: number = 1


const multiplication = (...numbers: any) => {

	if (numbers.includes(NaN) || numbers.includes(null)) {
		showResult.textContent = "Merci de renseigner uniquement des valeurs numériques"

	}
	else {
		console.log("ok ce sont des nombres")
		
		for (const number of numbers) {	
			result *= number;
		}
		console.log(result)
		showResult.textContent = "Résultat : " + result.toFixed(2);
		result = 1
	}

}


button.addEventListener('click', () => {
	numberA =  parseFloat(inputA.value)
	numberB = parseFloat(inputB.value)
	multiplication(numberA, numberB)
})




