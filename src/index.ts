
import {handleClick} from './keyboard.js'

const buttons = document.querySelectorAll(".bt");
buttons.forEach(element => {
  element?.addEventListener("click", handleClick);
})