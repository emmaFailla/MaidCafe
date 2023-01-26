const bars = document.querySelector('.bars');
const barNav = document.querySelector('.barNav__container');
const body = document.querySelector('body')
const header = document.querySelector('#header')
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')

bars.addEventListener('click',()=>{
    barNav.classList.toggle('barNavOn')
})
