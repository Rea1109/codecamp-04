import * as S from "./Header.styles";
import { Drawer, Modal } from "antd";
import { useState } from "react";

export default function HeaderUI() {
  const [visible, setVisible] = useState(false);
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

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onClickAdd = () => {
    Modal.success({ title: "Welcome" });
  };

  return (
    <S.Header>
      <S.Label>FreeBoard</S.Label>
      <S.BtnWrapper>
        <S.SigninBtn onClick={showModal}>Sign in</S.SigninBtn>
        <S.SignupBtn onClick={showDrawer}>Sign up</S.SignupBtn>
      </S.BtnWrapper>
      <Drawer
        title="Welcome FreeBoard !"
        placement="right"
        onClose={onClose}
        visible={visible}
        style={{ fontFamily: "mainFont" }}
      >
        <S.SignupFormWrapper>
          <S.InnerWrapper>
            <S.InputBox type="text" placeholder="E-mail" />
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.InputBox type="text" placeholder="Name" />
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.InputBox type="password" placeholder="Password" />
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.InputBox type="password" placeholder="Password Again" />
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.SelectBox>
              <option selected disabled>
                LOCATION
              </option>
              <option>SEOUL</option>
              <option>Gyeonggi-do</option>
              <option>Incheon</option>
            </S.SelectBox>
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.SelectBox>
              <option selected disabled>
                GENDER
              </option>
              <option>WOMEN</option>
              <option>MEN</option>
            </S.SelectBox>
          </S.InnerWrapper>
          <S.InnerWrapper>
            <S.AddBtn onClick={onClickAdd}>Sign up</S.AddBtn>
          </S.InnerWrapper>
        </S.SignupFormWrapper>
      </Drawer>
      <Modal
        title="Sign in"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <S.SignupFormWrapper>
          <S.SignInInput type="text" placeholder="E-mail" />
          <S.SignInInput type="password" placeholder="Password" />
        </S.SignupFormWrapper>
      </Modal>
    </S.Header>
  );
}
