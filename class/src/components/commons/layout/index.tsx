import { ReactChild } from "react";
import styled from "@emotion/styled";
// import Header from "./header/Header.container";
// import Banner from "./banner/Banner.container";
// import Navigation from "./navigation/Navigation.container";
// import Footer from "./footer/Footer.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;
const Body = styled.div`
  width: 100%;
`;
const BodyWrapper = styled.div`
  display: flex;
`;
// const Sidebar = styled.div`
//   width: 200px;
//   height: 700px;
//   background-color: gray;
// `;

// const HIDDEN_HEADERS = ["/12-05-modal-address-state-prev", "/12-04-state-prev"];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {/* {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation /> */}
      <BodyWrapper>
        {/* <Sidebar>This Sidebar</Sidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      {/* <Footer /> */}
    </Wrapper>
  );
}
