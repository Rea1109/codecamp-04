import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import {FETCH_BOARD} from './BoardGet.queries'
import BoardGetUI from './BoardGet.presenter'

export default function BoardGet() {
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId : router.query.boardId
        }
    })

    const updateBoard = ()=>{
        router.push(`/boards/${router.query.boardId}/update`)
    }

    console.log(data)
    console.log(data?.fetchBoard.likeCount)
    return(
        <BoardGetUI 
            writer = {data?.fetchBoard.writer}
            createdAt = {data?.fetchBoard.createdAt}
            title = {data?.fetchBoard.title}
            contents = {data?.fetchBoard.contents}
            likeCount = {data?.fetchBoard.likeCount}
            dislikeCount = {data?.fetchBoard.dislikeCount}
            updateBoard = {updateBoard}
        />
    )
}