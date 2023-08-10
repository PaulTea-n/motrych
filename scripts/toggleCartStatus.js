// -----------------cart status---------------
// function toggleCartStatus() {

//     const cartList = document.querySelector('.cart_list');
//     const cartEmpty = document.querySelector('.cart_title-quantity');
//     const btnCheckout = document.querySelector('.cart_btn-checkout');


//     if (cartList.children.length > 0) {
//         cartEmpty.classList.remove('none');
//         btnCheckout.classList.remove('none');

//     } else {
//         cartEmpty.classList.add('none');
//         btnCheckout.classList.add('none');
//     }

// }
function toggleCartStatus() {
    const cartList = document.querySelector('.cart_list');
    const cartTotalQuantity = document.querySelector('.cart_title-quantity');
    const btnCheckout = document.querySelector('.cart_btn-checkout');

    let totalQuantity = 0;

    if (cartList.children.length > 0) {
        cartTotalQuantity.classList.remove('none');
        btnCheckout.classList.remove('none');

        const counters = cartList.querySelectorAll('.cart_quantity [data-counter]');
        counters.forEach(counter => {
            const quantity = parseInt(counter.innerText);
            totalQuantity += quantity;
        });

    } else {
        cartTotalQuantity.classList.add('none');
        btnCheckout.classList.add('none');
    }

    cartTotalQuantity.innerText = `(${totalQuantity})`;
}