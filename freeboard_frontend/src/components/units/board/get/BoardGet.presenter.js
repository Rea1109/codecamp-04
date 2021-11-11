import * as S from './BoardGet.styles'
import { getDate } from '../../../../commons/libraries/utils'

export default function BoardGetUI(props) {

    return(
        <S.Wrapper>
            <S.BoardWrapper>
                <S.HeadWrapper>
                    <S.Profile>
                        <S.PhotoIcon src="/images/profile.png" />
                        <S.Name>
                            <S.Maintext>{props.writer}</S.Maintext>
                            <S.Subtext>Date : {getDate(props.createdAt)}</S.Subtext>
                        </S.Name>
                    </S.Profile>
                    <S.HeadMenu>
                        <S.AddFileIcon src="/images/addFile.png" />
                        <S.AddrIcon onClick={props.onModal} src="/images/ic_location_on-32px.png" />
                        <S.Modal isModal={props.isModal} >{props.address} {props.addressDetail}</S.Modal>
                    </S.HeadMenu>
                </S.HeadWrapper>
                <S.InnerWrapper>
                    <S.Title>{props.title}</S.Title>
                    <S.ContentWrapper>
                        <S.ContentImg>
                            <S.Img src="/images/image.png" />
                        </S.ContentImg>
                        <S.Content>
                            <S.Text>{props.contents}</S.Text>
                        </S.Content>
                        <S.ContentVideo>
                            <S.Video src="/images/video.png" />
                        </S.ContentVideo>
                    </S.ContentWrapper>
                </S.InnerWrapper>
                <S.LikeWrapper>
                    <S.Like>
                        <S.LikeImg onClick={props.onClickLike} id={props.id} src="/images/Vector.png" />
                        <S.LikeCount>{props.likeCount}</S.LikeCount>
                    </S.Like>
                    <S.Like>
                        <S.LikeImg onClick={props.onClickDislike} id={props.id} src="/images/dislike.png" />
                        <S.DisLikeCount>{props.dislikeCount}</S.DisLikeCount>
                    </S.Like>
                </S.LikeWrapper>
            </S.BoardWrapper>
            <S.MenuWrapper>
                <S.Menu type="button" value="목록으로" onClick={props.onClickList}/>
                <S.Menu type="button" value="수정하기" onClick={props.onClickUpdate}/>
                <S.Menu type="button" id={props.id} value="삭제하기" onClick={props.onClickDelete}/>
            </S.MenuWrapper>
        </S.Wrapper>
    )
}