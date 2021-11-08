//자릿수 더하기
function solution(n){
    let sum = 0
    for(let i=0; i<String(n).length; i++) sum += Number(String(n)[i]) 

    return sum
}

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let newArr = []
    
    for(let i=0; i<n; i++) {
        newArr.push(x * (i+1))
    }
    
    return newArr
}
