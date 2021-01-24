const menu = () => {
    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';
    content.appendChild(menuDiv);

    const makeMenuItem = (img, description) => {
        const menuItem = document.createElement('div');
        const menuImg = document.createElement('img');
        const menuP = document.createElement('p');

        menuItem.classList.add('menu-item');
        menuImg.classList.add('menu-img');
        menuP.classList.add('menu-description');

        menuImg.src = img;
        menuP.textContent = description;

        menuDiv.appendChild(menuItem);
        menuItem.appendChild(menuImg);
        menuItem.appendChild(menuP);
    }
    makeMenuItem('imgs/clipart1630349.png', 'Leaf');
    makeMenuItem('imgs/clipart24466.png', 'Watermelon');
    makeMenuItem('imgs/clipart717782.png', 'Egg');
    makeMenuItem('imgs/clipart48267.png', 'Dog');
    makeMenuItem('imgs/clipart1859290.png', 'Fries');
    makeMenuItem('imgs/clipart767518.png', 'Candy');
    
}

export { menu };