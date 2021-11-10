import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BOARDS_BEST} from "./BoardList.queries"

export default function BoardList(){
    const router = useRouter()

    const [searchKeword,setSearchKeword] = useState('')

    const {data:boards} = useQuery(FETCH_BOARDS,{variables:{search:searchKeword}})
    const {data:best} = useQuery(FETCH_BOARDS_BEST)

    const onClickGetBoard = (e)=> (router.push(`/boards/${e.target.id}`))
    const onClickNew = ()=>(router.push(`/boards/new`))
    const onChangeSearchInput = (e)=>(setSearchKeword(e.target.value))

    const onClickSearch = ()=>{

    }
    
    return (
        <BoardListUI 
            boards = {boards}
            best = {best}
            onClickGetBoard = {onClickGetBoard}
            onClickNew = {onClickNew}
            onChangeSearchInput = {onChangeSearchInput}
            onClickSearch = {onClickSearch}
        />
    )
}