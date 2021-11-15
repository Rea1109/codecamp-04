import { ChangeEvent } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import { IQuery } from "../../../../../commons/types/generated/types";
import * as S from "./CommentGet.styles";

interface ICommentGetUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  addComment: () => void;
  onClickDelete: (event: MouseEvent) => void;
  onClickUpdateView: (event: MouseEvent) => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  input: string[];
  isEdit: boolean;
  updateId: string;
  textCount: number;
}

export default function CommentGetUI(props: ICommentGetUI) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.Head>
          <S.HeadImg src="/images/board/comment.png" />
          <S.HeadLable>댓글</S.HeadLable>
        </S.Head>
        {!props.isEdit && (
          <>
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
              <S.Star src="/images/board/on-star.png" />
              <S.Star src="/images/board/on-star.png" />
              <S.Star src="/images/board/on-star.png" />
              <S.Star src="/images/board/on-star.png" />
              <S.Star src="/images/board/on-star.png" />
            </S.CommnetWriter>
            <S.CommentContent>
              <S.Content
                placeholder="댓글은 띄어쓰기 포함 최대 50자까지 작성 가능합니다."
                onChange={props.onChangeContents}
                value={props.input[2]}
                maxLength={50}
              />
              <S.CommentContentFooter>
                <S.TextCount>{props.textCount} / 50</S.TextCount>
                <S.AddBtn onClick={props.addComment}>등록하기</S.AddBtn>
              </S.CommentContentFooter>
            </S.CommentContent>
          </>
        )}

        {/* 수정하기 화면 */}
        {props.isEdit &&
          props.data?.fetchBoardComments
            .filter((el) => el._id === props.updateId)
            .map((el: any) => (
              <div key={el._id}>
                <S.CommnetWriter>
                  <S.InfoInput
                    type="text"
                    placeholder="작성자"
                    onChange={props.onChangeWriter}
                    value={el.writer}
                    readOnly
                  />
                  <S.InfoInput
                    type="password"
                    placeholder="비밀번호"
                    onChange={props.onChangePassword}
                  />
                  <S.Star src="/images/board/on-star.png" />
                  <S.Star src="/images/board/on-star.png" />
                  <S.Star src="/images/board/on-star.png" />
                  <S.Star src="/images/board/on-star.png" />
                  <S.Star src="/images/board/on-star.png" />
                </S.CommnetWriter>
                <S.CommentContent>
                  <S.Content
                    placeholder="댓글은 띄어쓰기 포함 최대 50자까지 작성 가능합니다."
                    onChange={props.onChangeContents}
                    defaultValue={el.contents}
                    maxLength={50}
                  />
                  <S.CommentContentFooter>
                    <S.TextCount>{props.textCount} / 50</S.TextCount>
                    <S.UpdateBtn onClick={props.onClickUpdate}>
                      수정하기
                    </S.UpdateBtn>
                  </S.CommentContentFooter>
                </S.CommentContent>
              </div>
            ))}

        {props.data?.fetchBoardComments
          .filter((el) => el._id !== props.updateId)
          .map((el: any) => (
            <S.CommentList key={el._id}>
              <S.Comment>
                <S.WriterImg src="/images/board/profile.png" />
                <S.CommentInner>
                  <S.CommentHead>
                    <S.CommnetWriterLabel>{el.writer}</S.CommnetWriterLabel>
                    <S.Star src="/images/board/on-star.png" />
                    <S.Star src="/images/board/on-star.png" />
                    <S.Star src="/images/board/on-star.png" />
                    <S.Star src="/images/board/on-star.png" />
                    <S.Star src="/images/board/on-star.png" />
                  </S.CommentHead>
                  <S.CommentBody>{el.contents}</S.CommentBody>
                  <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
                </S.CommentInner>
              </S.Comment>
              <S.CommnetMenu>
                <S.MenuBtn>
                  <S.MenuImg
                    src="/images/board/pen.png"
                    onClick={props.onClickUpdateView}
                    id={el._id}
                  />
                </S.MenuBtn>
                <S.MenuBtn>
                  <S.MenuImg
                    src="/images/board/delete.png"
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
