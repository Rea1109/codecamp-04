import {
    Wrapper
    ,BoardWrapper
    ,InnerWrapper
    ,HeadWrapper
    ,Profile
    ,Name
    ,Img
    ,Video
    ,LikeWrapper
    ,Title
    ,ContentWrapper
    ,Content
    ,Maintext
    ,Subtext
    ,HeadMenu
    ,AddFileIcon
    ,AddrIcon
    ,PhotoIcon
    ,ContentImg
    ,ContentVideo
    ,Like
    ,LikeImg
    ,LikeCount
    ,DisLikeCount
    ,Text
    ,MenuWrapper
    ,Menu
} from './BoardGet.styles'

export default function BoardGetUI(props) {

    return(
        <Wrapper>
            <BoardWrapper>
                <HeadWrapper>
                    <Profile>
                        <PhotoIcon src="/images/profile.png" />
                        <Name>
                            <Maintext>{props.writer}</Maintext>
                            <Subtext>Date : {props.createdAt}</Subtext>
                        </Name>
                    </Profile>
                    <HeadMenu>
                        <AddFileIcon src="/images/addFile.png" />
                        <AddrIcon src="/images/ic_location_on-32px.png" />
                    </HeadMenu>
                </HeadWrapper>
                <InnerWrapper>
                    <Title>{props.title}</Title>
                    <ContentWrapper>
                        <ContentImg>
                            <Img src="/images/image.png" />
                        </ContentImg>
                        <Content>
                            <Text>{props.contents}</Text>
                        </Content>
                        <ContentVideo>
                            <Video src="/images/video.png" />
                        </ContentVideo>
                    </ContentWrapper>
                </InnerWrapper>
                <LikeWrapper>
                    <Like>
                        <LikeImg src="/images/Vector.png" />
                        <LikeCount>{props.likeCount}</LikeCount>
                    </Like>
                    <Like>
                        <LikeImg src="/images/dislike.png" />
                        <DisLikeCount>{props.dislikeCount}</DisLikeCount>
                    </Like>
                </LikeWrapper>
            </BoardWrapper>
            <MenuWrapper>
                <Menu type="button" value="목록으로" />
                <Menu type="button" value="수정하기" />
                <Menu type="button" value="삭제하기" />
            </MenuWrapper>
        </Wrapper>
    )
}