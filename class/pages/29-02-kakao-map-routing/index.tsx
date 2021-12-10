import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("29-03-kakao-map-routed")}>
        router로 이동하기
      </button>
      <a href="http://localhost:3000/29-03-kakao-map-routed">
        a태그로 이동하기
      </a>
    </>
  );
}
