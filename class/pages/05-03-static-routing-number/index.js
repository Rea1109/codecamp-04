import { useRouter } from "next/router";

export default function StaticRoutingNumberPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-04-static-routed-number/1");
  };
  const onClickMove2 = () => {
    router.push("/05-04-static-routed-number/2");
  };
  const onClickMove3 = () => {
    router.push("/05-04-static-routed-number/3");
  };

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </>
  );
}
