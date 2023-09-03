//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

// let currentDate = new Date();
// console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

// const d = new Date();
// const currentYear = d.getFullYear();
// console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

// const d = new Date();
// const currentMonth = d.getMonth();
// console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

// const d = new Date();
// const currentDay = d.getDate();
// console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

// const birthday = new Date("December 16, 2023 00:00");
// console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

// const futureDate = new Date("November 21, 2023");
// console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

// const futureDate = new Date("September 21, 2023");
// const currentDate = new Date();
// const differenceDate = futureDate - currentDate;

// const msInDay = 24*60*60*1000;
// const res = Math.floor(differenceDate/msInDay);

// console.log(res);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

// const pastDate = new Date ("2023-08-25");
// console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

// const pastDate = new Date ("2023-08-25");
// const currentDate = new Date();

// const differenceDate = currentDate - pastDate;

// const msInDay = 24*60*60*1000;

// const res = Math.floor(differenceDate/msInDay);

// console.log(res);



//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

// const nextWeek = new Date("2023-09-08");
// console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek

// const nextWeek = new Date("2023-09-08");
// const res = nextWeek.getDay();

// console.log(res);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

// const d = new Date();
// const dYear = d.getFullYear();
// const futureYear = dYear + 5;

// console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

// const d = new Date();
// const dYear = d.getFullYear();
// const futureYear = dYear + 5;


// let futureDateInFutureYear = new Date("2024-12-16");
// futureDateInFutureYear.setFullYear(futureYear);
// console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

// const d = new Date();
// const dYear = d.getFullYear();
// const futureYear = dYear + 5;


// let futureDateInFutureYear = new Date("2024-12-16");
// futureDateInFutureYear.setFullYear(futureYear);


// console.log(futureYear - new Date().getFullYear());

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
// const strDate = '2023-06-15T08:30:00.000Z';
// const date = Date.parse(strDate);
// const newDate = new Date(date);

// console.log(newDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

// const strDate = '2023-06-15T08:30:00.000Z';
// const date = Date.parse(strDate);

// console.log(date);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
// const date = '2023/06/15';
// const wrongDate = Date.parse(date);

// if (isNaN(wrongDate)) {
//     console.log('Неправильный формат даты');
// }else{
//     console.log('Правильный формат даты');
// }



//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
// const number = 231;

// if (number < 0){
//     console.log('Отрицательное число');
// }else {
//     console.log('Положительное число');
// }

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

// const number = 231;

// if (number%2 === 0) {
//     console.log('чётное число');
// }else{
//     console.log('нечётное число');
// }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

// const number = 231;

// if (number%3 === 0) {
//     console.log('Число кратно трём');
// }else{
//     console.log('Число не крастно трём');
// }

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.

// const number = 231;

// if (number > 0 && number < 10) {
//     console.log('однозначное число');
// } else {
//     console.log(' число не однозначное');
// }

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

// const number = 231;

// if ( number>= 10 && number < 100) {
//     console.log('число двузначное');
// } else {
//     console.log('число не двузначное');
// }

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

// const number = 231;

// if (number => 0) {
//     console.log('число положительное или равно нулю');
// } else {
//     console.log('отрицательное число');
// }

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

// const number = 231;

// if (number%5 === 0 || number%7 ===0) {
//     console.log('число кратно пяти или семи');
// }
// else{
//     console.log('число не кратно 5 или 7');
// }

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

// const number = 231;

// if(number <= 0) {
//     console.log('число отрицательное или равно нулю');
// } else {
//     console.log('положительное число');
// }

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

// const number = 231;

// if( number >= 100 && number > 0) {
//     console.log('число трёхначное положительное');
// } else {
//     console.log(' число не трёхзначное или отрицательное');
// }

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

// const value = prompt(" Введите число от 1 до 7");

// switch(value) {
//     case '1' :
//         console.log('Понедельник');
//         break;
//     case '2':
//         console.log('Вторник');
//         break;
//     case '3':
//         console.log('Среда');
//         break;
//     case '4':
//         console.log('Четверг');
//         break;
//     case '5':
//         console.log('Пятница');
//         break;
//     case '6':
//         console.log('Суббота');
//         break;
//     case '7':
//         console.log('Воскресенье');
//         break;
// }

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
// let direction = 'W';
// let fullName;

// switch (direction) {
//     case 'N':
//         fullName = 'Север';
//         break;
//     case 'S':
//         fullName = 'Юг';
//         break;
//     case 'E':
//         fullName = 'Восток';
//         break;
//     case 'W':
//         fullName = 'Запад';
//         break;
// }

// console.log(`${direction} - "${fullName}`);
