// 41 
function grade(score) {
	
	if(score >= 0 && score <= 100) {
			if(score >= 90) {
				console.log("A");
			}else if(score >= 80) {
				console.log("B");
			}else if(score >= 70) {
				console.log("C");
			}else if(score >= 60) {
				console.log("D");
			}else{
				console.log("F");
			}
		}else {
			console.log(" 성적을 잘못 입력하였습니다. ");
		}

}

//43
const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

function myPage(myShopping){
    let totalCount = 0
    let totalPrice = 0
    let grade = ""
    let result = ""

    for(let list of myShopping) {
    if(list.category === "의류"){
        totalCount++
        totalPrice = totalPrice+list.price
    }
    }

    if(totalCount >= 0 && totalCount <3){
    grade = "Bronze"
    }else if(totalCount >=3 && totalCount <5){
    grade = "SilVer"
    }else{
    grade = "Gold"
    }

    result = "의류를 구매한 횟수는 총 "+totalCount+"회, 금액은 "+totalPrice+"원이며, 등급은"+grade+"입니다."

    return result
}

