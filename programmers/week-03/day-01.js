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
function solution(s) {
    var answer = '';
    
    s.split(' ').map((str,idx)=>{
        if(idx > 0) answer += " "
        
        for(let i=0; i<str.length; i++){
            if(i%2 === 0){
                answer += str[i].toUpperCase()
            }else{
                answer += str[i].toLowerCase()
            }
        }
    })
    return answer;
}

function solution(s) {
    var answer = '';
    
    s.split(' ').map((str,idx)=>{
        if(idx > 0) answer += " "
        
        for(let i=0; i<str.length; i++){
            if(i%2 === 0){
                answer += str[i].toUpperCase()
            }else{
                answer += str[i].toLowerCase()
            }
        }
    })
    return answer;
}