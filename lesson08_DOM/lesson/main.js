//BOM

//alert('test')
//prompt('')
//confirm('')


// Dom => Document Object Model

console.dir(document);

console.log(document.URL);
document.title = "Sasha";

// arr[0]
//let btn = document.querySelector('.button');

let btnAll = document.querySelectorAll('.button');

let chek = true;

// btn.onclick = () => {

//     if(chek) {
//         btn.classList.add('active')
//         chek = false;  
//     } else {
//         btn.classList.remove('active')
//         chek = true;
//     }
// }


//Old
// for(let i =0; i < btnAll.length; i++){
//     btnAll[i].onclick = () => {
//         btnAll[i].classList.toggle('active');
//     }
// }


btnAll.forEach((item)=>{
    item.onclick = () => {
        item.classList.toggle('active');
    }
})


//Додаємо клас
// btn.classList.add('red');
// //Додаємо клас і видаляє
// btn.classList.toggle('red');
// //Видаляємо класс
// btn.classList.remove('red');


//Data Artibute
let img = document.querySelector('.img')
console.log(img);

//Створюємо data атрибут 
img.setAttribute('src','./main.png')

//знаходимо data атрибут 
console.log(img.getAttribute('class'));






