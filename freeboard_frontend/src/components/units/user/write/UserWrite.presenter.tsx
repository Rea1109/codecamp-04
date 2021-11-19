import * as S from "./UserWrite.styles";
import Radio from "@mui/material/Radio";

interface IUserWirteUIProps {
  isHidden: boolean;
}

const test;

export default function UserWriteUI(props: IUserWirteUIProps) {
  return (
    <S.Wrapper>
      <S.FromWrapper>
        <S.Title>
          <S.Logo> &#91; &#93;</S.Logo>
          <S.Title>devNote.rea</S.Title>
        </S.Title>
        <S.InnerWrapper>
          <S.InputBox type="text" placeholder="email를 입력해 주세요" />
          <S.Error isHidden={props.isHidden}>
            이메일이 올바르지 않습니다.
          </S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.InputBox type="text" placeholder="이름을 입력해 주세요" />
          <S.Error isHidden={props.isHidden}>이름이 올바르지 않습니다.</S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.InputBox type="password" placeholder="비밀번호를 입력해 주세요" />
          <S.Error isHidden={props.isHidden}>비밀번호를 입력해주세요.</S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.InputBox
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
          />
          <S.Error isHidden={props.isHidden}>
            비밀번호를 다시 입력해주세요.
          </S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.PhoneWrapper>
            <S.PhoneSelect>
              <option>011</option>
              <option selected>010</option>
              <option>017</option>
            </S.PhoneSelect>
            <S.PhoneInput />
            <S.PhoneInput />
          </S.PhoneWrapper>
          <S.Error isHidden={props.isHidden}>
            전화번호를 다시 입력해주세요.
          </S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.AuthWrapper>
            <S.Number readOnly value={"000000"} />
            <S.AuthBtn>인증번호전송</S.AuthBtn>
          </S.AuthWrapper>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.AuthWrapper>
            <S.Number readOnly value={"00 : 00"} />
            <S.AuthBtn>인증확인</S.AuthBtn>
          </S.AuthWrapper>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.Loaction>
            <option selected disabled>
              지역을 선택하세요
            </option>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option>
          </S.Loaction>
          <S.Error isHidden={props.isHidden}>지역을 선택해주세요.</S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.GenderWrapper>
            <Radio
              name="gender"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
                color: "#c7bba9",
                "&.Mui-checked": {
                  color: "#c7bba9",
                },
              }}
            />
            <S.Gender>여성</S.Gender>

            <Radio
              name="gender"
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
                color: "#c7bba9",
                "&.Mui-checked": {
                  color: "#c7bba9",
                },
              }}
            />
            <S.Gender>남성</S.Gender>
          </S.GenderWrapper>
          <S.Error isHidden={props.isHidden}> 성별을 선택해주세요.</S.Error>
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.AddBtn>가입하기</S.AddBtn>
        </S.InnerWrapper>
      </S.FromWrapper>
    </S.Wrapper>
  );
}
