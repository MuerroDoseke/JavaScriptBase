    /* 1. Дан код:

    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2
    d = b++; alert(d);           // 1
    c = (2+ ++a); alert(c);      // 5
    d = (2+ b++); alert(d);      // 4
    alert(a);                    // 3
    alert(b);                    // 3

    Почему код даёт именно такие результаты?

    c = 1 + 1  // значение var a = 2, как и var c = 2, префиксный инкремент (значение операнда увеличивается на единицу) 
    d = 1 + 0  // значение var b = 2, var d = 1, постфиксный инкремент (значение операнда возвращается, а затем увеличивается на единицу)
    с = (2 + 3) // т.к. var a = 2, увеличиваем операнд на единицу, получаем var a = 3. 
    d = (2 + 2) // var b = 2, возвращаем операнд, получаем var d = 4, значение операнда увеличивается на единицу: var b = 3.

    2. Чему будет равен x в примере ниже?

    var a = 2;
    var x = 1 + (a *= 2); // *= оператор присваивания с умножением. 1 + (a = a * 2) = 1 + (a = 2 * 2) = 1 + (a = 4) = 1 + 4 = 5.

    3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    - если a и b положительные, вывести их разность;
    - если а и b отрицательные, вывести их произведение;
    - если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */


    var a = Math.floor(Math.random() * 11 - 5);
    var b = Math.floor(Math.random() * 11 - 5); 

    if (a >= 0 && b >= 0) { 
        alert(a - b);
    }   
    else if (a < 0 && b < 0) {
        alert(a * b);
    }   
    else if (a < 0 && b >= 0) {
        alert(a + b);
    }   
    else if (a >= 0 && b < 0) {
        alert(a + b);
    }

    // 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

    var a = Math.floor(Math.random() * 16);
    switch (a) {
        case 0:
			alert (0);
        case 1:
			alert (1);
		case 2:
			alert (2);
		case 3:
			alert (3);
		case 4:
			alert (4);
		case 5:
			alert (5);
		case 6:
			alert (6);
		case 7:
			alert (7);
		case 8:
			alert (8);
		case 9:
			alert (9);
		case 10:
			alert (10);
		case 11:
			alert (11);
		case 12:
			alert (12);
		case 13:
			alert (13);
		case 14:
			alert (14);
		case 15:
			alert (15);
    }

    // 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 

    var a = Math.floor(Math.random() * 11);
    var b = Math.floor(Math.random() * 11);

    function plus(a, b) {
        return a + b;
    }

    function minus(a, b) {
        return a - b;
    }

    function division (a, b) {
        return a / b;
    }

    function multiplication (a, b) {
        return a + b;
    }


    // 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

    var arg1 = Math.floor(Math.random() * 11);
    var arg2 = Math.floor(Math.random() * 11);
    
    function mathOperation(arg1, arg2, operation) {
        switch(operation) {
                case 'plus':
                    return arg1 + arg2;
                break;

                case 'minus':
                    return arg1 - arg2;
                break;

                case 'division':
                    return arg1 / arg2;
                break;

                case 'multiplication':
                    return arg1 * arg2;
                break;

                default:
                    return 'Некорректно введенная опция!';
           }
}

    /* 7. *Сравнить null и 0. Попробуйте объяснить результат. 

    Потому что нестрогое равенство (==) и сравнения (< >= <= >) работают по-разному. Если сравнить null и 0, то получим:

    null < 0 // false
    null > 0 // false
    null <= 0 // true
    null >= 0 // true
    null == 0 // false 

    При попытке сравнения null преобразуется в 0. Но, почему null == 0 выдает значения false? Дело в том, что undefined равен null, также они не равны ничему другому, в том числе эти значения ни к чему не приводятся. 

    8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.   */

    var val = Math.floor(Math.random() * 11);
    var pow = Math.floor(Math.random() * 11);

    function power(val, pow) {
        if (pow == 1) {
            return val;;
          } else {
            return val * power(val, pow - 1);
        }
    }
