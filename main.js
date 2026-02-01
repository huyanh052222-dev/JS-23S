const onmouse = document.querySelector('.hover-me');
const scroll = document.querySelector('.scroll'); 
const real = document.querySelector('.slider');
const fake = document.querySelector('.slider-meme');
const contentHide = document.querySelector('.content-hide');
const content = document.querySelector('.content');

function startEffect(e) {
    if(e.type === 'touchstart') e.preventDefault(); 
    
    console.log('Effect Start');

    contentHide.style.opacity = '1';
    
    real.style.display = 'none';
    fake.style.display = 'flex';
    
    content.style.opacity = '0';
    
    if(scroll) scroll.classList.add('active');
}

function stopEffect() {
    console.log('Effect Stop');

    contentHide.style.opacity = '0';
    
    real.style.display = 'flex';
    fake.style.display = 'none';
    
    content.style.opacity = '1';
    
    if(scroll) scroll.classList.remove('active');
}


onmouse.addEventListener('mouseenter', startEffect);
onmouse.addEventListener('mouseleave', stopEffect);

onmouse.addEventListener('touchstart', startEffect, { passive: false });
onmouse.addEventListener('touchend', stopEffect);
onmouse.addEventListener('touchcancel', stopEffect);