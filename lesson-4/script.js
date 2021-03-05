// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


var numObj = {
  number: +prompt("Введите число от 0 до 999"), 
  units: 0,
  tens: 0,
  hundreds: 0,
}
  if (numObj.number <= 9){
  numObj.units = numObj.number;
} if (numObj.number <= 999){
  numObj.units = Math.floor(numObj.number % 10);
  numObj.tens = Math.floor(numObj.number / 10 % 10);
  numObj.hundreds = Math.floor(numObj.number / 100 % 10);
} else {
    numObj.number = 0;
    console.log('Введите число от 0 до 999');
}
console.log(numObj);


// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const bascet = { 
  goods: [
    {
      product: "Ноутбук",
      price: 55000,
      quantity: 1,
    },
    {
      product: "DVD-RW",
      price: 100,
      quantity: 10,
    }
  ],
  countBasketPrice() {
    return this.goods.reduce ((TotalPrice, cartItem) => TotalPrice + cartItem.price * cartItem.quantity, 0);
  }
};

  console.log(bascet.countBasketPrice());