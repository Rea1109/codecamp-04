import * as S from "./Navigation.styles";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function NavigationUI() {
  const router = useRouter();

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
      </S.Navigation>
    </>
  );
}
