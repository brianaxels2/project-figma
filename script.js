const btnMobile = document.querySelector('#btn-mobile');

const Menu = () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', Menu)