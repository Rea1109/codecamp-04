import { ChangeEvent, useContext, useState } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
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

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const client = useApolloClient(); // 하는짓이 axios다 라고 봐도 무관

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
    const accessToken = result.data?.loginUser.accessToken;
    localStorage.setItem("accessToken", accessToken || "");
    // 여기서 setAccesToken , 글로벌 스테이트에 담는다. 중요한건 지금 이순간에는 담기는게 아니다
    // 그래서 밑에서 강제로 헤더 추가하는거임
    setAccessToken?.(accessToken || "");

    // fetchUserLoggedIn 로그인한 사용자 정보를 받아와서 글로벌 스테이트에 넣기
    // 하지만 Hook 인 useQuery 는 함수안에서 사용 불가
    // axios 처럼 원하는 곳에서 useQuery가 필요 => useApolloClient

    // headers
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    setUserInfo?.(resultUserInfo.data.fetchUserLoggedIn);

    router.push("/24-02-login-success");
  };

  return (
    <>
      <input type="text" onChange={onChageEmail} />
      <input type="password" onChange={onChagePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
