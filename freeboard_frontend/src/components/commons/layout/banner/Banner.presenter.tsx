import * as S from "./Banner.styles";
import Slider from "react-slick";

export default function BannerUI() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
  };
  return (
    <S.Banner>
      <Slider {...settings}>
        <S.SliderDiv>
          <S.Image src="/images/board/bg-1.jpg" />
        </S.SliderDiv>
        <S.SliderDiv>
          <S.Image src="/images/board/bg-2.jpg" />
        </S.SliderDiv>
        <S.SliderDiv>
          <S.Image src="/images/board/bg-3.jpg" />
        </S.SliderDiv>
      </Slider>
    </S.Banner>
  );
}
