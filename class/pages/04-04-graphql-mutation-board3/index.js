import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title:String, $contents:String) {
        
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            message
            number
        }
    }
`

export default function GraphqlMutationBoard3Page(){
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")


    const [createBoard] = useMutation(CREATE_BOARD)

    //event handler function
    const onChangeMyWriter = (e)=>{
        setMyWriter(e.target.value)
    }

    const onChangeMyTitle = (e)=>{
        setMyTitle(e.target.value)
    }

    const onChangeMyContents = (e)=>{
        setMyContents(e.target.value)
    }


    const graphqlApi = async ()=>{
        const result = await createBoard({
            variables : {writer:myWriter ,title: myTitle, contents:myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    return(
        <div>
            작성자 : <input type="text" onChange={onChangeMyWriter} /><br/>  
            제목 : <input type="text" onChange={onChangeMyTitle} /><br/>
            내용 : <input type="text" onChange={onChangeMyContents} /><br/>
            <button onClick={graphqlApi}>게시물 등록하기 !</button>
        </div>
    )

}