import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "../write/CommentWrite.styles";
import CommentListUIItem from "./CommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

interface ICommentListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export default function CommentListUI(props: ICommentListUI) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        {props.data?.fetchBoardComments && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.data?.fetchBoardComments.map((el: any) => (
              <CommentListUIItem key={el._id} el={el} />
            ))}
          </InfiniteScroll>
        )}
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
