
//조건문 연습
function boolean(input1, input2) {
	if(input1 === true || input2 === true) {
		console.log("true")
	}else{
		console.log("false")
	}
}


//홀짝
function evenOdd(num) {

	if (num  === 0) {
		console.log("Zero");
	} else if (num % 2 === 0) {
		console.log("Even");
	} else if (num % 2 !== 0) {
		console.log("Odd");
	}
}

//온도
function temperature(num){
	if(num <= 18) {
		console.log("조금 춥네요")
	} else if(num >18 && num < 24) {
		console.log("날씨가 좋네요")
	} else if(num >= 24) {
		console.log("조금 덥습니다.")
	}
}

//며칠
function days(month) {
	
	if(month === 4 || month ===6 || month === 9 || month === 11){
		return 30
	} else if(month === 2) {
		return 28
	} else {
		return 31
	}
	
}