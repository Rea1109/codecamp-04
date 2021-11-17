import * as S from "./BoardGet.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardGetUIProps } from "./BoardGet.types";

export default function BoardGetUI(props: IBoardGetUIProps) {
  return (
    <S.Wrapper>
      <S.BoardWrapper>
        <S.HeadWrapper>
          <S.Profile>
            <S.PhotoIcon src="/images/board/profile.png" />
            <S.Name>
              <S.Maintext>{props.data?.fetchBoard.writer}</S.Maintext>
              <S.Subtext>
                Date : {getDate(props.data?.fetchBoard.createdAt)}
              </S.Subtext>
            </S.Name>
          </S.Profile>
          <S.HeadMenu>
            <S.AddFileIcon src="/images/board/addFile.png" />
            <S.AddrIcon
              onClick={props.onModal}
              src="/images/board/location.png"
            />
            {props.data?.fetchBoard.boardAddress && (
              <S.Modal isModal={props.isModal}>
                {props.data?.fetchBoard.boardAddress?.address}{" "}
                {props.data?.fetchBoard.boardAddress?.addressDetail}
              </S.Modal>
            )}
            {!props.data?.fetchBoard.boardAddress && (
              <S.Modal isModal={props.isModal}>등록된 주소가 없습니다.</S.Modal>
            )}
          </S.HeadMenu>
        </S.HeadWrapper>
        <S.InnerWrapper>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.ContentWrapper>
            <S.ContentImg>
              <S.Img src="/images/board/boardImg.png" />
            </S.ContentImg>
            <S.Content>
              <S.Text>{props.data?.fetchBoard.contents}</S.Text>
            </S.Content>
            <S.ContentVideo>
              {props.data?.fetchBoard.youtubeUrl ? (
                <S.Video
                  url={props.data?.fetchBoard.youtubeUrl}
                  width={486}
                  height={270}
                  muted={true}
                  playing={true}
                  controls={true}
                  loop={true}
                />
              ) : (
                <S.VideoAlt>No Video</S.VideoAlt>
              )}
            </S.ContentVideo>
          </S.ContentWrapper>
        </S.InnerWrapper>
        <S.LikeWrapper>
          <S.Like>
            <S.LikeImg
              onClick={props.onClickLike}
              src="/images/board/like.png"
            />
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.Like>
          <S.Like>
            <S.LikeImg
              onClick={props.onClickDislike}
              src={"/images/board/dislike.png"}
            />
            <S.DisLikeCount>
              {props.data?.fetchBoard.dislikeCount}
            </S.DisLikeCount>
          </S.Like>
        </S.LikeWrapper>
      </S.BoardWrapper>
      <S.MenuWrapper>
        <S.Menu type="button" value="목록으로" onClick={props.onClickList} />
        <S.Menu type="button" value="수정하기" onClick={props.onClickUpdate} />
        <S.Menu type="button" value="삭제하기" onClick={props.onClickDelete} />
      </S.MenuWrapper>
    </S.Wrapper>
  );
}
