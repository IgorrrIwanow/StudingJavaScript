'use strict';

/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости от переданного чмсла.
 * @param {number} num количество рублей в виде числа.
 * @returns{string} слово "рубль" в правильном падеже.
 */
function getCase(num) {
    let beforelastDigit = getDigitBeforeLastDigit(num);
    if (beforelastDigit == 1) {
        return "рублей";
    }
    num = String(num);
    let LastNumber = Number(num.charAt(num.length - 1));
    switch (LastNumber) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";

    }
}
/**
 * Функция возвращает предпоследнюю цифру числа, если она есть, иначе Null.
 * @param {number} num
 * @returns{(number|null)} 
 */
function getDigitBeforeLastDigit(num) {
    num = String(num);
    let digit = num.charAt(num.lenth - 2);
    if (digit !== "") {
        return Number(digit);
    }
    return null;
}

let money = parseInt(prompt("Какую сумму Вы хотите положить на счёт?"));
alert(`Ваша сумма ${money} ${getCase(money)} успешно зачислена.`);