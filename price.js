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

let price=0
let menu=''
let nums=''
let prices=''
let btns=''
let count =['',0,0,0,0,0,0,0,0]
let names=['',imgburger1.name,imgburger2.name,imgburger3.name,imgburger4.name,imgburger5.name,imgburger6.name,imgburger7.name,imgburger8.name]

let str='주문 하신 메뉴 : '


//innerhtml하는 함수
function inner(name,count,btnPlus,btnMinus,btnDelete)
{
    for(let i=1;i<count.length;i++){
       if(count[i] >= 1) {
           str += `${name[i]} ${btnPlus[i]} ${count[i]} 개 ${btnMinus[i]} ${btnDelete[i]}`
           str +=`\u00A0`
       }
    }
        menuS.innerHTML = `${str}`
        btnPrice(price)

        str ='주문 하신 메뉴 : '
}
function btnPrice(price){
    total.innerHTML =`결제 하실 금액 : ${price}`
}


imgburger1.addEventListener('click',function(){
    price1 = parseInt(imgburger1.value)
    price += price1
    count[1] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger2.addEventListener('click',function(){
    price2 = parseInt(imgburger2.value)
    price += price2
    count[2] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})
imgburger3.addEventListener('click',function(){
    price3 = parseInt(imgburger3.value)
    price += price3
    count[3] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})
imgburger4.addEventListener('click',function(){
    price4 = parseInt(imgburger4.value)
    price += price4
    count[4] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger5.addEventListener('click',function(){
    price5 = parseInt(imgburger5.value)
    price += price5
    count[5] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger6.addEventListener('click',function(){
    price6 = parseInt(imgburger6.value)
    price += price6
    count[6] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger7.addEventListener('click',function(){
    price7 = parseInt(imgburger7.value)
    price += price7
    count[7] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger8.addEventListener('click',function(){
    price8 = parseInt(imgburger8.value)
    price += price8
    count[8] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

