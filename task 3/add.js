'use strict';

//Задание №3
let a = 10;
let b = 12;
if (a >= 0 && b >= 0){
    alert(a - b);
} else if (a < 0 && b < 0){
    alert(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert(a + b);
} /*else if (a * b < 0) {
    alert(a + b);*/