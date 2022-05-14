let price=0
let menus =''
let prices=[]


let cal = document.querySelector('.cal')
let menu= document.querySelector('.menu')
let imgburgers = document.querySelectorAll('.imgburger')

menu.innerText =`장바구니 : <b />${menus}`
cal.innerHTML = `지불 하실 금액 : <b />${price}`


for (let imgburger of imgburgers) {
    imgburger.addEventListener('click',function (event) {
    
        for(let i=0;i<imgburgers.length;i++){
            if(imgburgers[i].checked) {
                console.log(imgburgers[i].value)
            }
        }

        
        menu.innerText =`장바구니 : <b />${menus}`
        cal.innerHTML = `지불 하실 금액 : <b />${price}`
    })}
