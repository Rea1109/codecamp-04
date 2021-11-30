import HeaderUI from "./Header.presenter";
import { Modal } from "antd";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";

export default function Header() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.localStorage.getItem("info") ? setIsLogin(true) : setIsLogin(false);
  });

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleOk = async () => {
    if (account.email === "" || account.password === "") {
      alert("로그인 정보를 입력해주세요");
      return;
    }
    const user = collection(getFirestore(firebaseApp), "user");
    const signinQuery = query(
      user,
      where("email", "==", account.email),
      where("password", "==", account.password)
    );
    const result = await getDocs(signinQuery);

    if (result.size !== 0) {
      window.localStorage.setItem("info", "test");
      Modal.success({ title: "welcome " + result.docs[0].data().name });
      setIsModalVisible((prev) => !prev);
      router.push(`/user/${result.docs[0].data().email}`);
    } else {
      Modal.error({ title: "who are you?" });
    }
  };

  const handleCancel = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  const onClickSignOut = () => {
    alert("로그아웃!");
    window.localStorage.removeItem("info");
    router.push("/boards");
  };

  return (
    <HeaderUI
      isModalVisible={isModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangeInput={onChangeInput}
      onMoveSignup={() => {
        router.push("/user/signup");
      }}
      isLogin={isLogin}
      onClickSignOut={onClickSignOut}
    />
  );
}
