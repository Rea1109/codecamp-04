//문자열 내 p와 y의 개수
function solution(s){
    var answer = false;
    let pCount = 0
    let yCount = 0
    
    let temp = s.toLowerCase().split('')
    for(let cha of temp){
        if(cha === 'p') pCount++
        if(cha === 'y') yCount++
    }
    if(pCount === yCount) answer= true;
        
    return answer
}


// 이상한 문자 만들기