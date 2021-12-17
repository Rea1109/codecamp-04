import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("픠젠터가 랜더링 됩니다.");
  return (
    <>
      <div>==========================</div>
      <div>이것은 프리젠터 입니다.</div>
      <div>==========================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
