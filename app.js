const bars = document.querySelector('.bars');
const barNav = document.querySelector('.barNav__container');
const body = document.querySelector('body')
const header = document.querySelector('#header')
const footer = document.querySelector('#footer')
const main = document.querySelector('#main')

bars.addEventListener('click',()=>{
    barNav.classList.toggle('barNavOn')
})

//configurandoMapa
function iniciarMap(){
    let coord = {lat :-38.0022411 , lng : -57.54562989 };
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom : 10,
        center : coord
    });
    let marker = new google.maps.Marker({
        position : coord,
        map : map
    });
}