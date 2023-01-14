"use strict";
const minus_button = document.querySelector(".minus_button");
const value = document.querySelector("input");
class Calculator {
    display() {
        let display = document.getElementById("display");
        display.innerHTML = this.currentValue;
    }
    subtract(value) {
        this.currentValue -= value;
    }
}
