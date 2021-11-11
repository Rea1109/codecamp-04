//자릿수 더하기
function solution(n){
    let sum = 0
    for(let i=0; i<String(n).length; i++){
        sum += Number(String(n)[i]) 
    }
    return sum
}

function solution(n){
    let sum = 0
    String(n).split("").forEach((num)=>{
        sum += Number(num)
    })

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

function solution(x, n) {
    let newArr = new Array(n).fill(1).map((num,idx)=>{
         return (num+idx)*x
    })
    
    return newArr
}