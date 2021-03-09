var product = [
    {
      title: 'Банан',
      count: 1,
      cost: '50'
    },
    {
      title: 'Шпроты',
      count: 1,
      cost: '80'
    },
    {
      title: 'Кабачки',
      count: 5,
      cost: '30'
    }
  ]
  
  var cart = document.getElementById('cart');
  var catalog = document.getElementById('catalog');
  var resSum = 0;
  var resCount = 0;
  var resName = ' ';
  
  
  function fillingCart(product) {
    product.forEach(el => resSum += el.count * el.cost);
    product.forEach(el => resCount += el.count);
    product.forEach(el => resName += el.title + ' ');
    console.log(resCount)
    if (resSum === 0 && resCount === 0) {
      cart.textContent = "Корзина пуста"
    }
    cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`
    catalog.textContent = `Каталог: ${resName} `
  
  }
  
  fillingCart(product);