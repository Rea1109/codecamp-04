import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 한 사람만 입장 가능, 로그인 먼저 해주세요");
      router.push("/23-04-login");
    } else {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
  };
}
