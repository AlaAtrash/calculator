
import {handleClick} from './keyboard.js'

const buttons = document.querySelectorAll("button");
buttons.forEach(element => {
    element?.addEventListener("click", handleClick);
})