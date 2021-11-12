import Head from "next/head";
import {
  Wrapper,
  Search,
  Profile,
  ProfilePhoto,
  Nav,
  Body,
  Footter,
  Name,
  Title,
  NavMenu,
  SubText,
  MainText,
  Que,
  Ans,
  Qna,
  HomeIcon,
  Text,
  Slected,
  SelectedText,
  Img,
} from "../../../styles/faq.js";

export default function FaqPage() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <Wrapper>
        <Search>
          <img src="/images/ic-58-main-search-black.png" />
        </Search>
        <Profile>
          <Title>마이</Title>
          <ProfilePhoto>
            <div>
              <img src="/images/img-60-profile-image.png" />
            </div>
            <Name>
              임정아{" "}
              <Img>
                <img src="/images/ic-28-arrow.png" />
              </Img>
            </Name>
          </ProfilePhoto>
        </Profile>
        <Nav>
          <NavMenu>공지사항</NavMenu>
          <NavMenu>이벤트</NavMenu>
          <Slected>FAQ</Slected>
          <NavMenu>Q&amp;A</NavMenu>
        </Nav>
        <Body>
          <Qna>
            <Que>
              <SubText>Q1</SubText>
              <MainText>리뷰 작성은 어떻게 하나요?</MainText>
            </Que>
            <Ans>
              <img src="/images/ic-70-arrow-right.png" />
            </Ans>
          </Qna>

          <Qna>
            <Que>
              <SubText>Q2</SubText>
              <MainText>리뷰 수정/삭제는 어떻게 하나요?</MainText>
            </Que>
            <Ans>
              <img src="/images/ic-70-arrow-right.png" />
            </Ans>
          </Qna>

          <Qna>
            <Que>
              <SubText>Q3</SubText>
              <MainText>아이디/비밀번호를 잊어버렸어요.</MainText>
            </Que>
            <Ans>
              <img src="/images/ic-70-arrow-right.png" />
            </Ans>
          </Qna>

          <Qna>
            <Que>
              <SubText>Q4</SubText>
              <MainText>회원탈퇴를 하고 싶어요.</MainText>
            </Que>
            <Ans>
              <img src="/images/ic-70-arrow-right.png" />
            </Ans>
          </Qna>

          <Qna>
            <Que>
              <SubText>Q5</SubText>
              <MainText>출발지 설정은 어떻게 하나요?</MainText>
            </Que>
            <Ans>
              <img src="/images/ic-70-arrow-right.png" />
            </Ans>
          </Qna>

          <Qna>
            <Que>
              <SubText>Q6</SubText>
              <MainText>비밀번호를 변경하고 싶어요.</MainText>
            </Que>
            <Ans>
              <img src="/images/ic-70-arrow-right.png" />
            </Ans>
          </Qna>
        </Body>
        <Footter>
          <HomeIcon>
            <div>
              <img src="/images/ic-58-main-home-unselected.png" />
            </div>
            <Text>홈</Text>
          </HomeIcon>

          <HomeIcon>
            <div>
              <img src="/images/ic-58-main-location-unselected.png" />
            </div>
            <Text>잇츠로드</Text>
          </HomeIcon>

          <HomeIcon>
            <div>
              <img src="/images/ic-58-main-like-unselected.png" />
            </div>
            <Text>마이찜</Text>
          </HomeIcon>

          <HomeIcon>
            <div>
              <img src="/images/ic-58-main-my-selected.png" />
            </div>
            <SelectedText>마이</SelectedText>
          </HomeIcon>
        </Footter>
      </Wrapper>
    </div>
  );
}
