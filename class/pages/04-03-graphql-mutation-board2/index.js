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

export default function GraphqlMutationBoard2Page(){
    const [message, setMessage] = useState("안녕하세요")

    const [createBoard] = useMutation(CREATE_BOARD)

    const graphqlApi = async ()=>{
        const result = await createBoard({
            variables : {writter:"영희어머님" ,title: "제목", contents:"내용"}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        setMessage(result.data.createBoard.message)
    }

    return(
        <div>
            <div>{message}</div>
            <button onClick={graphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )

}