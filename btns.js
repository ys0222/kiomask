let btnPluses = [``
,`<button class='plusBtn' onclick="plus1()"> + </button> `
,`<button class='plusBtn' onclick="plus2()"> + </button> `
,`<button class='plusBtn' onclick="plus3()"> + </button> `
,`<button class='plusBtn' onclick="plus4()"> + </button> `
,`<button class='plusBtn' onclick="plus5()"> + </button> `
,`<button class='plusBtn' onclick="plus6()"> + </button> `
,`<button class='plusBtn' onclick="plus7()"> + </button> `
,`<button class='plusBtn' onclick="plus8()"> + </button> `
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
``
]

//플러스버튼
function plus1(){
    price += price1
    count[1] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus2(){
    price += price2
    count[2] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus3(){
    price += price3
    count[3] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus4(){
    price += price4
    count[4] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus5(){
    price += price5
    count[5] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus6(){
    price += price6
    count[6] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus7(){
    price += price7
    count[7] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function plus8(){
    price += price8
    count[8] ++
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}

//마이너스 버튼에대한 함수
function minus1(){
    if (count[1] >=2){
        count[1] --
        price -= price1
        inner(names,count,btnPluses,btnMinuses,btnDeletes)

    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }
}
function minus2(){
    if (count[2] >=2){
        count[2] --
        price -= price2
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }}
function minus3(){
    if (count[3] >=2){
        count[3] --
        price -= price3
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }}
function minus4(){
    if (count[4] >=2){
        count[4] --
        price -= price4
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }}
function minus5(){
    if (count[5] >=2){
        count[5] --
        price -= price5
        inner(names,count,btnPluses,btnMinuses,btnDeletes)

    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }
}
function minus6(){
    if (count[6] >=6){
        count[6] --
        price -= price6
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }}
function minus7(){
    if (count[7] >=2){
        count[7] --
        price -= price7
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }}
function minus8(){
    if (count[8] >=2){
        count[8] --
        price -= price8
        inner(names,count,btnPluses,btnMinuses,btnDeletes)
    }
    else {
        alert('최소 1개 이상 구매하셔야합니다.')
    }}
//삭제버튼
function delete1(){
    price -= parseInt(price1 * count[1])
    count[1] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete2(){
    price -= parseInt(price2 * count[2])
    count[2] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete3(){
    price -= parseInt(price3 * count[3])
    count[3] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete4(){
    price -= parseInt(price4 * count[4])
    count[4] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete5(){
    price -= parseInt(price5 * count[5])
    count[5] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete6(){
    price -= parseInt(price6 * count[6])
    count[6] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete7(){
    price -= parseInt(price7 * count[7])
    count[7] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}
function delete8(){
    price -= parseInt(price8 * count[8])
    count[8] = 0
    inner(names,count,btnPluses,btnMinuses,btnDeletes)
}