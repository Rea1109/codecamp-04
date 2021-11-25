import GetUserUI from "./GetUser.presenter";
import { useRouter } from "next/router";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { useEffect, useState } from "react";

export default function GetUser() {
  const [userInfo, setUserInfo] = useState<DocumentData | undefined>();

  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const user = collection(getFirestore(firebaseApp), "user");
      const getUserQuery = query(
        user,
        where("email", "==", router.query.userEmail)
      );
      const result = await getDocs(getUserQuery);
      setUserInfo(result.docs[0].data());
      console.log(userInfo);
    };
    getUser();
  }, []);

  return <GetUserUI userInfo={userInfo} />;
}
