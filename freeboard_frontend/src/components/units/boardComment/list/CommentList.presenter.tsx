import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "../write/CommentWrite.styles";
import CommentListUIItem from "./CommentList.presenterItem";

interface ICommentListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
}

export default function CommentListUI(props: ICommentListUI) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <CommentListUIItem key={el._id} el={el} />
        ))}
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
