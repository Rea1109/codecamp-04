import * as S from "./BoardGet.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardGetUIProps } from "./BoardGet.types";
import { Tooltip, Image } from "antd";
import { useState } from "react";

export default function BoardGetUI(props: IBoardGetUIProps) {
  const [visible, setVisible] = useState(false);
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
            {props.data?.fetchBoard.youtubeUrl && (
              <Tooltip title={props.data?.fetchBoard.youtubeUrl}>
                <S.AddFileIcon src="/images/board/addFile.png" />
              </Tooltip>
            )}

            {!props.data?.fetchBoard.youtubeUrl && (
              <Tooltip title="등록된 링크가 없습니다.">
                <S.AddFileIcon src="/images/board/addFile.png" />
              </Tooltip>
            )}

            {props.data?.fetchBoard.boardAddress?.address && (
              <Tooltip title={props.data?.fetchBoard.boardAddress?.address}>
                <S.AddrIcon src="/images/board/location.png" />
              </Tooltip>
            )}
            {!props.data?.fetchBoard.boardAddress?.address && (
              <Tooltip title="등록된 주소가 없습니다.">
                <S.AddrIcon src="/images/board/location.png" />
              </Tooltip>
            )}
          </S.HeadMenu>
        </S.HeadWrapper>
        <S.InnerWrapper>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.ContentWrapper>
            <S.ContentImg>
              {props.data?.fetchBoard.images?.[0] ? (
                <Image
                  preview={{ visible: false }}
                  width={500}
                  height={300}
                  src={`https://storage.googleapis.com/${props.data?.fetchBoard.images?.[0]}`}
                  onClick={() => setVisible(true)}
                  // onError={props.handelError}
                />
              ) : (
                <S.VideoAlt>No Image</S.VideoAlt>
              )}

              <div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                  }}
                >
                  {props.data?.fetchBoard.images?.map((el) => (
                    <Image
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
                </Image.PreviewGroup>
              </div>
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
                  controls={true}
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
        <S.Menu type="button" value="수정하기" onClick={props.onClickUpdate} />
        <S.Menu type="button" value="삭제하기" onClick={props.onClickDelete} />
      </S.MenuWrapper>
    </S.Wrapper>
  );
}
