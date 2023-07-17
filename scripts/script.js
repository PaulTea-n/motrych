// ============header===============

document.addEventListener('DOMContentLoaded', function() {
    const jewelleryMenuItem = document.querySelector('.menu_item:first-child');
    const categoryMenu = document.querySelector('.category_menu');
    const earringsItemRegular = document.querySelector('.category_menu .earrings_item');
    const earringsListRegular = document.querySelector('.category_menu .earrings_list');
    const earringsItemMobile = document.querySelector('.mobile_menu .earrings_item');
    const earringsListMobile = document.querySelector('.mobile_menu .earrings_list');
    const necklacesItemRegular = document.querySelector('.category_menu .necklages_item');
    const necklacesListRegular = document.querySelector('.category_menu .necklages_list');
    const necklacesItemMobile = document.querySelector('.mobile_menu .necklages_item');
    const necklacesListMobile = document.querySelector('.mobile_menu .necklages_list');

    function disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }

    // Функція, яка дозволяє прокручування сторінки
    function enableBodyScroll() {
        document.body.style.overflow = '';
    }

    function openCategoryMenu() {
        jewelleryMenuItem.classList.toggle('active');
        categoryMenu.classList.toggle('show');
        if (categoryMenu.classList.contains('show')) {
            disableBodyScroll(); // Забороняємо прокручування сторінки
        } else {
            enableBodyScroll(); // Дозволяємо прокручування сторінки
        }
    }

    jewelleryMenuItem.addEventListener('click', openCategoryMenu);

    earringsItemRegular.addEventListener('click', function(event) {
        event.preventDefault();
        earringsListRegular.classList.toggle('show');
        earringsItemRegular.classList.toggle('active');
    });
    earringsItemMobile.addEventListener('click', function(event) {
        event.preventDefault();
        earringsListMobile.classList.toggle('show');
        earringsItemMobile.classList.toggle('active');
    });

    necklacesItemRegular.addEventListener('click', function(event) {
        event.preventDefault();
        necklacesListRegular.classList.toggle('show');
        necklacesItemRegular.classList.toggle('active');
    });
    necklacesItemMobile.addEventListener('click', function(event) {
        event.preventDefault();
        necklacesListMobile.classList.toggle('show');
        necklacesItemMobile.classList.toggle('active');
    });

});

// ---------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile_menu");



function disableBodyScroll() {
    document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
    document.body.style.overflow = '';
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains('active')) {
        disableBodyScroll(); // Забороняємо прокручування сторінки
    } else {
        enableBodyScroll(); // Дозволяємо прокручування сторінки
    }


});








document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        console.log("click3");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);


// ----------------------

document.addEventListener('DOMContentLoaded', function() {
    const jewelleryMenuItemMob = document.querySelector('.menu_item-mob:first-child');
    const categoryMenuMob = document.querySelector('.mobile_menu-right');



    function openCategoryMenu() {
        jewelleryMenuItemMob.classList.toggle('active');
        categoryMenuMob.classList.toggle('show');
    }

    jewelleryMenuItemMob.addEventListener('click', openCategoryMenu);
});
// ------------photo menu---------------

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu_img-item');
    const imageLink = document.getElementById('image_link');
    const menuImage = document.getElementById('menu_image');

    let currentImage = './img/main_menu-img/img7.jpg';
    let currentLink = 'about.html';

    // Завантажуємо стартове зображення
    menuImage.setAttribute('src', currentImage);
    imageLink.setAttribute('href', currentLink);

    // Змінюємо зображення при наведенні на пункт меню
    menuItems.forEach(item => {
        const imageUrl = item.getAttribute('data-image');
        const itemLink = item.querySelector('a').getAttribute('href');

        item.addEventListener('mouseover', function() {
            currentImage = imageUrl;
            currentLink = itemLink;

            menuImage.setAttribute('src', imageUrl);
            imageLink.setAttribute('href', itemLink);
        });

        item.addEventListener('mouseout', function() {
            // Не змінюємо зображення, коли курсор з пункту меню виходить
            menuImage.setAttribute('src', currentImage);
            imageLink.setAttribute('href', currentLink);
        });
    });
});
// =====================language================

document.addEventListener('DOMContentLoaded', function() {
    // Функція для зміни мови
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-text-en], [data-text-uk]');
        elements.forEach(element => {
            const textEN = element.getAttribute('data-text-en');
            const textUK = element.getAttribute('data-text-uk');

            if (lang === 'en') {
                element.innerText = textEN;
            } else if (lang === 'uk') {
                element.innerText = textUK;
            }
        });
    }

    // Отримуємо кнопку мовного перемикача
    const languageSwitcher = document.getElementById('languageSwitcher');

    // Додаємо обробник події на кнопку мовного перемикача
    languageSwitcher.addEventListener('click', function() {
        const currentLanguage = this.innerText;
        if (currentLanguage === 'EN') {
            this.innerText = 'UA';
            changeLanguage('uk');
        } else {
            this.innerText = 'EN';
            changeLanguage('en');
        }
    });
});