import axios from "axios";
import { useState } from "react";

export default function ApiTestPage() {
  const [iconSrc, setIconSrc] = useState("");
  const fetchWeather = async () => {
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=de43835420dc373a9c635d81f90469e3"
    );
    console.log(result);

    setIconSrc(
      `http://openweathermap.org/img/w/${result.data.weather[0].icon}.png`
    );

    console.log(iconSrc);
  };

  return (
    <>
      <button onClick={fetchWeather}>날씨 테스트</button>
      <img src={iconSrc} style={{ width: "200px" }} />
    </>
  );
}
