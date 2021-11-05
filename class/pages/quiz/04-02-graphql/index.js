import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($writer : String, $title : String, $contents : String){

        createBoard(
            writer : $writer,
            title : $title,
            contents : $contents
            ){
            message
            number
        }

    }
`

export default function Graphql01(){

    const [wirter, setWirter] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onChangeWirter = (e)=>{
        setWirter(e.target.value)
    }

    const onChangeTitle = (e)=>{
        setTitle(e.target.value)
    }

    const onChangeContent = (e)=>{
        setContent(e.target.value)
    }


    const [createBoard] = useMutation(CREATE_BOARD)

    const addBoard = async () =>{
        const result = await createBoard({
            variables:{
                writer : wirter,
                title : title,
                contents : content
            }
        })

        console.log(result)
    }

    return(
        <div>
            작성자 : <input type="text" onChange={onChangeWirter} /><br/>
            제목 : <input type="text" onChange={onChangeTitle} /><br/>
            내용 : <input type="text" onChange={onChangeContent}/><br/>
            <button onClick={addBoard}>등록하기</button>
        </div>
    )

}