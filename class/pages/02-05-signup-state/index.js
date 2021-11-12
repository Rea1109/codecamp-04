import { useState } from "react";

export default function SingupStatePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  function getEmail(event) {
    // event.target 해당 태그 가지고 옴
    setEmail(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function getInfo() {
    console.log("email :" + email);
    console.log("password :" + password);

    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다.");
    }
  }

  return (
    <div>
      이메일 입력 : <input type="text" onChange={getEmail} /> <br />
      <div>{emailError}</div>
      비밀번호 입력 : <input type="password" onChange={getPassword} /> <br />
      <button onClick={getInfo}>회원가입</button>
    </div>
  );
}
