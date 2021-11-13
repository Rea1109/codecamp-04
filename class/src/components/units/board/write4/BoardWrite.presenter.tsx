import { MyInput ,MyButton } from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWriter.types'


export default function BoardWriteUI(props:IBoardWriteUIProps){
    console.log("aaaa")
    return(
        <div>
            작성자 : <MyInput type="text" onChange={props.onChangeMyWriter} defaultValue={props.data?.fetchBoard.writer} /><br/>  
            제목 : <MyInput type="text" onChange={props.onChangeMyTitle} defaultValue={props.data?.fetchBoard.title} /><br/>  
            내용 : <MyInput type="text" onChange={props.onChangeMyContents} defaultValue={props.data?.fetchBoard.contents} /><br/>  
            {/* <MyButton onClick={props.addBoard} change={props.myChange} disabled={props.myChange}>게시물 {props.isEdit?"수정":"등록"}하기 !</MyButton> */}

            {!props.isEdit && <MyButton onClick={props.addBoard} change={props.myChange} /* disabled={props.myChange} */>게시물 등록하기 !</MyButton>}
            {props.isEdit && <MyButton onClick={props.editBoard} change={props.myChange} /* disabled={props.myChange} */>게시물 수정하기 !</MyButton>}
            
        </div>
    )
}