const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-short-icon');
const menuToggleItems = document.querySelector('.menu-short-options');

// ----- Show/hide das opções do menu de atalho ao click ----- //
menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    menuToggleItems.classList.toggle('menu-short-show');
})

body.addEventListener('click', function() {
    menuToggleItems.classList.add('menu-short-show');
})

