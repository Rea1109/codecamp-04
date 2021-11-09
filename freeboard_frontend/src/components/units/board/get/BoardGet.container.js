import {useRouter} from 'next/router'
import {useMutation, useQuery} from '@apollo/client'
import {FETCH_BOARD,DELETE_BOARD, LIKE_BOARD,DISLIKE_BOARD} from './BoardGet.queries'
import BoardGetUI from './BoardGet.presenter'

export default function BoardGet() {
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{variables:{boardId : router.query.boardId}})
    console.log(data)
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [likeBoard] = useMutation(LIKE_BOARD)
    const [dislikeBoard] = useMutation(DISLIKE_BOARD)

    const onClickUpdate = ()=> (alert("수정페이지 예정"))

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

    const onClickList = ()=> (router.push(`/boards/list`))
    const onClickDelete = async(e)=> {
        try{
            await deleteBoard({variables:{boardId : e.target.id}})
            alert("게시물이 삭제되었습니다.")
            router.push(`/boards/list`)
        }catch(error){
            console.log(error.message)
        }
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
            onClickList = {onClickList}
            onClickUpdate ={onClickUpdate}
            onClickDelete = {onClickDelete}
            onClickLike ={onClickLike}
            onClickDislike ={onClickDislike}
        />
    )
}