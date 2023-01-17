import { modulo } from './modulo.js';
import { operationNotDefined } from './notdefined.js';
import { Trigo } from "./sin_cos.js";
export function handleClick() {
    const key = this.getAttribute('value');
    // Operation associative array with associate function
    const operationFunctions = {
        '%': modulo,
        'x²': operationNotDefined,
        '/': operationNotDefined,
        '*': operationNotDefined,
        '-': operationNotDefined,
        '+': operationNotDefined
    };
    // get 3 parameters from DOM : operand1 operation operand2
    let firstValue = document.querySelectorAll("#firstvalue")[0].getAttribute('value');
    let operation = document.querySelectorAll("#operation")[0].getAttribute('value');
    let value = document.querySelectorAll("#display")[0].getAttribute('value');
    // operation => save the first value and the operation in the DOM, and reinit the field for the future second value
    if (Object.keys(operationFunctions).indexOf(key) >= 0 && value !== '') {
        if (operation === '' && value !== '') {
            firstValue = value;
            operation = key;
            value = '';
        }
    }
    else {
        // it's not an operation => it's a key to treat
        switch (key) {
            case 'AC': {
                firstValue = '';
                operation = '';
                value = '';
                break;
            }
            case '-': {
                // there is already one => delete it else add it
                if (value === '') {
                    value = '-';
                }
                break;
            }
            case '.': {
                // Decimal point not present => add it
                if (value.indexOf('.') < 0) {
                    value += '.';
                }
                break;
            }
            case '=': {
                // call operation function with the 2 parameters if thet are. Else nothing
                if (firstValue !== '') {
                    value = operationFunctions[operation](firstValue, value);
                    operation = '';
                    firstValue = '';
                }
                break;
            }
            case 'cos': {
                const trigo = new Trigo(+value);
                value = trigo.cosinus().toString();
                break;
            }
            case 'sin': {
                const trigo = new Trigo(+value);
                value = trigo.sinus().toString();
                break;
            }
            default: {
                // Rest the numeric keys => add it at the end of the value
                value += key;
                break;
            }
        }
    }
    document.querySelectorAll("#firstvalue")[0].setAttribute('value', firstValue);
    document.querySelectorAll("#operation")[0].setAttribute('value', operation);
    document.querySelectorAll("#display")[0].setAttribute('value', value);
}