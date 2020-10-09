function modal() {
    let modalBtn = document.querySelector('.covid');
    modalBtn.addEventListener('click', function(event) {
        let modal = document.querySelector('.modal');
        modal.style.display = 'block';
    });
}
modal();

function outSideClick() {
    let modal = document.querySelector('.modal');
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}
outSideClick();

let open = document.querySelector('#open');
let close = document.querySelector('#close');


function toggleNav() {
    const open = document.querySelector('#open');
    const close = document.querySelector('#close');
    const nav = document.querySelector('nav');

    open.addEventListener('click', () => {
        nav.style.display = 'block';
        close.style.display = 'block';
        open.style.display = 'none';
    })

    close.addEventListener('click', () => {
        nav.style.display = 'none';
        close.style.display = 'none';
        open.style.display = 'block';
    })
}
toggleNav();