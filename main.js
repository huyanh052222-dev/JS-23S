const onmouse = document.querySelector('.hover-me');
const scroll = document.querySelector('.scroll');
const real = document.querySelector('.slider');
const fake = document.querySelector('.slider-meme');
const contentHide = document.querySelector('.content-hide');
const content = document.querySelector('.content');

onmouse.addEventListener('mouseenter', function() {
    console.log('Mouse entered the element');
    contentHide.style.opacity = '1';
    real.style.display = 'none';
    fake.style.display = 'flex';
    content.style.opacity = '0';
    scroll.classList.add('active');
});
onmouse.addEventListener('mouseleave', function() {
    console.log('Mouse left the element');
    contentHide.style.opacity = '0';
    real.style.display = 'flex';
    fake.style.display = 'none';
    content.style.opacity = '1';
    scroll.classList.remove('active');
});

