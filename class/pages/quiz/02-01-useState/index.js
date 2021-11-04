import {useState} from 'react'

export default function UseStatePage() {

    const [text, setText] = useState('안녕하세요')
    const [token, setToken] = useState('')
    const [count, setCount] = useState(0) 

    const auth = () =>{
        let number = String(Math.floor(Math.random()*1000000)).padStart(6,'0')
        setToken(number)
    }

    const change = ()=>{
        (text === '안녕하세요'? setText('반갑습니다'):setText('안녕하세요'))
    }

    const crease = ()=>{
        setCount(count+1)
    }

    const decrease = ()=>{
        if(count >0) setCount(count-1)
    }

    return(
        <>
            <button onClick={change}>{text}</button> <br/>
            <input type="text" readOnly value={token}/>  <button onClick={auth}>인증번호 발송</button> <br/>
            <div>
                {count} <button onClick={crease}>+</button> <button onClick={decrease}>-</button>
            </div>
        </>
            )

}