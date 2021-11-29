//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.filter((name, idx) => {
    return name !== completion[idx];
  })[0];
}
