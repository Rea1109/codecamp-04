import * as S from "./GetUser.styles";

interface IGetUserUI {
  userEmail: string;
  userInfo: {
    name: string;
    password: string;
    email: string;
  };
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
            <S.ProfileName>{props.userInfo.name}</S.ProfileName>
            <S.ProfileEmail>{props.userEmail}</S.ProfileEmail>
          </S.ProfileInfo>
        </S.InnerWrapper>
      </S.FromWrapper>
    </S.Wrapper>
  );
}
