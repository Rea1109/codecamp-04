import BoardGet from "../../../src/components/units/board/get/BoardGet.container";
import CommentWrite from "../../../src/components/units/boardComment/write/CommentWrite.container";
import CommentList from "../../../src/components/units/boardComment/list/CommentList.container";

export default function GetBoardPage() {
  return (
    <div>
      <BoardGet />
      <CommentWrite />
      <CommentList />
    </div>
  );
}
