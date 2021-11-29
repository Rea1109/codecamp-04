import * as S from "./BoardWrite.styles";
import Head from "next/head";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <Head>
        <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      </Head>
      <S.Wrapper>
        <S.BoardWrapper>
          {!props.isEdit && <S.Title>게시글 등록</S.Title>}
          {props.isEdit && <S.Title>게시글 수정</S.Title>}
          <S.BodyWrapper>
            <S.AccountWrapper>
              <S.Writer>
                <S.Label>작성자</S.Label>
                <S.InputBox2
                  type="text"
                  placeholder="이름을 입력해주세요"
                  defaultValue={props.data?.fetchBoard.writer || ""}
                  readOnly={props.isEdit}
                  onChange={props.onChangeBoardInput}
                  name="writer"
                />
                <S.ErrorText>{props.errorWriter}</S.ErrorText>
              </S.Writer>
              <S.Writer>
                <S.Label>비밀번호</S.Label>
                <S.InputBox2
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={props.onChangeBoardInput}
                  name="password"
                />
                <S.ErrorText>{props.errorPassword}</S.ErrorText>
              </S.Writer>
            </S.AccountWrapper>
            <S.InputWrapper>
              <S.Label>제목</S.Label>
              <S.InputBox1
                type="text"
                placeholder="제목을 작성해주세요"
                defaultValue={props.data?.fetchBoard.title}
                onChange={props.onChangeBoardInput}
                name="title"
              />
              <S.ErrorText>{props.errorTitle}</S.ErrorText>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>내용</S.Label>
              <S.TextAreaBox
                placeholder="내용을 작성해주세요"
                defaultValue={props.data?.fetchBoard.contents}
                onChange={props.onChangeBoardInput}
                name="contents"
              />
              <S.ErrorText>{props.errorContent}</S.ErrorText>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>주소</S.Label>
              <S.Addr>
                <S.Post
                  type="text"
                  readOnly
                  placeholder={
                    props.data?.fetchBoard.boardAddress?.zipcode || ""
                  }
                  value={props.boardAddress.zipcode}
                />
                <S.PostBtn
                  type="button"
                  value="우편번호검색"
                  onClick={props.getAddr}
                />
              </S.Addr>
              <S.AddrBox
                type="text"
                placeholder={props.data?.fetchBoard.boardAddress?.address || ""}
                value={props.boardAddress.address}
                readOnly={true}
              />

              <S.AddrBox
                type="text"
                id="extraAddr"
                name="addressDetail"
                onChange={props.onChangeBoardAddress}
                placeholder={
                  props.data?.fetchBoard.boardAddress?.addressDetail ||
                  "상세주소를 입력해주세요"
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>유튜브</S.Label>
              <S.InputBox1
                type="text"
                name="youtubeUrl"
                onChange={props.onChangeBoardInput}
                defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>사진 첨부 </S.Label>
              {!props.isEdit ? (
                <S.ImgWrapper>
                  {props.myImages.map((el) => (
                    <S.ImgBox
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={props.onChangeFile}
                    ref={props.fileRef}
                  />
                  <S.AddImgBox
                    onClick={props.onClickMyImage}
                    src="/images/board/add-file.png"
                  />
                </S.ImgWrapper>
              ) : (
                <S.ImgWrapper>
                  {props.data?.fetchBoard.images?.map((el) => (
                    <S.ImgBox
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                  <input
                    style={{ display: "none" }}
                    type="file"
                    onChange={props.onChangeFile}
                    ref={props.fileRef}
                  />
                  <S.AddImgBox
                    onClick={props.onClickMyImage}
                    src="/images/board/add-file.png"
                  />
                </S.ImgWrapper>
              )}
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>메인 설정</S.Label>
              <S.SettingWrapper>
                <S.Setting>
                  <S.Radio type="radio" name="setMenu" />
                  <S.Label>유튜브</S.Label>
                </S.Setting>
                <S.Setting>
                  <S.Radio type="radio" name="setMenu" />
                  <S.Label>사진</S.Label>
                </S.Setting>
              </S.SettingWrapper>
            </S.InputWrapper>
            <S.BoardFunction>
              {!props.isEdit && (
                <S.ConfirmButton onClick={props.addBoard}>
                  등록하기
                </S.ConfirmButton>
              )}
              {props.isEdit && (
                <S.CancleButton onClick={props.getBoard}>
                  취소하기
                </S.CancleButton>
              )}
              {props.isEdit && (
                <S.ConfirmButton onClick={props.editBoard}>
                  수정하기
                </S.ConfirmButton>
              )}
            </S.BoardFunction>
          </S.BodyWrapper>
        </S.BoardWrapper>
      </S.Wrapper>
    </>
  );
}
