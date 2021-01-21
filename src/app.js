/*<div id="nav-bar">
<div>
    <img id="ant-img" src="./imgs/clipart1382579.png">
</div>
<div id="right-nav">
    <button class="nav-button">About</button>
    <button class="nav-button">Menu</button>
    <button class="nav-button">Contact</button>
</div>
</div>
<div id="about">
<p id="about-header">About</p>
<p id="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, leo non maximus auctor, arcu metus pellentesque lorem, in auctor dui enim sed ex. Integer rhoncus massa vitae arcu tempor aliquam. Nam sagittis, lorem at elementum pulvinar, lacus sem ultrices risus, vel eleifend dolor libero eu orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed porta sapien. Nullam cursus hendrerit nulla ac viverra. Proin feugiat porttitor tortor, non venenatis erat rutrum dignissim. Aliquam erat volutpat. Duis imperdiet elementum nunc, quis accumsan ligula commodo eu. Nunc non commodo odio, et lobortis purus. Ut nisi elit, sagittis nec justo et, cursus rutrum ante. Suspendisse tristique enim ut ante finibus malesuada. Nunc at lorem urna. Sed nec dui mi. Integer sit amet libero id ex dignissim bibendum nec nec elit.</p>
</div>  */
const app = (() => {
const content = document.querySelector('#content');

const clear = () => {
    while(content.hasChildNodes) content.removeChild();
}
return {content, clear};
})();