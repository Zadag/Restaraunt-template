import { app } from './app'
import { about } from './about'
import { menu } from './menu'
import { contact } from './contact'

const content = document.querySelector('#content');

app.makeNav();
about();

const changeTab = (e) => {
    app.clear();
    app.makeNav();
    listeners();
    switch(e.target.textContent) {
        case 'About':
            about();
            break;
        case 'Menu':
            menu();
            break;
        case 'Contact':
            contact();
            break;
    }
}

const listeners = () => {
    const btns = document.querySelectorAll('button');

    btns.forEach(button => {
        button.addEventListener('click', changeTab);
    })    
}

listeners();






