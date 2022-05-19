


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

imgburger9.addEventListener('click',function(){
    price9 = parseInt(imgburger9.value)
    price += price9
    count[9] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger10.addEventListener('click',function(){
    price10 = parseInt(imgburger10.value)
    price += price10
    count[10] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})
imgburger11.addEventListener('click',function(){
    price11 = parseInt(imgburger11.value)
    price += price11
    count[11] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})
imgburger12.addEventListener('click',function(){
    price12 = parseInt(imgburger12.value)
    price += price12
    count[12] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger13.addEventListener('click',function(){
    price13 = parseInt(imgburger13.value)
    price += price13
    count[13] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger14.addEventListener('click',function(){
    price14 = parseInt(imgburger14.value)
    price += price14
    count[14] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger15.addEventListener('click',function(){
    price15 = parseInt(imgburger15.value)
    price += price15
    count[15] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})

imgburger16.addEventListener('click',function(){
    price16 = parseInt(imgburger16.value)
    price += price16
    count[16] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
})