
import {modulo} from './modulo.js'
import {operationNotDefined} from './notdefined.js'

export function handleClick (this: HTMLElement) {

    // operation function model (2 string operand parameters and a return string)
    interface operationFunction {
        (firstOperand: string, secondOperand: string): string
    }

    // Associative array model
    interface operationFunctionInterface {
        [key: string] : operationFunction;
    }

    // Operation associative array with associate function
    const operationFunctions: operationFunctionInterface = {
        'mod' : modulo,
        'x²'  : operationNotDefined,
        '/'   : operationNotDefined,
        '*'   : operationNotDefined,
        '-'   : operationNotDefined,
        '+'   : operationNotDefined
    }

    // get 3 parameters from DOM : operand1 operation operand2
    const firstValue = document.querySelectorAll("#firstvalue")[0];
    const operation = document.querySelectorAll("#operation")[0];
    const value = document.querySelectorAll("#value")[0];

    // operation => save the first value and the operation in the DOM, and reinit the field for the future second value
    if (Object.keys(operationFunctions).indexOf(this.innerHTML) >= 0) {

        if (operation.innerHTML === '' && value.innerHTML !== '') {           
            firstValue.innerHTML = value.innerHTML
            operation.innerHTML = this.innerHTML
            value.innerHTML = ''
        }

    } else {

        // it's not an operation => it's a key to treat
        switch(this.innerHTML) {
            case 'clear': {
                firstValue.innerHTML = ''
                operation.innerHTML = ''
                value.innerHTML = ''
                break;
            }
            case '+/-': {
                // there is already one => delete it else add it
                if (value.innerHTML.indexOf('-') === 0) {
                    value.innerHTML = value.innerHTML.substring(1)
                } else {
                    value.innerHTML = '-' + value.innerHTML
                }
                break;
            }
            case '.': {
                // Decimal point not present => add it
                if (value.innerHTML.indexOf('.') < 0) {
                    value.innerHTML += '.'
                }
                break;
            }
            case '=': {
                // call operation function with the 2 parameters if thet are. Else nothing
                if (firstValue.innerHTML !== '') {
                    value.innerHTML = operationFunctions[operation.innerHTML](firstValue.innerHTML, value.innerHTML)
                    operation.innerHTML = ''
                    firstValue.innerHTML = ''
                }
                break;
            }
            default: {
                // Rest the numeric keys => add it at the end of the value
                value.innerHTML += this.innerHTML
                break;
            }

        }

    }

}