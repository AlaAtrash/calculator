
import {handleClick} from './keyboard.js'

let first: HTMLElement = document.createElement('input')

first.setAttribute("id", "firstvalue");
first.setAttribute("type", "hidden");
first.setAttribute("value", "");

document.getElementsByClassName('buttons')[0]!.appendChild(first)

let operation: HTMLElement = document.createElement('input')

operation.setAttribute("id", "operation");
operation.setAttribute("type", "hidden");
operation.setAttribute("value", "");

document.getElementsByClassName('buttons')[0]!.appendChild(operation)

document.querySelectorAll("#display")[0].setAttribute('value', '');

const buttons = document.querySelectorAll("input");

buttons.forEach(element => {
    element?.addEventListener("click", handleClick);
})
