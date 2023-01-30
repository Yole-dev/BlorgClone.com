`use strict`

//for toggling the nav bar
const nav = document.querySelector('nav');
const openNavBtn = document.querySelector('.openNavBtn');
const closeNavBtn = document.querySelector('.closeNavBtn');
const headerContent = document.querySelector('.headerContent');
const header = document.querySelector('header');
const navContent = document.querySelector('.navContent')
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


openNavBtn.addEventListener('click', function(){
    nav.style.paddingBottom = '2rem';
    headerContent.style.display = 'none';
    navContent.style.display = 'block';
    main.style.display = 'none';
    footer.style.display = 'none';
    closeNavBtn.style.display = 'block';
    openNavBtn.style.display = 'none';
    body.style.maxHeight = 'auto';
});

closeNavBtn.addEventListener('click', function() {
    closeNavBtn.style.display = 'none';
    openNavBtn.style.display = 'block';
    headerContent.style.display = 'block';
    navContent.style.display = 'none';
    main.style.display = 'block';
    footer.style.display = 'block';
    body.style.maxHeight = '4400px';
    header.style.height = '533px';
});

//for toggling the links on the nav bar
const firstBtnUp = document.querySelector('.firstBtnUp');
const firstBtnDown = document.querySelector('.firstBtnDown');
const secondBtnUp = document.querySelector('.secondBtnUp');
const secondBtnDown = document.querySelector('.secondBtnDown');
const lastBtnUp = document.querySelector('.lastBtnUp');
const lastBtnDown = document.querySelector('.lastBtnDown');
const firstSubNav = document.querySelector('.firstSubNav');
const secondSubNav = document.querySelector('.secondSubNav');
const lastSubNav = document.querySelector('.lastSubNav');


firstBtnDown.addEventListener('click', function() {
    firstBtnUp.style.display = 'block';
    firstBtnDown.style.display = 'none';
    firstSubNav.style.display = 'block';
    header.style.maxHeight = '626px';
});

firstBtnUp.addEventListener('click', function() {
    firstBtnUp.style.display = 'none';
    firstBtnDown.style.display = 'block';
    firstSubNav.style.display = 'none';
});

secondBtnDown.addEventListener('click', function() {
    secondBtnUp.style.display = 'block';
    secondBtnDown.style.display = 'none';
    secondSubNav.style.display = 'block';
    header.style.maxHeight = '626px';
});

secondBtnUp.addEventListener('click', function() {
    secondBtnUp.style.display = 'none';
    secondBtnDown.style.display = 'block';
    secondSubNav.style.display = 'none';
});

lastBtnDown.addEventListener('click', function() {
    lastBtnUp.style.display = 'block';
    lastBtnDown.style.display = 'none';
    lastSubNav.style.display = 'block';
    header.style.maxHeight = '626px';
});

lastBtnUp.addEventListener('click', function() {
    lastBtnUp.style.display = 'none';
    lastBtnDown.style.display = 'block';
    lastSubNav.style.display = 'none';
});


// if (navContent.style.height === '1187.780px') {
//     header.style.maxHeight = '1000px';
// };