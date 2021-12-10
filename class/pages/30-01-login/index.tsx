import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
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
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
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

    // 여기서 setAccesToken 로컬스토리지에 리프레쉬 토큰 발급 유무도 넣어두기
    localStorage.setItem("refreshToken", "true");
    setAccessToken?.(result.data?.loginUserExample.accessToken || "");
    router.push("/30-02-login-success");
  };
  return (
    <>
      이메일 : <input type="text" onChange={onChageEmail} />
      비밀번호 : <input type="password" onChange={onChagePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
