import * as S from "./CommentWrite.styles";
import { Rate } from "antd";
import { ChangeEvent } from "react";

interface ICommentWriterUI {
  onClickAdd: () => void;
  onClickCancle: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRate: (value: number) => void;
  rate: number;
  isEdit?: boolean;
  el?: any;
  contents: string;
  writer: string;
  password: string;
}

export default function CommentWriteUI(props: ICommentWriterUI) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        {!props.isEdit && (
          <S.Head>
            <S.HeadImg src="/images/board/comment.png" />
            <S.HeadLable>댓글</S.HeadLable>
          </S.Head>
        )}
        <S.CommnetWriter>
          <S.InfoInput
            type="text"
            onChange={props.onChangeWriter}
            readOnly={props.el}
            placeholder={props.isEdit ? props.el.writer : "작성자"}
            value={props.writer}
          />
          <S.InfoInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          />
          <Rate
            onChange={props.onChangeRate}
            defaultValue={props.isEdit ? props.el.rating : props.rate}
          />
        </S.CommnetWriter>
        <S.CommentContent>
          <S.Content
            onChange={props.onChangeContents}
            maxLength={49}
            placeholder={
              props.isEdit
                ? props.el?.contents
                : "댓글은 띄어쓰기 포함 최대 50자까지 작성 가능합니다."
            }
            value={props.contents}
          />
          <S.CommentContentFooter>
            <S.TextCount> {props.contents.length}/ 50</S.TextCount>
            <S.BtnWrapper>
              {!props.isEdit ? (
                <S.AddBtn onClick={props.onClickAdd}>등록하기</S.AddBtn>
              ) : (
                <>
                  <S.CancleBtn onClick={props.onClickCancle}>
                    취소하기
                  </S.CancleBtn>
                  <S.UpdateBtn onClick={props.onClickUpdate}>
                    수정하기
                  </S.UpdateBtn>
                </>
              )}
            </S.BtnWrapper>
          </S.CommentContentFooter>
        </S.CommentContent>
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
