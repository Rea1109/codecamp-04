import BoardGet from "../../../src/components/units/board/get/BoardGet.container";
import CommentPage from "../../../src/components/units/board/get/comment/CommentGet.container";

export default function GetBoardPage() {
  return (
    <div>
      <BoardGet />
      <CommentPage />
    </div>
  );
}
