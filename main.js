let moon = document.getElementById('moon');
let mountain_behind = document.getElementById('mountain-behind');
let star = document.getElementById('star');
let button = document.getElementById('button')
let moon_light = document.querySelector('.moon-light')
window.onscroll=function(){
    let value =scrollY
    moon.style.top=value*1.5 + 'px';
    mountain_behind.style.top=value*0.3 +'px';
    star.style.left=value*0.2 + 'px';
    star.style.top=-value*0.2 + 'px';
    button.style.top=value*0.9 +'px';
    moon_light.style.left = -value*1 + 'px';
    moon_light.style.top = -value*0.1 + 'px';
}