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

//추천코드
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    return result;
}

