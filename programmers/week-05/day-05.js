//숫자문자열과 영단어
function solution(s) {
  let word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let temp = "";
  let change = "";

  if (isNaN(s)) {
    s.split("").forEach((cha) => {
      if (isNaN(cha)) {
        temp += cha;
        if (word.includes(temp)) {
          change += word.indexOf(temp);
          temp = "";
        }
      } else {
        change += cha;
      }
    });
  } else {
    return Number(s);
  }

  return Number(change);
}

// ref code
const numbers = ["zero", "one", "two", "three", "four", "five", "six",
                 "seven", "eight", "nine"];

function solution(s) {
    for( let i = 0; i < numbers.length; i++ ) {
        while( s.includes(numbers[i]) ) {
            s = s.replace( numbers[i], i )
        }
    }
    
    return Number(s);
}

const numbers = ["zero", "one", "two", "three", "four", "five", "six",
                 "seven", "eight", "nine"];

function solution(s) {
    numbers.forEach( (num, i) => {
        s = s.split(num).join(i);
    })
    return Number(s)
}

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                'seven', 'eight', 'nine']

function solution(s) {
    for( let i = 0; i < numbers.length; i++ ) {
        const regExp = new RegExp( numbers[i], "g" );
        s = s.replace( regExp, i )
    }
    return Number(s)
}