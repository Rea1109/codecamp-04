import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const CDiv = styled.div`
  height: 350px;
`;

const Image = styled.img`
  width: 100%;
`;

export default function CarouselPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <CDiv>
          <Image src="/images/background-1.jpg" />
        </CDiv>
        <CDiv>
          <Image src="/images/background-2.jpg" />
        </CDiv>
        <CDiv>
          <Image src="/images/background-3.jpg" />
        </CDiv>
      </Slider>
    </>
  );
}
