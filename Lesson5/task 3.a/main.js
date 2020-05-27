'use strict';

let modal = document.querySelector('.wrp');
let closeBtn = document.querySelector('span');
let showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
})

showBtn.addEventListener('click', function () {
    modal.classList.remove('hidden');
})