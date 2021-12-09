// ref code
function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const stageArr = [];
  for (let i = 1; i <= N; i++) {
    stageArr.push({
      stage: i,
      users: 0,
      fail: 0,
    });
  }

  let players = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (stageArr[stages[i] - 1]) {
      stageArr[stages[i] - 1].users += 1;

      if (stages[i] !== stages[i + 1]) {
        const fail = stageArr[stages[i] - 1].users / players;
        players = players - stageArr[stages[i] - 1].users;

        stageArr[stages[i] - 1].fail = fail;
      }
    }
  }

  stageArr.sort((a, b) => {
    return b.fail - a.fail;
  });

  const answer = [];
  for (let i = 0; i < stageArr.length; i++) {
    answer.push(stageArr[i].stage);
  }

  return answer;
}

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const answer = new Array(N).fill(1).map((el, i) => {
    const stage = el + i;
    const stageInfo = { stage: stage, users: 0, fail: 0 };

    stages.forEach((user, i) => {
      if (user === stage) {
        stageInfo.users += 1;

        if (stages[i + 1] !== stage) {
          stageInfo.fail = stageInfo.users / stages.length;
          stages.splice(0, stageInfo.users);
        }
      }
    });
    return stageInfo;
  });
  return answer
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
}
