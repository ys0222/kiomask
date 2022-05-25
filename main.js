// html관련

let medium = document.querySelector('.medium')

let hamburger = document.querySelector('.hamburger')
let beverage = document.querySelector('.beverage')
let side = document.querySelector('.side')
let etc = document.querySelector('.etc')

let hamburgermain = document.querySelector('.hamburgermain')
let beveragemain = document.querySelector('.beveragemain')
let sidemain = document.querySelector('.sidemain')
let etcmain = document.querySelector('.etcmain')


hamburger.addEventListener('click',function (event) {
    medium.style.display ='none'
    beveragemain.style.display = 'none'
    hamburgermain.style.display = 'block'
    sidemain.style.display = 'none'
    etcmain.style.display = 'none'
})
beverage.addEventListener('click',function (event) {
    medium.style.display ='none'
    beveragemain.style.display = 'block'
    hamburgermain.style.display = 'none'
    sidemain.style.display = 'none'
    etcmain.style.display = 'none'
})
side.addEventListener('click',function (event) {
    medium.style.display ='none'
    beveragemain.style.display = 'none'
    hamburgermain.style.display = 'none'
    sidemain.style.display = 'block'
    etcmain.style.display = 'none'
})
etc.addEventListener('click',function (event) {
    medium.style.display ='none'
    beveragemain.style.display = 'none'
    hamburgermain.style.display = 'none'
    sidemain.style.display = 'none'
    etcmain.style.display = 'block'
})

// 쿼리셀렉터 + 배열등

let menuS= document.querySelector('.menu')
let numberS = document.querySelector('.numbers')
let priceS = document.querySelector('.price')
let total = document.querySelector('.total')

let imgburger1 = document.querySelector('.imgburger1')
let imgburger2 = document.querySelector('.imgburger2')
let imgburger3 = document.querySelector('.imgburger3')
let imgburger4 = document.querySelector('.imgburger4')
let imgburger5 = document.querySelector('.imgburger5')
let imgburger6 = document.querySelector('.imgburger6')
let imgburger7 = document.querySelector('.imgburger7')
let imgburger8 = document.querySelector('.imgburger8')
let imgburger9 = document.querySelector('.imgburger9')
let imgburger10 = document.querySelector('.imgburger10')
let imgburger11 = document.querySelector('.imgburger11')
let imgburger12 = document.querySelector('.imgburger12')
let imgburger13 = document.querySelector('.imgburger13')
let imgburger14 = document.querySelector('.imgburger14')
let imgburger15 = document.querySelector('.imgburger15')
let imgburger16 = document.querySelector('.imgburger16')

let drink1 = document.querySelector('.drink1')
let drink2 = document.querySelector('.drink2')
let drink3 = document.querySelector('.drink3')
let drink4 = document.querySelector('.drink4')
let drink5 = document.querySelector('.drink5')
let drink6 = document.querySelector('.drink6')

let side1 = document.querySelector('.side1')
let side2 = document.querySelector('.side2')
let side3 = document.querySelector('.side3')
let side4 = document.querySelector('.side4')
let side5 = document.querySelector('.side5')
let side6 = document.querySelector('.side6')
    
let etc1 = document.querySelector('.etc1')


let price=0
let menu=''
let nums=''
let prices=''
let btns=''
let count =['',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let names=['',imgburger1.name,imgburger2.name,imgburger3.name,imgburger4.name,imgburger5.name,imgburger6.name,imgburger7.name,imgburger8.name
,imgburger9.name,imgburger10.name,imgburger11.name,imgburger12.name,imgburger13.name,imgburger14.name,imgburger15.name,imgburger16.name,
drink1.name,drink2.name,drink3.name,drink4.name,drink5.name,drink6.name
,side1.name,side2.name,side3.name,side4.name,side5.name,side6.name,etc1.name]

let values=['',imgburger1.value,imgburger2.value,imgburger3.value,imgburger4.value,imgburger5.value,imgburger6.value,imgburger7.value,imgburger8.value
,imgburger9.value,imgburger10.value,imgburger11.value,imgburger12.value,imgburger13.value,imgburger14.value,imgburger15.value,imgburger16.value,
drink1.value,drink2.value,drink3.value,drink4.value,drink5.value,drink6.value
,side1.value,side2.value,side3.value,side4.value,side5.value,side6.value,etc1.value]

let str='주문 하신 메뉴 : '