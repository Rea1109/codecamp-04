import { Modal } from "antd";

export default function ModalAlertPage() {
  function onClickSuccess() {
    Modal.success({ content: "게시물등록 성공" });
  }

  const onClickFali = () => {
    Modal.error({ content: "게시물등록 실패" });
  };

  return (
    <>
      <button onClick={onClickSuccess}>
        알림창 나타나기 (성공했을때 메시지)
      </button>
      <button onClick={onClickFali}>알림창 나타나기 (실패했을때 메시지)</button>
    </>
  );
}
