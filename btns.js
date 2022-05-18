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
    inner(0,price)
}
function plus2(){
    price2 = 7000
    price += price2
    count[2] ++
    inner(0,price2)
}
function plus3(){
    price3 = 7000
    price += price3
    count[3] ++
    inner(0,price3)
}
function plus4(){
    price4 = 7000
    price += price4
    count[4] ++
    inner(0,price4)
}
//마이너스 버튼에대한 함수
function minus1(){
    if (count[1] >=2){
        count[1] --
        price -= price1
        inner(0,price)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }
}

function minus2(){
    if (count[2] >=2){
        count[2] --
        price -= price2
        inner(0,price)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }
}

function minus3(){
    if (count[3] >=2){
        count[3] --
        price -= price3
        inner(0,price)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }
}

function minus4(){
    if (count[4] >=2){
        count[4] --
        price -= price4
        inner(0,price)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }
}