import { Trigo } from "./sin_cos.js";
const btn_sinus = document.querySelector(".sin");
const btn_cosinus = document.querySelector(".cos");
const inputAngle = document.querySelector("#angle");
const resultat = document.querySelector(".container_resultat");
btn_sinus === null || btn_sinus === void 0 ? void 0 : btn_sinus.addEventListener("click", (e) => {
    if (inputAngle) {
        const trigo = new Trigo(+inputAngle.value);
        if (resultat) {
            resultat.innerText = trigo.sinus().toString();
        }
    }
});
btn_cosinus === null || btn_cosinus === void 0 ? void 0 : btn_cosinus.addEventListener("click", (e) => {
    if (inputAngle) {
        const trigo = new Trigo(+inputAngle.value);
        if (resultat) {
            resultat.innerText = trigo.cosinus().toString();
        }
    }
});
/**
 * Class ajoutant un comportement lorsque l'on rentre une valeur l'input
 * limite les valeurs possible entre 0 et 360
 */
class Angledirective {
    constructor(element) {
        this.element = element;
    }
    init() {
        this.element.style.border = "Green Solid 1px";
        this.element.addEventListener('input', (event) => {
            const element = event.target;
            let value = element.value;
            if (+value > 360) {
                value = "360";
            }
            if (+value < -360) {
                value = "-360";
            }
            element.value = value;
        });
    }
}
if (inputAngle) {
    const directive = new Angledirective(inputAngle);
    directive.init();
}
