import * as S from "./BoardList.styles";
import { getDate, remakeTitle } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import { DatePicker } from "antd";
import moment from "moment";

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
        <div>
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
          <S.BoardRowHead>
            <S.ColumnNumber>번호</S.ColumnNumber>
            <S.ColumnTitleHead>제목</S.ColumnTitleHead>
            <S.ColumnWriter>작성자</S.ColumnWriter>
            <S.ColumnDate>날짜</S.ColumnDate>
          </S.BoardRowHead>
          {props.boards?.fetchBoards.map((el: any, idx: number) => (
            <S.BoardRow key={el._id}>
              <S.ColumnNumber>{idx + 1}</S.ColumnNumber>
              <S.ColumnTitle onClick={props.onClickGetBoard} id={el._id}>
                {el.title}
              </S.ColumnTitle>
              <S.ColumnWriter>{el.writer}</S.ColumnWriter>
              <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
            </S.BoardRow>
          ))}
          <S.Bottom>
            <S.AddBtn onClick={props.onClickNew}>게시물 등록하기</S.AddBtn>
          </S.Bottom>
        </div>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
