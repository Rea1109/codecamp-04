// 23. 숫자더하기
function sum(num) {
	let count = 0;
	
	for(let i =1; i<=num; i++) {
		count += i
	}
	
	return count;
}


// 24. 특정 문자열 세기
function countLetter(str) {
	let count = 0;

	for(const text of str){
		if(text === 'a' || text === 'A') {
			count++
		}
	}
	return count;
}


// 25. 문자열 삽입
function makeNumber(num) {
	let str = '';
	for(let i=1; i<=num; i++){
		str += i
		
		if(i !== num) {
			 str += '-'
		}
		
	}
	return str
}

//26. 홀수 문자열
function makeOdd(num) {
	let str = ''
	
	for(let i=1; i<=num; i++){
		if(i%2 !== 0){
			str += i
		}
	}
	
	return str
}

//27. 가장 큰 수 찾기
function bigNum(str) {
	let biggest = 0
	
	for(let i=0; i<str.length; i++) {
		if(Number(str[i]) >= biggest) {
			biggest = Number(str[i])
		}
	}

	return String(biggest)
}