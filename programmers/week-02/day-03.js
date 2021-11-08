// 서울에 김서방 찾기
function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
  }


// 문자열 다루기 기본
function solution(s) {
    if(s.length === 4 || s.length === 6){
        if(s.includes('e') || isNaN(s)){
            return false
        }else{
            return true
        }
    }else{
        return false
    }
}

//약수의 합
function solution(n) {
    let sum = 0

    for(let i=1; i<=n; i++){
        if(n%i === 0){
            sum += i
        }
    }

    return sum
}