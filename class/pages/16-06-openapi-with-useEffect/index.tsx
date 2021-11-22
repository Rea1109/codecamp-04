import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  interface IData {
    data: {
      message: string;
      status: string;
    };
  }

  const fetchDog = async () => {
    const result: IData = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    setDogUrl(result.data.message);
  };

  useEffect(() => {
    // const fetchDog = async () => {
    //   const result: IData = await axios.get(
    //     "https://dog.ceo/api/breeds/image/random"
    //   );
    //   setDogUrl(result.data.message);
    // };
    fetchDog();
  }, []);

  return (
    <>
      <div>오픈 API 연습</div>
      <img src={dogUrl} />
    </>
  );
}
