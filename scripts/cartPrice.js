// function cartPrice() {
//     const cartItems = document.querySelectorAll('.cart_item');

//     const totalPriceEl = document.querySelector('.total_price');

//     let priceTotal = 0;

//     cartItems.forEach(function(item) {
//         const amountEl = item.querySelector('[data-counter]');
//         const priceEl = item.querySelector('.cart_product-prise');
//         const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
//         priceTotal += currentPrice;
//     })

//     // ціна на сторінці
//     totalPriceEl.innerText = priceTotal;

// };

function cartPrice() {
    const cartItems = document.querySelectorAll('.cart_item');

    const totalPriceEl = document.querySelector('.total_price');
    const cartTotalQuantity = document.querySelector('.cart_title-quantity');

    let priceTotal = 0;
    let totalQuantity = 0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.cart_product-prise');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += currentPrice;

        totalQuantity += parseInt(amountEl.innerText);
    });

    // ціна на сторінці
    totalPriceEl.innerText = priceTotal;
    cartTotalQuantity.innerText = `(${totalQuantity})`;
}