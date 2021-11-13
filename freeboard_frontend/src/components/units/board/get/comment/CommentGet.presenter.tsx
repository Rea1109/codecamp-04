import { ChangeEvent } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "./CommentGet.styles";

interface ICommentGetUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  addComment: () => void;
  onClickDelete: (event: MouseEvent) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  input: string[];
}

export default function CommentGetUI(props: ICommentGetUI) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.Head>
          <S.HeadImg src="/images/comment.png" />
          <S.HeadLable>댓글</S.HeadLable>
        </S.Head>
        <S.CommnetWriter>
          <S.InfoInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.input[0]}
          />
          <S.InfoInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.input[1]}
          />
          <S.Star src="/images/on-star.png" />
          <S.Star src="/images/on-star.png" />
          <S.Star src="/images/on-star.png" />
          <S.Star src="/images/on-star.png" />
          <S.Star src="/images/on-star.png" />
        </S.CommnetWriter>
        <S.CommentContent>
          <S.Content
            placeholder="내용"
            onChange={props.onChangeContents}
            value={props.input[2]}
          />
          <S.CommentContentFooter>
            <S.TextCount>0 / 100</S.TextCount>
            <S.AddBtn onClick={props.addComment}>등록하기</S.AddBtn>
            {/* <S.UpdateBtn>수정하기</S.UpdateBtn> */}
          </S.CommentContentFooter>
        </S.CommentContent>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.CommentList key={el._id}>
            <S.Comment>
              <S.WriterImg src="/images/profile.png" />
              <S.CommentInner>
                <S.CommentHead>
                  <S.CommnetWriterLabel>{el.writer}</S.CommnetWriterLabel>
                  <S.Star src="/images/on-star.png" />
                  <S.Star src="/images/on-star.png" />
                  <S.Star src="/images/on-star.png" />
                  <S.Star src="/images/on-star.png" />
                  <S.Star src="/images/on-star.png" />
                </S.CommentHead>
                <S.CommentBody>{el.contents}</S.CommentBody>
                <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
              </S.CommentInner>
            </S.Comment>
            <S.CommnetMenu>
              <S.MenuBtn>
                <S.MenuImg src="/images/pen.png" />
              </S.MenuBtn>
              <S.MenuBtn>
                <S.MenuImg
                  src="/images/delete.png"
                  onClick={props.onClickDelete}
                  id={el._id}
                />
              </S.MenuBtn>
            </S.CommnetMenu>
          </S.CommentList>
        ))}
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
