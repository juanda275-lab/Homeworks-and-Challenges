// Ejemplos de funciones con arrays en JavaScript

// 1. push()
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("push:", fruits); // ["apple", "banana", "orange"]

// 2. pop()
fruits.pop();
console.log("pop:", fruits); // ["apple", "banana"]

// 3. shift()
fruits.shift();
console.log("shift:", fruits); // ["banana"]

// 4. unshift()
fruits.unshift("apple");
console.log("unshift:", fruits); // ["apple", "banana"]

// 5. map()
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log("map:", doubled); // [2, 4, 6, 8]

// 6. filter()
let evens = numbers.filter(num => num % 2 === 0);
console.log("filter:", evens); // [2, 4]

// 7. reduce()
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce:", sum); // 10

// 8. forEach()
let fruitsForEach = ["apple", "banana", "orange"];
fruitsForEach.forEach(fruit => console.log("forEach:", fruit));
// Output:
// apple
// banana
// orange

// 9. some()
let hasEven = numbers.some(num => num % 2 === 0);
console.log("some:", hasEven); // true

// 10. every()
let allEven = numbers.every(num => num % 2 === 0);
console.log("every:", allEven); // false

// 11. find()
let firstEven = numbers.find(num => num % 2 === 0);
console.log("find:", firstEven); // 2

// 12. findIndex()
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("findIndex:", firstEvenIndex); // 1

// 13. concat()
let moreFruits = ["orange", "mango"];
let allFruits = fruits.concat(moreFruits);
console.log("concat:", allFruits); // ["apple", "banana", "orange", "mango"]

// 14. includes()
let hasBanana = fruits.includes("banana");
console.log("includes:", hasBanana); // true

// 15. indexOf()
let index = fruits.indexOf("banana");
console.log("indexOf:", index); // 1

// 16. join()
let fruitString = fruits.join(", ");
console.log("join:", fruitString); // "apple, banana"

// 17. slice()
let citrus = fruits.slice(1, 2);
console.log("slice:", citrus); // ["banana"]

// 18. splice()
let fruitsSplice = ["apple", "banana", "orange"];
fruitsSplice.splice(1, 1, "mango", "grape"); // Elimina "banana" y añade "mango" y "grape"
console.log("splice:", fruitsSplice); // ["apple", "mango", "grape", "orange"]

// 19. reverse()
fruits.reverse();
console.log("reverse:", fruits); // ["banana", "apple"]

// 20. sort()
let numbersSort = [4, 2, 3, 1];
numbersSort.sort();
console.log("sort:", numbersSort); // [1, 2, 3, 4]

// 21. fill()
let numbersFill = [1, 2, 3, 4];
numbersFill.fill(0, 1, 3);
console.log("fill:", numbersFill); // [1, 0, 0, 4]

// 22. flat()
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log("flat:", flatArray); // [1, 2, 3, 4, 5, 6]

// 23. flatMap()
let flatMappedArray = numbers.flatMap(num => [num, num * 2]);
console.log("flatMap:", flatMappedArray); // [1, 2, 2, 4, 3, 6, 4, 8]

// 24. from()
let str = "12345";
let digits = Array.from(str);
console.log("from:", digits); // ["1", "2", "3", "4", "5"]
