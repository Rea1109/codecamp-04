import {useRouter} from 'next/router'
import {useMutation, useQuery} from '@apollo/client'
import {FETCH_BOARD,DELETE_BOARD, LIKE_BOARD,DISLIKE_BOARD} from './BoardGet.queries'
import BoardGetUI from './BoardGet.presenter'
import { useState } from 'react'

export default function BoardGet() {
    const router = useRouter()

    const [isModal,setIsModal] = useState(false)

    const {data} = useQuery(FETCH_BOARD,{variables:{boardId : router.query.boardId}})
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [likeBoard] = useMutation(LIKE_BOARD)
    const [dislikeBoard] = useMutation(DISLIKE_BOARD)

    const onClickLike = async (e)=>{
        try{
            await likeBoard({
                variables:{boardId:e.target.id},
                refetchQueries: [{ query:FETCH_BOARD, variables:{boardId :e.target.id} }]
            })
        }catch(error){
            console.log(error.message)
        }
    }

    const onClickDislike = async (e)=>{
        try{
            await dislikeBoard({
                variables:{boardId:e.target.id},
                refetchQueries: [{ query:FETCH_BOARD, variables:{boardId :e.target.id} }]
            })
        }catch(error){
            console.log(error.message)
        }
    }

    const onClickUpdate = ()=> (router.push(`/boards/${router.query.boardId}/edit`))
    const onClickList = ()=> (router.push(`/boards`))
    const onClickDelete = async(e)=> {
        try{
            await deleteBoard({variables:{boardId : e.target.id}})
            alert("게시물이 삭제되었습니다.")
            router.push(`/boards`)
        }catch(error){
            console.log(error.message)
        }
    }
    
    // const onModal = ()=> isModal?setIsModal(false):setIsModal(true)
    
    const onModal = ()=> {
        isModal?setIsModal(false):setIsModal(true)
        console.log(isModal)
    }    
    return(
        <BoardGetUI
            id = {data?.fetchBoard._id} 
            writer = {data?.fetchBoard.writer}
            createdAt = {data?.fetchBoard.createdAt}
            title = {data?.fetchBoard.title}
            contents = {data?.fetchBoard.contents}
            likeCount = {data?.fetchBoard.likeCount}
            dislikeCount = {data?.fetchBoard.dislikeCount}
            address = {data?.fetchBoard.boardAddress.address}
            addressDetail = {data?.fetchBoard.boardAddress.addressDetail}
            zipcode = {data?.fetchBoard.boardAddress.zipcode}
            isModal = {isModal}
            onClickList = {onClickList}
            onClickUpdate ={onClickUpdate}
            onClickDelete = {onClickDelete}
            onClickLike ={onClickLike}
            onClickDislike ={onClickDislike}
            onModal = {onModal}
        />
    )
}