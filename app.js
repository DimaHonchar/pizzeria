const pizza = document.querySelector('#pizza');
const menu = document.querySelector('#menu');

pizza.addEventListener('click', () => {
    menu.classList.toggle('disp');
});
