import { firebaseApp } from "../_app";
import {
  collection,
  getFirestore,
  //   query,
  //   where,
  getDocs,
} from "firebase/firestore/lite";
const FirebaseTestPage = () => {
  //   const age = 3;
  const board = collection(getFirestore(firebaseApp), "board");
  //   const q = query(board, where("age", "==", age));

  const onClickFetch = async () => {
    // const result = await getDocs(q);
    const result = await getDocs(board);
    result.docs.map((el) => console.log(el.id));
  };

  const onClickUpdate = async () => {};

  return (
    <>
      <div>Test Page</div>
      <button onClick={onClickFetch}>특정값 불러오기</button>
      <button onClick={onClickUpdate}>수정하기</button>
    </>
  );
};

export default FirebaseTestPage;
