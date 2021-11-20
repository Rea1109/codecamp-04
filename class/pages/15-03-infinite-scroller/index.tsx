import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data?.fetchBoards.map((el) => (
            <div
              key={el._id}
              style={{
                border: "2px solid gold",
                width: "400px",
                height: "200px",
                margin: "30px",
              }}
            >
              <div>{el.writer}</div>
              <div>{el.title}</div>
              <div>{el.contents}</div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
