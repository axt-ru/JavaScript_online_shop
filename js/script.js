class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();  
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'img/Notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, img: 'img/Mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, img: 'img/Keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 50, img: 'img/Gamepad.jpg'},
            {id: 5, title: 'Speakers', price: 100 },
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
    summPrices() {
        let summ = 0;
        for (let items of this.goods) {
            summ +=items.price;
        }
        const sumPrices = document.querySelector('.summ');
        // console.log(summ);
        sumPrices.insertAdjacentHTML("afterbegin", `Сумма всех товаров: ${summ}`);
    }

}

class ProductItem {
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = ((!product.img)||(product.img === "")) ? 'img/default.png' : product.img ; // Проверка на существование картинки у продукта 
    }
    render() {
            return `<div class="product-item">
                <img src = ${this.img}>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let listGoods = new ProductsList();
listGoods.summPrices();

// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

class Cart {
    constructor(product){
        
    }
    addProduct() {
    }

    editProducts() {
    }

    delProduct() {
    }

    render(){

    }
}
class itemCart {
    constructor(item){
    }
    
    itemModify(){

    }
    render(){
        
    }
}






// //Функция для формирования верстки каждого товара

// // 2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?

// const renderProduct = (obj, img = 'img/Gamepad.jpg') => {
//     if ((!obj.img)||(obj.img === "")) obj.img = img;          // Проверка на существование картинки у продукта 
//     return    `<div class="product-item">
//                 <img src = ${obj.img}>
//                 <h3>${obj.title}</h3>
//                 <p>${obj.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item));
//     console.log(productsList);
//     document.querySelector('.products').innerHTML = productsList.join("");  /* 3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
//     Ответ: 
//     Метод join() позволяет преобразовать и объединить все элементы массива в одно строковое значение. По умолчанию, элементы массива будут разделены запятой, это поведение можно изменить передав в качестве параметра метода значение, которое будет использовано в качестве разделителя. В данном случае разделителя нет - .join("").
// */
// };

// renderPage(products);