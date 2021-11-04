import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage(){
    const [board,setBoard] = useState("")

    // async function restApi(){
    //     const result = await axios.get('https://koreanjson.com/posts/1')
    //     console.log(result)
    //     console.log(result.data.title)
    //     setBoard(result.data.title)
    // }

    const restApi = async ()=>{
        const result = await axios.get("https://koreanjson.com/posts/1")
        setBoard(result.data.title)
    }

    return (
        <div>
            <div>{board}</div>
            <button onClick={restApi}>REST-API 요청하기</button>
        </div>
    )    
}