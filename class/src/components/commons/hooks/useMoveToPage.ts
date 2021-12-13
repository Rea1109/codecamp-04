import { useRouter } from "next/router";

type IPage = "/boards" | "/markets" | "/mypage";

export function useMoveToPage() {
  const router = useRouter();
  const moveToPage = (page: IPage) => () => {
    router.push(page);
  };
  return {
    moveToPage,
  };
}
