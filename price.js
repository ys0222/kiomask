let price=0
let menu=''
let nums=''
let prices=''
let btns=''
let count =[0,0,0,0,0,0,0,0,0]


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

//리스트에 저장해주는 함수
function push(name,num,price,btn){
    menu += `${name} ${btn}` 
    nums += `<b>${num}</b> 개`
    prices +=`${price} 원`
    btns += `${btn}`
}

//innerHTML하는 함수
function inner(menu,num,price,a){    
    menuS.innerHTML= `메뉴 : ${menu}`
    
    numberS.innerHTML= `${num}`
    priceS.innerHTML= `${price}`
    
    total.innerHTML =`총 결제 금액 : ${a}`
}


imgburger1.addEventListener('click',function(){
    count[1] ++
    if (count[1] <= 1){
        price1 = 7000
        price += price1
        push(imgburger1.name,count[1],price1,btnList[1])
        inner(menu,nums,prices,price)    
    }

})

imgburger2.addEventListener('click',function(){
    count[2] ++
    if (count[2] < 2){
        price2 = 8000
        price += price2
        push(imgburger2.name,count[2],price2,btnList[2])
        inner(menu,nums,prices,price)    
    }

})
imgburger3.addEventListener('click',function(){
    count[3] ++
    if (count[3] <= 1){
        price3 = 7000
        price += price3
        push(imgburger3.name,count[3],price3,btnList[3])
        inner(menu,nums,prices,price)    
    }
})
imgburger4.addEventListener('click',function(){
    
    count[4] ++
    if (count[4] <= 1){
        price4 = 7000
        price += price4
        push(imgburger4.name,count[4],price4,btnList[4])
        inner(menu,nums,prices,price)    
    }
})

imgburger5.addEventListener('click',function(){
    
    count[5] ++
    if (count[5] <= 1){
        price5 = 7000
        price += price5
        push(imgburger5.name,count[5],price5,btnList[5])
        inner(menu,nums,prices,price)    
    }
})

imgburger6.addEventListener('click',function(){
    
    count[6] ++
    if (count[6] <= 1){
        price6 = 10800
        price += price6
        push(imgburger6.name,count[6],price6,btnList[6])
        inner(menu,nums,prices,price)    
    }
})

imgburger7.addEventListener('click',function(){
    
    count[7] ++
    if (count[7] <= 1){
        price7 = 8800
        price += price7
        push(imgburger7.name,count[7],price7,btnList[7])
        inner(menu,nums,prices,price)    
    }
})

imgburger8.addEventListener('click',function(){
    
    count[8] ++
    if (count[8] <= 1){
        price8 = 7000
        price += price8
        push(imgburger8.name,count[8],price8,btnList[8])
        inner(menu,nums,prices,price)    
    }
})

