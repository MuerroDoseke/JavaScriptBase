// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. 

let numbers = 2;
while (numbers < 100) {
    let check = true;
    for (let i = 2; i < numbers; i++){
        if (numbers%i === 0) {
            check = false;
            break;
        }
    }
}
    if (check) console.log(numbers);
    numbers++;         


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

const cart = [
    {
        title: "product1",
        price: 531,
        count: 2
    },
    {
        title: "product2",
        price: 314,
        count: 3
    },
    {
        title: "product3",
        price: 351,
        count: 2
    }
];
function countBasketPrice() {
    let sum = 0;
    for (i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].count;
    }
    console.log("Сумма в корзине: " + sum);
    return sum
}

sum = countBasketPrice();

// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто} 

    for (i = 0; i < 10; i++) {/*console.log(i)*/}
    
// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

    let mark = 'x';
    for (let i = 0; i < 20; i++){
    console.log(mark);
    mark += 'x';
    }