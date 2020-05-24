'use strict';

for (let num = 0; num <= 10; num++) {
    if (num == 0) {
        alert(num + " - это ноль");
    } else if (num % 2 == 0) {
        alert(num + " - это чётное число");
    } else {
        alert(num + " - это не чётное число");
    }
}