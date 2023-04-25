const toggleButton = document.getElementById('toggleButton')
const MENU = document.getElementById('MENU')

const logo = document.getElementById('logo')
const text = document.getElementById('text')
const menuline = document.getElementById('menu-line')
const menuline2 = document.getElementById('menu-line2')
const menuline3 = document.getElementById('menu-line3')
const imgremove = document.getElementById('img-remove')

toggleButton.addEventListener('click', () => {
    MENU.classList.toggle('active');
})

toggleButton.addEventListener('click', () => {
    logo.classList.toggle('non-active');
    text.classList.toggle('non-active');
    // toggleButton.classList.toggle('non-active');
    menuline.classList.toggle('change_menuline');
    menuline2.classList.toggle('change_menuline2');
    menuline3.classList.toggle('change_menuline3');
    // imgremove.classList.toggle('active');

})

// toggleButton.addEventListener('click', () => {
//     imgremove.classList.toggle('active');
// })

// toggleButton.addEventListener('click', () => {
//     logo.classList.toggle('non-active');
//     text.classList.toggle('non-active');
//     toggleButton.classList.toggle('non-active');
//     remove.classList.toggle('active-remove');
// })