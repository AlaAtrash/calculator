import { handleClick } from './keyboard.js';
const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    element === null || element === void 0 ? void 0 : element.addEventListener("click", handleClick);
});
