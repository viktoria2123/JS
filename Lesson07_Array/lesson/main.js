const arr = [
    'Sasha',
    11,
    true,
    function () {
        console.log('test');
    }
];
arr[3]();
// console.log(arr[0]);

arr[0] = 'Sveta' // Переписуемо значення

console.log(arr);


const arr1 = [
    'Sasha 0',
    'Sasha 1',
    'Sasha 2',
    'Sasha 3',
    'Sasha 4',
];

console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

//arr1.push("Sasha 5") // Додаємо єлемент в кінець
//arr1.unshift("Sasha -1") // Додаємо єлемент в начало

//arr1[arr1.length] = 'Sasha 5'
//console.log(arr1);

//delete arr1[2]

//console.log(arr1);

console.log(arr1);

//arr1.splice(1, 1); // видаляємо

let arrOld = arr1.splice(1, 1); // зберігаємо видаленне

let arrReplace = arr1.splice(1, 1, 'Sveta 1'); // заміняємо або + вставка

console.log(arr1);
console.log(arrOld);


//Методи масивів

arr1.push('Push в кінець'); // Додаємо в кінець arr1[arr1.length] = 'Sasha 5'
arr1.unshift('Unshift на початок'); // Додаємо на початок

arr1.pop(); // Видаляє останій єлемент
arr1.shift() // Видалє перший єлемент

console.log(arr1);




// ОБеднуемо масиви

let a = ['a1', 'a2', 'a3', 'a4', 'a5']
let b = ['b1', 'b2', 'b3', 'b4', 'b5']

let res = [...a, ...b]
let res2 = a.concat(b)

console.log(res);
console.log(res2);


// Строки в масивах

let strArr = "Hello, Sasha, sveta"

let strArrRess = strArr.split(',')

console.log(strArrRess);


// Перетворюемо масив в строку
let strArr1 = ['Hello', 'Sasha', 'Sveta']

let strArrRess1 = strArr1.join(',')

console.log(strArrRess1);



//Пошук


let users = [
    {
        name: 'sasha 0',
        age: 20
    },
    {
        name: 'sasha 1',
        age: 16
    },
    {
        name: 'sasha 2',
        age: 33
    },
    {
        name: 'sasha 3',
        age: 55
    },
    {
        name: 'sasha 4',
        age: 16
    },
]

// Шукає перший
let finde1 = users.find((item, index) => {
    return item.age == 16
})


// Шукає індекс
let finde3 = users.findIndex((item, index) => {
    return item.age == 16
})
console.log(finde3);

// Шукає всі
let finde2 = users.filter((item, index) => {
    return item.age > 16
})

console.log(finde2);




