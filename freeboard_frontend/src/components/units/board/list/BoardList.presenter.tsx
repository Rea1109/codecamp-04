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
import { v4 as uuid } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  const { RangePicker } = DatePicker;
  return (
    <S.Wrapper>
      <S.ListWrapper>
        <S.MainTitle>Best of Board</S.MainTitle>
        <S.Header>
          <S.Row>
            {props.best?.fetchBoardsOfTheBest.map((el: any) => (
              <S.BestBoardCard key={el._id}>
                {el.images[0] ? (
                  <S.BoardImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                ) : (
                  <S.BoardImgError>No image</S.BoardImgError>
                )}

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
              </S.BestBoardCard>
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
        <S.BoardBodyWrapper>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            <S.BoardRow>
              {props.boards?.fetchBoards.map((el) => (
                <S.BoardCard key={el._id}>
                  <S.BoardBody>
                    <S.BoardTitle onClick={props.onClickGetBoard} id={el._id}>
                      {el.title
                        .replaceAll(
                          props.searchKeyword,
                          `!@#${props.searchKeyword}!@#`
                        )
                        .split("!@#")
                        .map((el) => (
                          <S.BoardTitleText
                            key={uuid()}
                            isKeyword={el === props.searchKeyword}
                          >
                            {el}
                          </S.BoardTitleText>
                        ))}
                    </S.BoardTitle>
                    <S.BoardContents>
                      {remakeContents(el.contents)}
                    </S.BoardContents>
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
            </S.BoardRow>
          </InfiniteScroll>
        </S.BoardBodyWrapper>
        <S.Bottom>
          <S.AddBtn onClick={props.onClickNew}>게시물 등록하기</S.AddBtn>
        </S.Bottom>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
