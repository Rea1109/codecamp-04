import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import { useState } from "react";

export default function ModalAddressPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.addressEnglish);
    setMyZonecode(data.zonecode);
    setIsModalVisible(false);
    document.getElementById("Detail")?.focus();
  };

  return (
    <>
      <Button onClick={showModal}>search post</Button>
      <div>address : {myAddress}</div>
      <div>zoncode : {myZonecode}</div>
      <div>
        addressDetail : <input id="Detail" type="text" />
      </div>
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
