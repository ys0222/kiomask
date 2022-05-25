// 1부터 16까지 버거
// 16부터 까지 드링크
// 
// 

let btnPluses = [``
,`<button class='plusBtn' onclick="plus1()"> + </button> `
,`<button class='plusBtn' onclick="plus2()"> + </button> `
,`<button class='plusBtn' onclick="plus3()"> + </button> `
,`<button class='plusBtn' onclick="plus4()"> + </button> `
,`<button class='plusBtn' onclick="plus5()"> + </button> `
,`<button class='plusBtn' onclick="plus6()"> + </button> `
,`<button class='plusBtn' onclick="plus7()"> + </button> `
,`<button class='plusBtn' onclick="plus8()"> + </button> `
,`<button class='plusBtn' onclick="plus9()"> + </button> `
,`<button class='plusBtn' onclick="plus10()"> + </button> `
,`<button class='plusBtn' onclick="plus11()"> + </button> `
,`<button class='plusBtn' onclick="plus12()"> + </button> `
,`<button class='plusBtn' onclick="plus13()"> + </button> `
,`<button class='plusBtn' onclick="plus14()"> + </button> `
,`<button class='plusBtn' onclick="plus15()"> + </button> `
,`<button class='plusBtn' onclick="plus16()"> + </button> `
,`<button class='plusBtn' onclick="plus17()"> + </button> `
,`<button class='plusBtn' onclick="plus18()"> + </button> `
,`<button class='plusBtn' onclick="plus19()"> + </button> `
,`<button class='plusBtn' onclick="plus20()"> + </button> `
,`<button class='plusBtn' onclick="plus21()"> + </button> `
,`<button class='plusBtn' onclick="plus22()"> + </button> `
,`<button class='plusBtn' onclick="plus23()"> + </button> `
,`<button class='plusBtn' onclick="plus24()"> + </button> `
,`<button class='plusBtn' onclick="plus25()"> + </button> `
,`<button class='plusBtn' onclick="plus26()"> + </button> `
,`<button class='plusBtn' onclick="plus27()"> + </button> `
,`<button class='plusBtn' onclick="plus28()"> + </button> `
,`<button class='plusBtn' onclick="plus29()"> + </button> `
,`<button class='plusBtn' onclick="plus30()"> + </button> `

]

let btnMinuses=[``,
`<button class='minusBtn' onclick="minus1()"> -</button>`,
`<button class='minusBtn' onclick="minus2()"> -</button>`,
`<button class='minusBtn' onclick="minus3()"> -</button>`,
`<button class='minusBtn' onclick="minus4()"> -</button>`,
`<button class='minusBtn' onclick="minus5()"> -</button>`,
`<button class='minusBtn' onclick="minus6()"> -</button>`,
`<button class='minusBtn' onclick="minus7()"> -</button>`,
`<button class='minusBtn' onclick="minus8()"> -</button>`,
`<button class='minusBtn' onclick="minus9()"> -</button>`,
`<button class='minusBtn' onclick="minus10()"> -</button>`,
`<button class='minusBtn' onclick="minus11()"> -</button>`,
`<button class='minusBtn' onclick="minus12()"> -</button>`,
`<button class='minusBtn' onclick="minus13()"> -</button>`,
`<button class='minusBtn' onclick="minus14()"> -</button>`,
`<button class='minusBtn' onclick="minus15()"> -</button>`,
`<button class='minusBtn' onclick="minus16()"> -</button>`,
`<button class='minusBtn' onclick="minus17()"> -</button>`,
`<button class='minusBtn' onclick="minus18()"> -</button>`,
`<button class='minusBtn' onclick="minus19()"> -</button>`,
`<button class='minusBtn' onclick="minus20()"> -</button>`,
`<button class='minusBtn' onclick="minus21()"> -</button>`,
`<button class='minusBtn' onclick="minus22()"> -</button>`,
`<button class='minusBtn' onclick="minus23()"> -</button>`,
`<button class='minusBtn' onclick="minus24()"> -</button>`,
`<button class='minusBtn' onclick="minus25()"> -</button>`,
`<button class='minusBtn' onclick="minus26()"> -</button>`,
`<button class='minusBtn' onclick="minus27()"> -</button>`,
`<button class='minusBtn' onclick="minus28()"> -</button>`,
`<button class='minusBtn' onclick="minus29()"> -</button>`,
`<button class='minusBtn' onclick="minus30()"> -</button>`,




``
]

let btnDeletes=[``,
`<button class='deleteBtn' onclick="delete1()"> x</button>`,
`<button class='deleteBtn' onclick="delete2()"> x</button>`,
`<button class='deleteBtn' onclick="delete3()"> x</button>`,
`<button class='deleteBtn' onclick="delete4()"> x</button>`,
`<button class='deleteBtn' onclick="delete5()"> x</button>`,
`<button class='deleteBtn' onclick="delete6()"> x</button>`,
`<button class='deleteBtn' onclick="delete7()"> x</button>`,
`<button class='deleteBtn' onclick="delete8()"> x</button>`,
`<button class='deleteBtn' onclick="delete9()"> x</button>`,
`<button class='deleteBtn' onclick="delete10()"> x</button>`,
`<button class='deleteBtn' onclick="delete11()"> x</button>`,
`<button class='deleteBtn' onclick="delete12()"> x</button>`,
`<button class='deleteBtn' onclick="delete13()"> x</button>`,
`<button class='deleteBtn' onclick="delete14()"> x</button>`,
`<button class='deleteBtn' onclick="delete15()"> x</button>`,
`<button class='deleteBtn' onclick="delete16()"> x</button>`,
`<button class='deleteBtn' onclick="delete17()"> x</button>`,
`<button class='deleteBtn' onclick="delete18()"> x</button>`,
`<button class='deleteBtn' onclick="delete19()"> x</button>`,
`<button class='deleteBtn' onclick="delete20()"> x</button>`,
`<button class='deleteBtn' onclick="delete21()"> x</button>`,
`<button class='deleteBtn' onclick="delete22()"> x</button>`,
`<button class='deleteBtn' onclick="delete23()"> x</button>`,
`<button class='deleteBtn' onclick="delete24()"> x</button>`,
`<button class='deleteBtn' onclick="delete25()"> x</button>`,
`<button class='deleteBtn' onclick="delete26()"> x</button>`,
`<button class='deleteBtn' onclick="delete27()"> x</button>`,
`<button class='deleteBtn' onclick="delete28()"> x</button>`,
`<button class='deleteBtn' onclick="delete29()"> x</button>`,
`<button class='deleteBtn' onclick="delete30()"> x</button>`,


``
]

//플러스버튼
function plus1(){
    price += price1
    count[1] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus2(){
    price += price2
    count[2] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus3(){
    price += price3
    count[3] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus4(){
    price += price4
    count[4] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus5(){
    price += price5
    count[5] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus6(){
    price += price6
    count[6] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus7(){
    price += price7
    count[7] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus8(){
    price += price8
    count[8] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus9(){
    price += price9
    count[9] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus10(){
    price += price10
    count[10] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus11(){
    price += price11
    count[11] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus12(){
    price += price12
    count[12] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus13(){
    price += price13
    count[13] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus14(){
    price += price14
    count[14] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus15(){
    price += price15
    count[15] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus16(){
    price += price16
    count[16] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus17(){
    price += price17
    count[17] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus18(){
    price += price18
    count[18] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus19(){
    price += price19
    count[19] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus20(){
    price += price20
    count[20] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus21(){
    price += price21
    count[21] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus22(){
    price += price22
    count[22] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus23(){
    price += price23
    count[23] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus24(){
    price += price24
    count[24] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus25(){
    price += price25
    count[25] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus26(){
    price += price26
    count[26] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus27(){
    price += price27
    count[27] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus28(){
    price += price28
    count[28] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus29(){
    price += price29
    count[29] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function plus30(){
    price += price29
    count[29] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
//마이너스 버튼에대한 함수

function one(){
    alert('최소 한개 이상 구매하셔야합니다.')
}
function minus1(){
    if (count[1] >=2){
        count[1] --
        price -= price1
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus2(){
    if (count[2] >=2){
        count[2] --
        price -= price2
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus3(){
    if (count[3] >=2){
        count[3] --
        price -= price3
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus4(){
    if (count[4] >=2){
        count[4] --
        price -= price4
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus5(){
    if (count[5] >=2){
        count[5] --
        price -= price5
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus6(){
    if (count[6] >=6){
        count[6] --
        price -= price6
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus7(){
    if (count[7] >=2){
        count[7] --
        price -= price7
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus8(){
    if (count[8] >=2){
        count[8] --
        price -= price8
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
    function minus9(){
    if (count[9] >=2){
        count[9] --
        price -= price9
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus10(){
    if (count[10] >=2){
        count[10] --
        price -= price10
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus11(){
    if (count[11] >=2){
        count[11] --
        price -= price11
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus12(){
    if (count[12] >=2){
        count[12] --
        price -= price12
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus13(){
    if (count[13] >=2){
        count[13] --
        price -= price13
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus14(){
    if (count[14] >=2){
        count[14] --
        price -= price14
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus15(){
    if (count[15] >=2){
        count[15] --
        price -= price15
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus16(){
    if (count[16] >=2){
        count[16] --
        price -= price16
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
    function minus17(){
    if (count[17] >=2){
        count[17] --
        price -= price17
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus18(){
    if (count[18] >=2){
        count[18] --
        price -= price18
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus19(){
    if (count[19] >=2){
        count[19] --
        price -= price19
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus20(){
    if (count[20] >=2){
        count[20] --
        price -= price20
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus20(){
    if (count[20] >=2){
        count[20] --
        price -= price20
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus21(){
    if (count[21] >=2){
        count[21] --
        price -= price21
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus23(){
    if (count[23] >=2){
        count[23] --
        price -= price23
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus24(){
    if (count[24] >=2){
        count[24] --
        price -= price24
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus25(){
    if (count[25] >=2){
        count[25] --
        price -= price25
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus26(){
    if (count[26] >=6){
        count[26] --
        price -= price26
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus27(){
    if (count[27] >=2){
        count[27] --
        price -= price27
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus28(){
    if (count[28] >=2){
        count[28] --
        price -= price28
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)

    }
    else {
        one()
    }}
function minus29(){
    if (count[29] >=2){
        count[29] --
        price -= price29
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
function minus30(){
    if (count[30] >=2){
        count[30] --
        price -= price30
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
        innerPay(names,count,values)


    }
    else {
        one()
    }
}
//삭제버튼
function delete1(){
    price -= parseInt(price1 * count[1])
    count[1] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete2(){
    price -= parseInt(price2 * count[2])
    count[2] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete3(){
    price -= parseInt(price3 * count[3])
    count[3] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete4(){
    price -= parseInt(price4 * count[4])
    count[4] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete5(){
    price -= parseInt(price5 * count[5])
    count[5] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete6(){
    price -= parseInt(price6 * count[6])
    count[6] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete7(){
    price -= parseInt(price7 * count[7])
    count[7] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete8(){
    price -= parseInt(price8 * count[8])
    count[8] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete9(){
    price -= parseInt(price9 * count[9])
    count[9] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete10(){
    price -= parseInt(price10 * count[10])
    count[10] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete10(){
    price -= parseInt(price11 * count[11])
    count[11] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete12(){
    price -= parseInt(price12 * count[12])
    count[12] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete13(){
    price -= parseInt(price13 * count[13])
    count[13] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete14(){
    price -= parseInt(price14 * count[14])
    count[14] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete15(){
    price -= parseInt(price15 * count[15])
    count[15] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete16(){
    price -= parseInt(pric16 * count[16])
    count[16] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete17(){
    price -= parseInt(price17 * count[17])
    count[17] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete18(){
    price -= parseInt(price18 * count[18])
    count[18] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete19(){
    price -= parseInt(price19 * count[19])
    count[19] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete20(){
    price -= parseInt(price20 * count[20])
    count[20] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete21(){
    price -= parseInt(price21 * count[21])
    count[21] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete22(){
    price -= parseInt(price22 * count[22])
    count[22] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete23(){
    price -= parseInt(price23 * count[23])
    count[23] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete24(){
    price -= parseInt(price24 * count[24])
    count[24] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete25(){
    price -= parseInt(price25 * count[25])
    count[25] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete26(){
    price -= parseInt(price26 * count[26])
    count[26] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete27(){
    price -= parseInt(price27 * count[27])
    count[27] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete28(){
    price -= parseInt(price28 * count[28])
    count[28] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete29(){
    price -= parseInt(price29 * count[29])
    count[29] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}
function delete30(){
    price -= parseInt(price30 * count[30])
    count[30] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
    innerPay(names,count,values)

}