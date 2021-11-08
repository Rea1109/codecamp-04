// 문자열을 정수로 바꾸기
function solution(s) {
    return Number(s)
}

// 추천코드
function strToInt(str){
    return str/1
}

//같은 숫자는 싫어
function remove(arr){
    let newArr = []

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            newArr.push(arr[i])
        }
    }

    return newArr
}

//멘토님 코드
function remove_1(arr){
    let newArr = []

    for(let i=0; i<arr.length; i++){
        if(newArr[newArr.length-1] !== arr[i]){
            newArr.push(arr[i])
        }
    }
}

//추천코드
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}


//핸드폰 번호 가리기

function solution(phone_number) {
    let num = phone_number.length
    let str = ""

    for(let i=0; i < num-4; i++){
        str += "*"
    }
    return str + phone_number.substring(num-4)
}

//멘토님 코드

function hideNumbers(phone_number) {
    let answer = ""
    answer = answer.padStart(phone_number.length-4,"*")
    answer + phone_number.slice(phone_number.length-4,phone_number.length)

    return answer
}


//추천코드
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
    return result;
}

