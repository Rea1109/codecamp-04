import {useRouter} from 'next/router'
import {useState} from 'react'
import { useMutation, useQuery ,gql } from '@apollo/client'
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
} from '../../../../styles/GetBoard.js'


const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            createdAt
        }
    }
`

export default function GetBoardPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId : router.query.boardId
        }
    })

    console.log(data)

    return(
        <Wrapper>
            <BoardWrapper>
                <HeadWrapper>
                    <Profile>
                        <PhotoIcon src="/images/profile.png" />
                        <Name>
                            <Maintext>{data ? data.fetchBoard.writer: "loading......"}</Maintext>
                            <Subtext>Date : {data ? data.fetchBoard.createdAt: "loading......"}</Subtext>
                        </Name>
                    </Profile>
                    <HeadMenu>
                        <AddFileIcon src="/images/addFile.png" />
                        <AddrIcon src="/images/ic_location_on-32px.png" />
                    </HeadMenu>
                </HeadWrapper>
                <InnerWrapper>
                    <Title>{data ? data.fetchBoard.title: "loading......"}</Title>
                    <ContentWrapper>
                        <ContentImg>
                            <Img src="/images/image.png" />
                        </ContentImg>
                        <Content>
                            <Text>{data ? data.fetchBoard.contents: "loading......"}</Text>
                        </Content>
                        <ContentVideo>
                            <Video src="/images/video.png" />
                        </ContentVideo>
                    </ContentWrapper>
                </InnerWrapper>
                <LikeWrapper>
                    <Like>
                        <LikeImg src="/images/Vector.png" />
                        <LikeCount>{data ? data.fetchBoard.likeCount: "loading......"}</LikeCount>
                    </Like>
                    <Like>
                        <LikeImg src="/images/dislike.png" />
                        <DisLikeCount>{data ? data.fetchBoard.dislikeCount: "loading......"}</DisLikeCount>
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