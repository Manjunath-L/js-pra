

// console.log(Math.floor(Math.random() * 9000 + 1000));


// let a = 8;
// let b = 7;
// let c = 5;

// if (a + b <= c || a + c <= b || b + c <= a) {
//     console.log("not possible");
// } else {
//     let s = (a + b + c) / 2;
//     console.log(Math.sqrt((s * (s - a) * (s - b) * (s - c))));
// }

// let r = 50;
// console.log(2 * Math.PI * r);


// console.log(Math.trunc(4.9));


// let isPrime = isPrimeFun(5);
// console.log(isPrime(5));

// function isPrimeFun(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;
//     for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// let n = 5
// let copy = n;
// let sq = n * n;
// let count = 0;

// while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
// }

// if (sq % Math.pow(10, count) === copy) {
//     console.log(
//         'Yes');
// } else {
//     console.log(
//         'No');
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// const prompt = require('prompt-sync')();

// let n = +prompt("Enetr a number: ");

// for (let i = 1; i <= n; i++) {
//     let car = 65;
//     for (let j = 1; j <= n - i + 1; j++) {
//         process.stdout.write(String.fromCharCode(car) + ' ');
//         car++
//     }
//     console.log();
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(" *");
//     }
//     console.log();
// }


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (i === j || i + j === n + 1) {
//             process.stdout.write("* ");
//         }
//         else process.stdout.write(" ");
//     }
//     console.log();
// }


// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n * 2; j++) {
//         if (i === j || i + j === n * 2) {
//             process.stdout.write("* ");
//         }
//         else process.stdout.write(" ");
//     }
//     console.log();
// }

// function calculateSumAndMean(arr, n) {
//     // Write your logic here
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let mean = n / sum;
//     return [sum, mean]
// }

// console.log(
//     calculateSumAndMean([10, 20, 30, 40], 4));

let arr = [28, 84, 74, 48, 6, 79, 79];

// let max = Math.max(arr[0], arr[1]);
// let Smax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > max) {
//         Smax = max;
//         max = arr[i]
//     } else if (arr[i] > Smax && max !== arr[i]) {
//         Smax = arr[i]
//     }
// }

// console.log(Smax);

// let i = 0, j = arr.length - 1;

// for (; i < j;) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++
//     j--
// }

// console.log(arr);

