import styled from "@emotion/styled";
import { ReactChild } from "react";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./navigation/Navigation.container";

const Wrapper = styled.div``;
const Body = styled.div``;

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Navigation />
      <Body>{props.children}</Body>
      <Footer />
    </Wrapper>
  );
}
