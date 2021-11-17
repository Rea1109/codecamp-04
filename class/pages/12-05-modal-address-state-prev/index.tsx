import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import { useState } from "react";

export default function ModalAddressPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.addressEnglish);
    setMyZonecode(data.zonecode);
    setIsModalVisible((prev) => !prev);
    document.getElementById("Detail")?.focus();
  };

  return (
    <>
      <Button onClick={onToggleModal}>search post</Button>
      <div>address : {myAddress}</div>
      <div>zoncode : {myZonecode}</div>
      <div>
        addressDetail : <input id="Detail" type="text" />
      </div>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
