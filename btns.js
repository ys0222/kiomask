let btnList = [``,`<button class='plusBtn' onclick="plus1()"> + </button> <button class='minusBtn' onclick="minus1()"> -</button>`
,`<button class='plusBtn' onclick="plus2()"> + </button> <button class='minusBtn' onclick="minus2()"> -</button>`,
`<button class='plusBtn' onclick="plus3()"> + </button> <button class='minusBtn' onclick="minus3()"> -</button>`,
`<button class='plusBtn' onclick="plus4()"> + </button> <button class='minusBtn' onclick="minus4()"> -</button>`,
`<button class='plusBtn' onclick="plus5()"> + </button> <button class='minusBtn' onclick="minus5()"> -</button>`,
`<button class='plusBtn' onclick="plus6()"> + </button> <button class='minusBtn' onclick="minus6()"> -</button>`,
`<button class='plusBtn' onclick="plus7()"> + </button> <button class='minusBtn' onclick="minus7()"> -</button>`,
`<button class='plusBtn' onclick="plus8()"> + </button> <button class='minusBtn' onclick="minus8()"> -</button>`,
`<button class='plusBtn' onclick="plus9()"> + </button> <button class='minusBtn' onclick="minus9()"> -</button>`,
]

//플러스 버튼에대한 함수
function plus1(){
    price1 = 7000
    price += price1
    count[1] ++
}

//마이너스 버튼에대한 함수
function minus1(){
    alert('a')
}

//plus버튼
function innerPlus(num,price,total){    
    result2.innerHTML= `${num}`
    result3.innerHTML= `${price}`
    result4.innerHTML =`총 결제 금액 : ${total}`
}