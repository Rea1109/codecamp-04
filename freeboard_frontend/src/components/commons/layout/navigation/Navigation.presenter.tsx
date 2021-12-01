import * as S from "./Navigation.styles";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { getTemp } from "../../../../commons/libraries/utils";

interface IWeatherInfo {
  cityName?: string;
  src?: string;
  humidity?: string;
  temp?: number;
  wind?: number;
  weather?: string;
}
export default function NavigationUI() {
  const router = useRouter();
  const [weatherInfo, setWeatherInfo] = useState<IWeatherInfo>({});

  const fetchWeather = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=${process.env.NEXT_PUBLIC_APP_KEY}`
    );
    console.log(result.data);

    setWeatherInfo({
      cityName: result.data.name,
      src: `http://openweathermap.org/img/w/${result.data.weather[0].icon}.png`,
      humidity: result.data.main.humidity,
      temp: result.data.main.temp,
      wind: result.data.wind.speed,
      weather: result.data.weather[0].description,
    });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  function info() {
    Modal.info({
      title: `${weatherInfo.cityName} Weather`,
      content: (
        <>
          <S.WeatherWraaperHead>
            <S.Img src={weatherInfo.src} />
            <S.WeatherLabel>{weatherInfo.weather}</S.WeatherLabel>
          </S.WeatherWraaperHead>
          <S.WeatherWraaper>
            <S.Icon src="/images/board/humidity.png" />
            <S.SubLabel>{weatherInfo.humidity} %</S.SubLabel>
          </S.WeatherWraaper>
          <S.WeatherWraaper>
            <S.Icon src="/images/board/temp.png" />
            <S.SubLabel>{getTemp(weatherInfo.temp || 0)} ℃</S.SubLabel>
          </S.WeatherWraaper>
          <S.WeatherWraaper>
            <S.Icon src="/images/board/wind.png" />
            <S.SubLabel>{weatherInfo.wind} m/s</S.SubLabel>
          </S.WeatherWraaper>
        </>
      ),
      onOk() {},
    });
  }

  return (
    <>
      <S.Navigation>
        <S.Menu onClick={() => router.push(`/boards`)}>FreeBoard</S.Menu>
        <S.Menu onClick={() => Modal.warning({ title: "준비중입니다." })}>
          Market
        </S.Menu>
        <S.Menu onClick={() => Modal.warning({ title: "준비중입니다." })}>
          My Info
        </S.Menu>
        <S.Menu onClick={info}>Today Weather</S.Menu>
      </S.Navigation>
    </>
  );
}
