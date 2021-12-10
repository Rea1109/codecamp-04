import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { accessToken } = useContext(GlobalContext);
  console.log(accessToken);

  return (
    <>
      <div>
        <h3>로그인에 성공하셨습니다.</h3>
        <span>{data?.fetchUserLoggedIn.name} 님 환영합니다.</span>
      </div>
    </>
  );
}
