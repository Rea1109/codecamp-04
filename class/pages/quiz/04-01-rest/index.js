import axios from 'axios'
import  {useState} from 'react'

export default function RestApiPage1(){

    const [text, setText] = useState("")
    
    // const reqRst = ()=>{
    //     const result = axios.get(' https://koreanjson.com/posts/1')
    //     console.log(result)
    // }

    const reqRst =async ()=>{
        const result = await axios.get(' https://koreanjson.com/posts/1')
        console.log(result.data.title)
        setText(result.data.title)
    }

    return(
        <div>
            <div>{text}</div>
            <button onClick={reqRst}>REST-API 요청하기</button>
        </div>
    )

}