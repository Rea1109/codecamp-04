import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();

  if (isLoading) return <></>;
  return (
    <>
      <div>Custom Hooks 연습 - 권한분기</div>
    </>
  );
}
