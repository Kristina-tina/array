"use strict"

//1. Об’явити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль//
/*let arr = ['JS', 2025, 'Freshcode'];

for (let i=0; i<arr.length; i++){
   console.log(arr[i]);
}*/

//2. Дан масив з цілими числами. За допомогою циклу вивести елементи масива, які є парними числами (завдання на методи масивів)://

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}*/

//3.  Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом //

/*let arr1 = [1, 2, 3];
let arr2 =[4, 5, 6];
let result = arr1.concat(arr2);
console.log(result);*/

//4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5,6]//
let arrRev =[6, 5, 4];
console.log(arrRev.reverse());

//5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6//
let arrPush =[1, 2, 3];
arrPush.push(4, 5, 6);
console.log(arrPush);

//6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3//
let array = [7, 8, 9];
array.unshift('1', '2', '3');
console.log(array);

//7. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль перший елемент та видаліть його.//

let arrayA = ['aaa', 'bbb', 'ccc'];
console.log(arrayA);
console.log(arrayA[0]);
delete arrayA[0];
console.log(arrayA[0]);
console.log(arrayA);

//8. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль та видаліть останній елемент//

let arrayC = ['aaa', 'bbb', 'ccc'];
arrayC.pop();
console.log(arrayC);


//9. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з другого по п'ятий//

let arrayNum = [9, 10, 11, 12, 13];
let newArray = arrayNum.slice(1, 5); 
console.log(newArray);


//10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись)//

let originalArray = [1, 2, 3, 4, 5];
originalArray.splice(1, 2);
console.log(originalArray);


//11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]

let originaltArray = [1, 2, 3, 4, 5];
let newtArray = originaltArray.slice(2); 
console.log(newtArray); 


//12. З масиву  [1, 2, 3, 4, 5] (не однією командою) зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello']

let isarray = [1, 2, 3, 4, 5];
let result = [];
result.push(isarray[0]);   
result.push('w', 'trtr'); 
result.push(isarray[1], isarray[2], isarray[3]); 
result.push('vvv', 'a', 'hello'); 

console.log(result);  

/*Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку

function countVovels(str, vovelsArray)

vovelsArray = [a, e, i, o, u, y]

'hello to you' //6

'lorem ipsum dolor sit amet' */

/*function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
  count++;
  }
  }
  return count;
  }*/

  function countVovels(str, vovelsArray = ['a', 'e', 'i', 'o', 'u', 'y']) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
      if (vovelsArray.includes(str[i])) 
        {
        count++;
      }
    }
    return count;
  }
  console.log(countVovels("hello to you")); 
  console.log(countVovels("lorem ipsum dolor sit amet")); 
  