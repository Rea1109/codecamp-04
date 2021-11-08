import { MyInput ,MyButton } from './BoardWrite.styles'

export default function BoardWriteUI(props){
    return(
        <div>
            작성자 : <MyInput type="text" onChange={props.onChangeMyWriter} /><br/>  
            제목 : <MyInput type="text" onChange={props.onChangeMyTitle} /><br/>
            내용 : <MyInput type="text" onChange={props.onChangeMyContents} /><br/>
            <MyButton onClick={props.graphqlApi} change={props.myChange} disabled={props.myChange}>게시물 등록하기 !</MyButton>
        </div>
    )
}