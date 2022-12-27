let age = 18;
if (age >= 18 && age <=25) {
    console.log('Призовна служба');
}

else if (age >=25 && age <=60) {
    console.log('Служба по контракту');
}

else {
    console.log('Не годен');
}




let select = document.querySelector('.sel');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let out = document.querySelector('.out');

btn.onclick = () => {
    switch(select.value){
        case '+':
            out.innerHTML = (+inp1.value + +inp2.value);
            break;
        case '-':
            out.innerHTML = (+inp1.value - +inp2.value);
            break;
        case '*':
            out.innerHTML = (+inp1.value * +inp2.value);
            break;
        case '/':
            out.innerHTML = (+inp1.value / +inp2.value);
            break;
        case '%':
            out.innerHTML = (+inp1.value % +inp2.value);
            break;
    }
}

btn2.onclick = () => {
  out.innerHTML = 0;
  inp1.value = ' ';
  inp2.value = ' ';
}