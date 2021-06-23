const nav = document.getElementById('nav')
nav.addEventListener('click', (d) => {
    nav.querySelector('ul').classList.toggle('active');
})