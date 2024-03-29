/*
1. Спочатку відбувається приведення чиcел в тип даних String
2. Потім відбувається конкатенація рядків
Реультатом буде рядок: "number33"
*/
'number' + 3 + 3

/*
1. Спочатку відбувається приведення null  втип даних Number, відповідно це буде 0
2. Потім відбувається операція додавання 0 + 3
Результатом буде число: 3
*/
null + 3

/*
1. Спочатку число 5 приводиться в Booleanб це буде true
2. Оскільки у нас стоїть оператор логічно І, то йдемо далі
3. Далі приводиться рядок "qwerty" у Boolean, це теж буде true
Оскільки обидві змінні true то резульатом буде остання: "qwerty"
*/
5 && "qwerty"

/*
1. Спочатку "40" і "2" приводяться в Number
2. Потім відбувається операція додавання чисел 40 + 2б результат буде 42
3. Потім 42 приводиться в String
4. І відбувається конкатенація рядків
Hезультатом буде: "42hillel"
*/
+'40' + +'2' + "hillel";

/*
1. Спочатку відбувається приведення "10" в Number
2. Потім відбувається операція віднімання 10 - 5, результатом буде 5
3. Потім відбувається порівння чисел 5 і 6
Вони не рівні тому результатом буде false
*/
'10' - 5 === 6;

/*
1. Спочатку значення true і false приводяться в Number. в результаті отримаємо 1 і 0 відповідно
2. Потів відбувається операція додавання 1 + 0
В результаті отримаємо 1
*/
true + false

/*
1. Спочатку відбувається приведення рядку в Number, результатом буде NaN
2. Далі відбувається операція віднімання NaN - 4
В результаті отримаємо NaN
*/
'4px' - 3

/*
1. відбувається приведення рядку в Number, результатом буде число 4
2. Далі відбувається операція віднімання 4 - 3
Результатом буде 1
*/
'4' - 3

/*
1. Спочатку відбувається операція піднесення до степеня 3**0, результатом буде 1
2. Далі відбувається приведення числа 1 в рядок
3. Потім відбувається конкатенація рядків
Результат "61"
*/
'6' + 3 ** 0;

/*
1. Спочатку відбувається приведення рядка в Number, в результаті чого отримаємо число 6
2. Далі відбувається операція ділення 12 / 6
Результат: 2
*/
12 / '6'

/*
1. Спочатку відбувається порівняння чисел 5 і 6 на рівність, в результаті маємо false
2. Потім false перетворюється в рядок "false"
3. В кінці відбувається конкатенація рядків
Результат: "10false"
*/
'10' + (5 === 6);

/*
1. Відбувається операція порівняння null і ''
Результатом буде false, оскільки null рівний тільеи undefined
*/
null == ''

/*
1. Спочатку відбувається операція ділення 9/3, результатом буде 3
2. Відбувається операція піденесення до степеня
Результатом буде 27
*/
3 ** (9 / 3);

/*
1. Відбувається приведення рядків у Boolean, !!'false' дасть true і !!'true' дасть true, оскільки обидва рядки містять символи у собі
2. Відбувається порівняння
Результатом буде true адже обивда вирази дадуть true
*/
!!'false' == !!'true'

/*
1. Спочатку відбувається операція логічного І, в результаті отримаємо 1, адже обидва вирази truthy
2. Відбувається операція логічного АБО
Резульатом буде 1, адже 0 - false statement, а 1 - truthy
*/
0 || '0' && 1

/*
1. Спочатку відбвується приведення null в Nuumber, результатом буде 0
2. Відбувається порівннян в дужках, 0 == false, що дає true
3. Далі результат порівняння - true приводиться в Number, що дає нам 1
4. Відбувається порівняння 1 < 1
Результатом буде false
*/
(+null == false) < 1;

/*
1. Спочатку відбувається операція логічного І, отримуємо false
2. Відбувається операція логічного АБО
Результатом буде true
*/
false && true || true

/*
1. Спочатку відбувається операція логічного АБО, результатом буде true
2. Далі відбувається операція логічного І
Результатом буде false
*/
false && (false || true);

/*
1. Спочатку відбвується приведення null в Nuumber, результатом буде 0
2. Відбувається порівннян в дужках, 0 == false, що дає true
3. Відбувається операція піднесення до степеня, в результаті буде 1
4. Далі результат порівняння - true приводиться в Number, що дає нам 1
5. Відбувається порівняння 1 < 1
Результатом буде false
*/
(+null == false) < 1 ** 5;