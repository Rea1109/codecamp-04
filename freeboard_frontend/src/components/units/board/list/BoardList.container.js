import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_BEST} from "./BoardList.queries"

export default function BoardList(){
    const router = useRouter()
    const {data:boards} = useQuery(FETCH_BOARDS)
    const {data:best} = useQuery(FETCH_BOARDS_BEST)
    const onClickGetBoard = (e)=> (router.push(`/boards/${e.target.id}`))

    const onClickNew = ()=>(router.push(`/boards/new`))

    return (
        <BoardListUI 
            boards = {boards}
            best = {best}
            onClickGetBoard = {onClickGetBoard}
            onClickNew = {onClickNew}
        />
    )
}