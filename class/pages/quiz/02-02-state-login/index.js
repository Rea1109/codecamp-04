import {
  Wrapper,
  Header,
  Main,
  Marker,
  Title,
  Delete,
  InputBox,
  LoginBtn,
  SnsBtn,
  Nav,
  ErrorText,
  Menu,
} from "./login.js";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const resetEmail = () => {
    setEmail("");
  };

  const resetPassword = () => {
    setPassword("");
  };

  const login = () => {
    if (check()) {
      alert("회원가입을 축하합니다.");
    }
  };

  const check = () => {
    let isCheck = true;

    if (!email.includes("@") || email === "") {
      isCheck = false;
      setErrorEmail("이메일 확인 바람");
    } else {
      setErrorEmail("");
    }

    if (password.length < 8 || password === "") {
      isCheck = false;
      setErrorPassword("비밀번호 확인 바람");
    } else {
      setErrorPassword("");
    }

    return isCheck;
  };

  return (
    <Wrapper>
      <Header>
        <Marker src="/images/img-100-logo-white.png" />
        <Title>잇츠로드</Title>
      </Header>
      <Main>
        <div>
          <div>
            <InputBox type="text" onChange={getEmail} value={email} />{" "}
            <Delete onClick={resetEmail} src="/images/ic-20-delete-white.png" />
          </div>
          <ErrorText>{errorEmail}</ErrorText>
        </div>
        <div>
          <div>
            <InputBox type="password" onChange={getPassword} value={password} />{" "}
            <Delete
              onClick={resetPassword}
              src="/images/ic-20-delete-white.png"
            />
          </div>
          <ErrorText>{errorPassword}</ErrorText>
        </div>
        <div>
          <LoginBtn onClick={login}>로그인</LoginBtn>
        </div>
        <Nav>
          <Menu>이메일 찾기</Menu>
          <Menu>비밀번호 찾기</Menu>
          <Menu>회원가입</Menu>
        </Nav>
        <div>
          <SnsBtn>카카오톡으로 로그인</SnsBtn>
        </div>
      </Main>
    </Wrapper>
  );
}
