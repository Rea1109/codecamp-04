import * as S from "./Header.styles";
import { Modal } from "antd";
import { ChangeEvent } from "react";

interface IHeaderUI {
  isModalVisible: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onMoveSignup: () => void;
}

export default function HeaderUI(props: IHeaderUI) {
  return (
    <S.Header>
      <S.Label>
        <S.Logo style={{ color: "gold", marginRight: "10px" }}>
          &#91; &#93;
        </S.Logo>
        devNote.rea
      </S.Label>
      <S.BtnWrapper>
        <S.SigninBtn onClick={props.showModal}>Sign in</S.SigninBtn>
        <S.SignupBtn onClick={props.onMoveSignup}>Sign up</S.SignupBtn>
      </S.BtnWrapper>
      {props.isModalVisible && (
        <Modal
          title="Sign in"
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <S.SignupFormWrapper>
            <S.SignInInput
              type="text"
              placeholder="E-mail"
              name="email"
              onChange={props.onChangeInput}
            />
            <S.SignInInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={props.onChangeInput}
            />
          </S.SignupFormWrapper>
        </Modal>
      )}
    </S.Header>
  );
}
