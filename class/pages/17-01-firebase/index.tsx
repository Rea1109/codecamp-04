import { firebaseApp } from "../_app";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { ChangeEvent, useState } from "react";

const FirebasePage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    age: 0,
    name: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    const user = collection(getFirestore(firebaseApp), "user");
    await addDoc(user, {
      ...userInfo,
      createAt: new Date(),
    });
    alert("등록 완료");

    const q = query(user, where("email", "==", userInfo.email));
    const result = await getDocs(q);
    result.docs.map((el) => console.log(el.id));
  };

  //   const onClickFetch = async () => {
  //     const board = collection(getFirestore(firebaseApp), "board");
  //     const result = await getDocs(board);
  //     const docs = result.docs.map((el) => el.data());
  //     console.log(docs);
  //   };

  const onClickFetch = async () => {
    const user = collection(getFirestore(firebaseApp), "user");
    const result = await getDocs(user);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };

  return (
    <>
      <div>파이어베이스 연습페이지</div>
      email <input type="text" name="email" onChange={onChange} /> <br />
      age <input type="number" name="age" onChange={onChange} /> <br />
      name <input type="text" name="name" onChange={onChange} /> <br />
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
};

export default FirebasePage;
