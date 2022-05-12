let medium = document.querySelector('.medium')

let hamburger = document.querySelector('.hamburger')
let hamburgermain = document.querySelector('.hamburgermain')

hamburger.addEventListener('click',function (event) {
    alert('a')
    medium.style.display ='none'
    hamburgermain.style.display = 'block'
})