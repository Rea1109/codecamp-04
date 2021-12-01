import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChageEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChagePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    console.log(email, password);
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    console.log(result.data?.loginUser.accessToken);
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );
    setAccessToken?.(result.data?.loginUser.accessToken || ""); // 여기서 setAccesToken , 글로벌 스테이트에
    router.push("/23-05-login-success");
  };
  return (
    <>
      <input type="text" onChange={onChageEmail} />
      <input type="password" onChange={onChagePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
