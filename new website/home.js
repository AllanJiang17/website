let slider = document.querySelector('.slider');
let slideContainer = document.querySelector('.slider-container');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - slideContainer.offsetLeft;
});

window.addEventListener('mouseup', ()=>{
    pressed = false;
});

slider.addEventListener('mousemove', (e)=>{
    if(pressed) {
        e.preventDefault();
        x = e.offsetX
        slideContainer.style.left = `${x - startx}px`;

       // checkBoundary();
    }
});

function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = slideContainer.getBoundingClientRect();
    
    if(parseInt(slideContainer.style.left) > 0){
        slideContainer.style.left = '0px';
    }else if(inner.right < outer.right){
        slideContainer.style.left = `-${inner.width - outer.width}px`;
    }
}