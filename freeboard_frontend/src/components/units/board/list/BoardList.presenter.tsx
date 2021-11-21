import * as S from "./BoardList.styles";
import {
  getDate,
  remakeContents,
  remakeTitle,
} from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import { DatePicker } from "antd";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListUI(props: IBoardListUIProps) {
  const { RangePicker } = DatePicker;
  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.MainTitle>Best of Board</S.MainTitle>
        <S.Header>
          <S.Row>
            {props.best?.fetchBoardsOfTheBest.map((el: any) => (
              <S.BoardCard key={el._id}>
                <S.BoardImg src="/images/board/bg-3.jpg" />
                <S.BoardBody>
                  <S.BestTitle onClick={props.onClickGetBoard} id={el._id}>
                    {remakeTitle(el.title)}
                  </S.BestTitle>
                  <S.BestInfo>
                    <S.Profile>
                      <S.BestWriter>
                        <S.ProfileImg src="/images/board/profile.png" />
                        <S.ProfileLabel>{el.writer}</S.ProfileLabel>
                      </S.BestWriter>
                      <S.BestDate>Date : {getDate(el.createdAt)}</S.BestDate>
                    </S.Profile>
                    <S.Like>
                      <img src="/images/board/like.png" />
                      <S.LikeCount>{el.likeCount}</S.LikeCount>
                    </S.Like>
                  </S.BestInfo>
                </S.BoardBody>
              </S.BoardCard>
            ))}
          </S.Row>
        </S.Header>
        <S.Row>
          <S.SearchTitle
            onChange={props.onChangeSearchInput}
            type="text"
            placeholder="제목 검색"
          />
          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              "This Month": [
                moment().startOf("month"),
                moment().endOf("month"),
              ],
            }}
            onChange={props.onChangeDate}
          />
          <S.SearchBtn onClick={props.onClickSearch}>검색하기</S.SearchBtn>
        </S.Row>
        <div style={{ height: "800px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            <S.Row
              style={{
                justifyContent: "flex-start",
                flexWrap: "wrap",
                paddingLeft: "40px",
              }}
            >
              {props.boards?.fetchBoards.map((el) => (
                <S.BoardCard
                  key={el._id}
                  style={{
                    width: "266px",
                    height: "300px",
                    marginTop: "10px",
                    marginBottom: "55px",
                    marginRight: "20px",
                  }}
                >
                  <S.BoardBody>
                    <S.BestTitle
                      onClick={props.onClickGetBoard}
                      id={el._id}
                      style={{ marginBottom: "50px", fontSize: "23px" }}
                    >
                      {remakeTitle(el.title)}
                    </S.BestTitle>
                    <div
                      style={{
                        textAlign: "left",
                        marginBottom: "60px",
                        fontSize: "18px",
                        color: "#828282",
                      }}
                    >
                      {remakeContents(el.contents)}
                    </div>
                    <S.BestInfo>
                      <S.Profile>
                        <S.BestWriter>
                          <S.ProfileImg src="/images/board/profile.png" />
                          <S.ProfileLabel>{el.writer}</S.ProfileLabel>
                        </S.BestWriter>
                        <S.BestDate>Date : {getDate(el.createdAt)}</S.BestDate>
                      </S.Profile>
                      <S.Like>
                        <img src="/images/board/like.png" />
                        <S.LikeCount>{el.likeCount}</S.LikeCount>
                      </S.Like>
                    </S.BestInfo>
                  </S.BoardBody>
                </S.BoardCard>
              ))}
            </S.Row>
          </InfiniteScroll>
        </div>
        <S.Bottom>
          <S.AddBtn onClick={props.onClickNew}>게시물 등록하기</S.AddBtn>
        </S.Bottom>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
