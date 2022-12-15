const menuToggle = document.querySelector('.menu-short-icon');
const menuToggleItems = document.querySelector('.menu-short-options');

// ----- Show/hide das opções do menu de atalho ao click ----- //
menuToggle.addEventListener('click', function() {
    menuToggleItems.classList.toggle('menu-short-show');
})
