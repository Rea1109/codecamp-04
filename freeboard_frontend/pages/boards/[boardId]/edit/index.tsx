//수정페이지
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container"
import {useRouter} from "next/router"
import {useQuery} from "@apollo/client"
import {FETCH_BOARD} from "../../../../src/components/units/board/get/BoardGet.queries"

export default function UpdateBoardPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{variables:{boardId:router.query.boardId}})

    return <BoardWrite isEdit={true} data={data}/>
}