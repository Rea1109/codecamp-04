import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function CallBackPromiseAsyncAwaitPage() {
  const [myCallback, setMyCallback] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);

  function onClickCallback() {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();
    ccc.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];

      const aaa = new XMLHttpRequest();
      aaa.open("get", `http://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const aaa2 = new XMLHttpRequest();
        aaa2.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        aaa2.send();
        aaa2.addEventListener("load", (res: any) => {
          const result = JSON.parse(res.target.response);
          setMyCallback(result);
        });
      });
    });
  }

  //   new Promise((resolve, reject)=>{    axios 같은 비동기 통신 라이브러리를 만들때 사용
  // 외부 요청하기 또는 비동기작업하기
  // if(성공) resolve()
  // if(실패) reject()
  //   })

  // Promise Chaning
  function onClickPromise() {
    console.log("이것은 1번 시작");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("이것은 3번 시작");
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res: any) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res: any) => {
        setMyPromise(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("이것은 2번 시작");
  }
  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;

    const res3 = await axios.get(
      `http://koreanjson.com/posts?userId=${userId}`
    );
    setMyAsyncAwait(res3.data);
  };

  return (
    <>
      <h1>콜백과 친구들</h1>
      <div>
        결과:
        {myCallback.map((el: any) => (
          <div key={uuid()}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <div>
        결과:
        {myPromise.map((el: any) => (
          <div key={uuid()}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <div>
        결과:
        {myAsyncAwait.map((el: any) => (
          <div key={uuid()}>{el.title}</div>
        ))}
      </div>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기</button>
    </>
  );
}
