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

    const onClickLike = async (e:any)=>{
        try{
            await likeBoard({
                variables:{boardId:e.target.id},
                refetchQueries: [{ query:FETCH_BOARD, variables:{boardId :e.target.id} }]
            })
        }catch(error:any){
            console.log(error.message)
        }
    }

    const onClickDislike = async (e:any)=>{
        try{
            await dislikeBoard({
                variables:{boardId:e.target.id},
                refetchQueries: [{ query:FETCH_BOARD, variables:{boardId :e.target.id} }]
            })
        }catch(error:any){
            console.log(error.message)
        }
    }

    const onClickUpdate = ()=> (router.push(`/boards/${router.query.boardId}/edit`))
    const onClickList = ()=> (router.push(`/boards`))
    const onClickDelete = async(e:any)=> {
        try{
            await deleteBoard({variables:{boardId : e.target.id}})
            alert("게시물이 삭제되었습니다.")
            router.push(`/boards`)
        }catch(error:any){
            console.log(error.message)
        }
    }
    
    const onModal = ()=> {
        isModal?setIsModal(false):setIsModal(true)
        console.log(isModal)
    }    
    return(
        <BoardGetUI
            data = {data}
            addr = {data?.fetchBoard.boardAddress}
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