import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import UserWriteUI from "./UserWrite.presenter";
import {
  collection,
  getFirestore,
  addDoc,
  query,
  getDocs,
  where,
  // doc,
  // updateDoc,
  // deleteDoc,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { Modal } from "antd";

export default function UserWrite() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [isEmailCheck, setIsEmailCheck] = useState(false);

  const router = useRouter();

  const user = collection(getFirestore(firebaseApp), "user");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    if (!isEmailCheck) {
      Modal.error({ title: "이메일 중복확인을 해주세요" });
      return;
    }
    await addDoc(user, {
      ...userInfo,
      createAt: new Date(),
    });
    Modal.success({ title: "가입이 완료 되었습니다." });
    const userIdQuery = query(user, where("email", "==", userInfo.email));
    const result = await getDocs(userIdQuery);
    console.log(result.docs[0].data().email);
    // router.push(`/user/${result.docs[0].data().email}`);
    router.push("/boards");
  };

  const checkEmail = async () => {
    if (userInfo.email === "") return;
    const userIdQuery = query(user, where("email", "==", userInfo.email));
    const result = await getDocs(userIdQuery);
    if (result.size === 0) {
      Modal.success({ title: "사용 가능합니다." });
      setIsEmailCheck((prev) => !prev);
    } else {
      Modal.warning({ title: "사용중인 이메일 입니다." });
    }
  };
  // const modify = async () => {
  //   const userRef = doc(
  //     getFirestore(firebaseApp),
  //     "user",
  //     "3gERr6wbOMSpA1dlIsSw"
  //   );
  //   await updateDoc(userRef, { name: "거북왕에서변경" });
  // };

  // const deleteUser = async () => {
  //   alert("삭제");
  //   const userRef = doc(
  //     getFirestore(firebaseApp),
  //     "user",
  //     "96Cw9ISZsa0AcOpOiCHC"
  //   );
  //   await deleteDoc(userRef);
  // };

  return (
    <UserWriteUI
      isHidden={true}
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
      checkEmail={checkEmail}
    />
  );
}
