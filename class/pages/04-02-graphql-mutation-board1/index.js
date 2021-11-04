import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation {
        createBoard(writer:"code",title:"graphql test",contents:"graphql 실습중 입니다."){
        message
        number
        }
    }
`

export default function GraphqlMutationBoard1Page(){
    const [message, setMessage] = useState("안녕하세요")

    const [createBoard] = useMutation(CREATE_BOARD)

    const graphqlApi = async ()=>{
        const result = await createBoard()
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