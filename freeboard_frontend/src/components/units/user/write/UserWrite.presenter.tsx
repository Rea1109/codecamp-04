import * as S from "./UserWrite.styles";
import { ChangeEvent } from "react";

interface IUserWirteUIProps {
  isHidden: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  checkEmail: () => void;
}

export default function UserWriteUI(props: IUserWirteUIProps) {
  return (
    <S.Wrapper>
      <S.FromWrapper>
        <S.Title>
          <S.Logo> &#91; &#93;</S.Logo>
          <S.Title>devNote.rea</S.Title>
        </S.Title>
        <S.InnerWrapper>
          <S.InputBox
            type="text"
            name="email"
            onChange={props.onChangeInput}
            placeholder="email를 입력해 주세요"
          />
          <S.BtnWrapper>
            <S.CheckBtn onClick={props.checkEmail}>중복확인</S.CheckBtn>
          </S.BtnWrapper>
          <S.Error isHidden={props.isHidden}>
            이메일이 올바르지 않습니다.
          </S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.InputBox
            type="text"
            name="name"
            onChange={props.onChangeInput}
            placeholder="이름을 입력해 주세요"
          />
          <S.Error isHidden={props.isHidden}>이름이 올바르지 않습니다.</S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.InputBox
            type="password"
            name="password"
            onChange={props.onChangeInput}
            placeholder="비밀번호를 입력해 주세요"
          />
          <S.Error isHidden={props.isHidden}>비밀번호를 입력해주세요.</S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.AddBtn onClick={props.onClickSubmit}>가입하기</S.AddBtn>
        </S.InnerWrapper>
      </S.FromWrapper>
    </S.Wrapper>
  );
}
