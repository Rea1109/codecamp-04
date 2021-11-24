import * as S from "./Header.styles";
import { Modal } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

export default function HeaderUI() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    Modal.success({ title: "Hello" });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeInput = () => {};

  return (
    <S.Header>
      <S.Label>
        {" "}
        <S.Logo style={{ color: "gold", marginRight: "10px" }}>
          &#91; &#93;
        </S.Logo>{" "}
        devNote.rea
      </S.Label>
      <S.BtnWrapper>
        <S.SigninBtn onClick={showModal}>Sign in</S.SigninBtn>
        <S.SignupBtn
          onClick={() => {
            router.push("/user/signup");
          }}
        >
          Sign up
        </S.SignupBtn>
      </S.BtnWrapper>
      <Modal
        title="Sign in"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <S.SignupFormWrapper>
          <S.SignInInput
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={onChangeInput}
          />
          <S.SignInInput
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChangeInput}
          />
        </S.SignupFormWrapper>
      </Modal>
    </S.Header>
  );
}
