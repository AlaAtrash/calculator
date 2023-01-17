
import {modulo} from './modulo.js'
import {operationNotDefined} from './notdefined.js'
import { Trigo } from "./sin_cos.js";

export function handleClick (this: HTMLElement) {

    const key = this.getAttribute('value')

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
        '%' : modulo,
        'x²'  : operationNotDefined,
        '/'   : operationNotDefined,
        '*'   : operationNotDefined,
        '-'   : operationNotDefined,
        '+'   : operationNotDefined
    }

    // get 3 parameters from DOM : operand1 operation operand2
    let firstValue = document.querySelectorAll("#firstvalue")[0].getAttribute('value');
    let operation = document.querySelectorAll("#operation")[0].getAttribute('value');
    let value = document.querySelectorAll("#display")[0].getAttribute('value');

    // operation => save the first value and the operation in the DOM, and reinit the field for the future second value
    if (Object.keys(operationFunctions).indexOf(key!) >= 0 && key !== '-') {
        if (operation === '' && value !== '') {           
            firstValue = value
            operation = key
            value = ''
        }

    } else {

        // it's not an operation => it's a key to treat
        switch(key) {
            case 'AC': {
                firstValue = ''
                operation = ''
                value = ''
                break;
            }
            case '-': {
                // there is already one => nothing
                if (value === '') {
                    value = '-'
                } else if (value !== '-') {
                    firstValue = value
                    operation = key
                    value = ''
                }
                break;
            }
            case '.': {
                // Decimal point not present => add it
                if (value!.indexOf('.') < 0) {
                    value += '.'
                }
                break;
            }
            case '=': {
                // call operation function with the 2 parameters if thet are. Else nothing
                if (firstValue !== '') {
                    value = operationFunctions[operation!](firstValue!, value!)
                    operation = ''
                    firstValue = ''
                }
                break;
            }
            case 'cos': {
                if (value !== '') {
                    const trigo = new Trigo(+value!);
                    value = trigo.cosinus().toString();
                }
                break;
            }
            case 'sin': {
                if (value !== '') {
                    const trigo = new Trigo(+value!);
                    value = trigo.sinus().toString();
                }
                break;
            }
            default: {
                // Rest the numeric keys => add it at the end of the value
                value += key!
                break;
            }

        }

    }

    document.querySelectorAll("#firstvalue")[0].setAttribute('value', firstValue!);
    document.querySelectorAll("#operation")[0].setAttribute('value', operation!);
    document.querySelectorAll("#display")[0].setAttribute('value', value!);

}