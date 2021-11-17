import { Drawer, Button } from "antd";
import { useState } from "react";

export default function Testpage() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const move = () => {
    alert("라우터 넣어서 이동");
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} hidden={false}>
        Open
      </Button>

      <Drawer
        title="Main menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>
          <button onClick={move}>목록으로.....</button>
        </p>
        <p>
          <button onClick={move}>수정으로.....</button>
        </p>
        <p>
          <button onClick={move}>회원가입으로.....</button>
        </p>
      </Drawer>
    </>
  );
}
