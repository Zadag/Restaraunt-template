(()=>{"use strict";const t=()=>{const t=document.createElement("div");t.id="nav-bar",content.appendChild(t);const e=document.createElement("div");e.id="left-nav",t.appendChild(e);const n=document.createElement("img");n.src="imgs/clipart1382579.png",n.id="ant-img",e.appendChild(n);const d=document.createElement("div");d.id="right-nav",t.appendChild(d);const c=document.createElement("button");c.classList.add("nav-button"),c.textContent="About",d.appendChild(c);const a=document.createElement("button");a.classList.add("nav-button"),a.textContent="Menu",d.appendChild(a);const i=document.createElement("button");i.classList.add("nav-button"),i.textContent="Contact",d.appendChild(i)};document.querySelector("#content"),t(),(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.id="menu",t.appendChild(e);const n=(t,n)=>{const d=document.createElement("div"),c=document.createElement("img"),a=document.createElement("p");d.classList.add("menu-item"),c.classList.add("menu-img"),a.classList.add("menu-description"),c.src=t,a.textContent=n,e.appendChild(d),d.appendChild(c),d.appendChild(a)};n("imgs/clipart1630349.png","Leaf"),n("imgs/clipart24466.png","Watermelon"),n("imgs/clipart717782.png","Egg"),n("imgs/clipart48267.png","Dog"),n("imgs/clipart1859290.png","Fries"),n("imgs/clipart767518.png","Candy")})()})();