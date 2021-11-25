import * as S from "./GetUser.styles";
import { DocumentData } from "firebase/firestore/lite";

interface IGetUserUI {
  userInfo: DocumentData | undefined;
}

export default function GetUserUI(props: IGetUserUI) {
  console.log(props.userInfo);
  return (
    <S.Wrapper>
      <S.FromWrapper>
        <S.Title>
          <S.Logo> &#91; &#93;</S.Logo>
          <S.Title>MY PAGE</S.Title>
        </S.Title>
        <S.InnerWrapper>
          <S.ProfileImg src="/images/board/profile.png" />
          <S.ProfileInfo>
            <S.ProfileName>{props.userInfo?.name}</S.ProfileName>
            <S.ProfileEmail>{props.userInfo?.email}</S.ProfileEmail>
          </S.ProfileInfo>
        </S.InnerWrapper>
        <S.BtnWrapper>
          <S.FunctionBtn>비밀번호 변경하기</S.FunctionBtn>
          <S.FunctionBtn>회원 탈퇴하기</S.FunctionBtn>
        </S.BtnWrapper>
      </S.FromWrapper>
    </S.Wrapper>
  );
}
