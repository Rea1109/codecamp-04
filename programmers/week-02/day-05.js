//문자열 내림차순으로 정렬하기

function solution(s) {
    let answer = s.split('')
    answer = answer.sort().reverse()
    return answer.join('')
}


// k번째 수
function solution(array, commands) {
    for(let i=0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1])
    }
    return answer  
}

function solution(array, commands) {
    let answer = commands.map((el)=>{
         const result = array.slice(el[0]-1, el[1]).sort((a,b)=>(a-b))
         return result[el[2]-1]
    })

    return answer  
}