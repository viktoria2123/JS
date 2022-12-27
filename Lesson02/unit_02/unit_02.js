// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
let out2 = document.querySelector('.out-2');
out2.innerHTML = (c / d);

// document.querySelector('.out-2').textContent = 

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
let f = 5;
let out3 = document.querySelector('.out-3');
out3.innerHTML = (e + f);

// document.querySelector('.out-3').textContent = 

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
let out4 = document.querySelector('.out-4');
out4.innerHTML = (e1 + f1);

// document.querySelector('.out-4').textContent = 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
let out5 = document.querySelector('.out-5');
out5.innerHTML = (e2/f2);

// document.querySelector('.out-5').textContent = 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
let out6 = document.querySelector('.out-6');
out6.innerHTML = (e3 + f3);

// document.querySelector('.out-6').textContent = 

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
let out7 = document.querySelector('.out-7');
out7.innerHTML = (e4 * f4);

// document.querySelector('.out-7').textContent = (e4 * f4);

// document.querySelector('.out-7').textContent = 

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

function t8() {
    // // value всегда получаем внутри функции
    // let data = document.querySelector('.i-8').value; // получили значение
    // // тут выводим
}

// document.querySelector('.b-8').onclick = t8;

let i8 = document.querySelector('.i-8');
let b8 = document.querySelector('.b-8');
let out8 = document.querySelector('.out-8');
b8.onclick = () => {
    out8.innerHTML = i8.value;
}

// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.

function t9() {

}

// document.querySelector('.b-9').onclick = t9;

let i9 = document.querySelector('.i-9');
let b9 = document.querySelector('.b-9');
let out9 = document.querySelector('.out-9');
b9.onclick = () => {
    out9.innerHTML = i9.value;
    out9.innerHTML = i9.value = '';
}

// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

function t10() {

}

// document.querySelector('.b-10').onclick = t10;

let i10 = document.querySelector('.i-10');
let b10 = document.querySelector('.b-10');
let out10 = document.querySelector('.out-10');
b10.onclick = () => {
    out10.innerHTML = (i10.value * 20);
}

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

function t11() {

}

// document.querySelector('.b-11').onclick = t11;

let i11 = document.querySelector('.i-11');
let b11 = document.querySelector('.b-11');
let out11 = document.querySelector('.out-11');
b11.onclick = () => {
    out11.innerHTML = (i11.value += 55);
}

// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input i.12-1 и i.12-2 (пользователь вводин в них фамилию и имя). После чего вывести в .out-12  строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. Обращаю ваше внимание - с этого момента мы работаем строго по заданию. Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?). Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.

function t12() {

}

// document.querySelector('.b-12').onclick = t12;

let i12_1 = document.querySelector('.i-12-1');
let i12_2 = document.querySelector('.i-12-2');
let b12 = document.querySelector('.b-12');
let out12 = document.querySelector('.out-12');
b12.onclick = () => {
    let res = (i12_1.value + ' ' + ' ' + i12_2.value);
    out12.innerHTML = ('Hello' + ' ' + res);
}

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

function t13() {

}

// document.querySelector('.b-13').onclick = t13;
let i13_1 = document.querySelector('.i-13-1');
let i13_2 = document.querySelector('.i-13-2');
let b13 = document.querySelector('.b-13');
let out13 = document.querySelector('.out-13');
b13.onclick = () => {
    out13.innerHTML = (+i13_1.value + +i13_2.value);
}


// Task 14.!!!
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

function t14() {

}

// document.querySelector('.b-14').onclick = t14;

let b14 = document.querySelector('.b-14');
let i14 = document.querySelector('.i-14');
b14.onclick = () => {
    i14.value = 'Go';
}

// Task 15.!!!
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

function t15() {

}

document.querySelector('.b-15').onclick = t15;

// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

function t16() {

}

// document.querySelector('.b-16').onclick = t16;

let b16 = document.querySelector('.b-16');
let i16_1 = document.querySelector('.i-16-1');
let i16_2 = document.querySelector('.i-16-2');
let out16 = document.querySelector('.out-16');
b16.onclick = () => {
    out16.innerHTML = (i16_1.value + i16_2.value);
}

// Task 17.!!!!!
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

function t17() {
    let a = document.querySelector('.i-17').value;
    document.querySelector('.out-17-1').innerHTML = +a;
    document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
    document.querySelector('.out-17-3').innerHTML = Number(a);
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
//  По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {

}

// document.querySelector('.b-18').onclick = t18;
let b18 = document.querySelector('.b-18');
let i18 = document.querySelector('.i18');
let out18 = document.querySelector('.out-18');
b18.onclick = () => {
    out18.innerHTML = parseFloat(i18.value);
}

// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2. 

function t19() {

}

// document.querySelector('.b-19').onclick = t19;

let b19 = document.querySelector('.b-19');
let out19 = document.querySelector('.out-19');
let i19_1 = document.querySelector('.i-19-1');
let i19_2 = document.querySelector('.i-19-2');
b18.onclick = () => {
    out19.innerHTML = (+i19_1.value + +i19_2.value);
}


// Task 20 - !!!!
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;

let count = 1;
let b20 = document.querySelector('.b-20');
let out20 = document.querySelector('.out-20');

function t20() {
    count = count + 1; // можно сократить count++
    out20.onclick = () => {
        b20.innerHTML = (count++);
    }
}

// document.querySelector('.b-20').onclick = t20;