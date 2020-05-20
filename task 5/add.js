'use strict';

//Задание №4
/**
 * Функция складывает параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}
/**
 * Функция вычитает из параметра "a" параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sub(a, b) {
    return a - b;
}
/**
 * Функция перемножает параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function mul(a, b) {
    return a * b;
}
/**
 * Функция делит параметр "a" на параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function div(a, b) {
    return a / b;
}

//Задание №5

/**
 * Функция получает 2 числа и осуществляет над ними математическую операцию.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "*", "/".
 * @throws {error} будет выброшена ошибка, если передана непредусмотренная операция.
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return mul(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            throw new error("Операция" + operation + " не предусмотренна");
    }
}

console.log(mathOperation(5, 10, "+"));
console.log(mathOperation(5, 10, "-"));
console.log(mathOperation(5, 10, "/"));
console.log(mathOperation(5, 10, "*"));
console.log(mathOperation(5, 10, "lorem"));
