//짝수홀수 
function solution(num) {
    var answer = ''
    if(num % 2 === 0){
        answer = 'Even'
    }else{
        answer = 'Odd'
    }
    return answer
}

//추천코드
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}

// 평균구하기
function solution(arr) {
    let sum = 0
    for(let num of arr){
        sum += num
    }

    return sum / arr.length
}

//추천코드
function average(array){
    return array.reduce((a, b) => a + b) / array.length;
}

//가운데 글자 가져오기
function solution(s) {
    var answer = '';
    if(s.length % 2 === 0){
        answer = s.substring((s.length/2)-1,(s.length/2)+1)
    }else{
        answer = s[Math.floor(s.length/2)]
    }

    return answer
}

