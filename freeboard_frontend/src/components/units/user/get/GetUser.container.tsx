import GetUserUI from "./GetUser.presenter";
import { useRouter } from "next/router";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { useEffect, useState } from "react";

export default function GetUser() {
  const [userInfo, setUserInfo] = useState({});

  const router = useRouter();
  const user = collection(getFirestore(firebaseApp), "user");

  let temp = {};

  useEffect(() => {
    const getUser = async () => {
      const getUserQuery = query(
        user,
        where("email", "==", router.query.userEmail)
      );
      const result = await getDocs(getUserQuery);
      console.log(result.docs[0].data());
      temp = result.docs[0].data();
    };
    getUser();
  }, []);

  return (
    <GetUserUI userEmail={String(router.query.userEmail)} userInfo={temp} />
  );
}
