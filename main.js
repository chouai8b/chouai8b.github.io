let gate1 =document.getElementById('gate-left');
let gate2 =document.getElementById('gate-right');
let tree1 = document.getElementById('tree-left');
let tree2 = document.getElementById('tree-right');
let word = document.querySelector('.name');
window.onscroll = function(){
    let value =scrollY;
    tree1.style.left= -(value*0.9)+'px';
    tree2.style.left= (value*0.9)+'px';
    gate1.style.left= value*0.5 +'px';
    gate2.style.left= -value*0.5+'px';
    gate1.style.position= 'fixed';
    gate2.style.position= 'fixed';
    word.style.top = value*1.5 + 'px';
}