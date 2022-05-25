//결제하기 

let payBtn =[`<button class='payBtn' onclick='pay(price,payList)'>결제하기</button>`]

pay = (price,payList) => {
    Swal.fire({
        title :`결제내역`,
        html :   `${payList.join(' ')} <br>` +
        `<br>`+
        `총 구매하신 지불하실 금액은 <b>${price}</b>`,
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        confirmButtonText: '아니요, 다시 선택할래요.',
        cancelButtonText: '네 결정했어요.',
      }).then((result) => {
        if (result.isConfirmed == false) {
          Swal.fire({
            text : 'ic칩을 카드 투입구에 넣어주세요'
        })
        }
      })
}

