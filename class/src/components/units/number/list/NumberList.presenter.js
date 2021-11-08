import { MoveBtn } from "./NumberList.styles"

export default function NumberListUI(props){
    return(
        <>
            <MoveBtn onClick={props.onClickMove1} >1번 게시글로 이동하기</MoveBtn>
            <MoveBtn onClick={props.onClickMove2} >2번 게시글로 이동하기</MoveBtn>
            <MoveBtn onClick={props.onClickMove3} >3번 게시글로 이동하기</MoveBtn>
        </>
    )

}