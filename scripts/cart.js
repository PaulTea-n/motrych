// ==============cart====================
// Знаходимо необхідні елементи
const cartToggle = document.getElementById('cartToggle');
const cartContainer = document.querySelector('.cart_container');
const cartOverlay = document.querySelector('.cart_overlay');

// Додаємо обробник події для кліку на кнопку кошика
cartToggle.addEventListener('click', function(event) {
    event.preventDefault();
    cartContainer.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    document.body.classList.toggle('noscroll');
});

// Додаємо обробник події для кліку на кнопку закриття корзини
const cartCloseBtn = document.querySelector('.cart_top a');
cartCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    cartContainer.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.classList.remove('noscroll');
});
// -----------counter---------------------

window.addEventListener('click', function(event) {

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const cartQuantity = event.target.closest('.cart_quantity');
        counter = cartQuantity.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }

});

// -------------------add to cart------------
const cartList = document.querySelector('.cart_list');

window.addEventListener('click', function(event) {

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.product_card');

        const productInfo = {

            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.product_title').innerText,
            // aboutProduct: card.querySelector('.product_text').innerText,
            material: card.querySelector('.materials_text').innerText,
            price: card.querySelector('.product_prise').innerText,
            // counter: card.querySelector('[data-counter]').innerText,
        }

        const cartItemHTML = ` <li class="cart_item" data-id="${productInfo.id}">
                <div class="cart_left">
                    <h1 class="cart_product-title">${productInfo.title}</h1>
                    <p class="cart_product-inform">One Size | ${productInfo.material}</p>
                    <p class="cart_product-prise">${productInfo.price} UAN</p>

                    <div class="cart_quantity">
                        <a class="subtract_btn" data-action="minus">–</a>
                        <span data-counter>1</span>
                        <a class="add_btn" data-action="plus">+</a>
                    </div>

                    <p class="cart_product-tags">Availability: In stock <br> Ships in 5-7 days</p>
                </div>
                <div class="cart_right">
                    <a href="#"><img src="${productInfo.imgSrc}" alt="cart item img"></a>
                </div>
            </li>`;



        cartList.insertAdjacentHTML('beforeend', cartItemHTML);


    }

});























// // ------------------------

// // Отримуємо необхідні елементи з DOM
// const cartQuantity = document.querySelector('.cart_quantity span');
// const cartPrice = document.querySelector('.cart_product-prise');

// // Початкова кількість і ціна товару
// let quantity = 1;
// const initialPrice = 5000;
// updateCartTotal();

// // Додаємо обробники подій для збільшення та зменшення кількості товару
// const subtractBtn = document.querySelector('.subtract_btn');
// const addBtn = document.querySelector('.add_btn');

// subtractBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (quantity > 1) {
//         quantity--;
//         updateCartTotal();
//     }
// });

// addBtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     quantity++;
//     updateCartTotal();
// });

// // Функція для оновлення загальної вартості кошика
// function updateCartTotal() {
//     const totalPrice = initialPrice * quantity;
//     cartQuantity.textContent = quantity;
//     cartPrice.textContent = `${totalPrice} UAN`;
// }
// // ---------------------select size--------------------
// // Отримуємо всі елементи списку розмірів
// const sizeItems = document.querySelectorAll('.info_text.size li');

// // Отримуємо кнопку "Додати в кошик"
// const addToCartBtn = document.querySelector('.addToCart');

// let selectedSize = ''; // Розмір, який буде вибрано

// // Додаємо обробник події для кожного розміру
// sizeItems.forEach(item => {
//     item.addEventListener('click', () => {
//         // Зняти виділення з усіх розмірів
//         sizeItems.forEach(item => item.classList.remove('selected'));

//         // Виділити обраний розмір
//         item.classList.add('selected');

//         // Зберегти обраний розмір
//         selectedSize = item.dataset.size;
//     });
// });

// // Додаємо обробник події для кнопки "Додати в кошик"
// addToCartBtn.addEventListener('click', () => {
//     if (selectedSize) {
//         // Додати товар із обраним розміром в кошик
//         addToCart(selectedSize);
//         alert(`Added item with size ${selectedSize} to cart!`);
//     } else {
//         alert('Please select a size before adding to cart.');
//     }
// });

// // Функція для додавання товару в кошик
// function addToCart(size) {
//     // Тут ви можете написати логіку для додавання товару в кошик
// }