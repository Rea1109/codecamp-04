import { MyInput ,MyButton } from './BoardWrite.styles'

export default function BoardWriteUI(props){
    return(
        <div>
            작성자 : <MyInput type="text" onChange={props.onChangeMyWriter} /><br/>  
            제목 : <MyInput type="text" onChange={props.onChangeMyTitle} /><br/>
            내용 : <MyInput type="text" onChange={props.onChangeMyContents} /><br/>
            {/* <MyButton onClick={props.addBoard} change={props.myChange} disabled={props.myChange}>게시물 {props.isEdit?"수정":"등록"}하기 !</MyButton> */}

            {!props.isEdit && <MyButton onClick={props.addBoard} change={props.myChange} disabled={props.myChange}>게시물 등록하기 !</MyButton>}
            {props.isEdit && <MyButton onClick={props.editBoard} change={props.myChange} disabled={props.myChange}>게시물 수정하기 !</MyButton>}
            
        </div>
    )
}