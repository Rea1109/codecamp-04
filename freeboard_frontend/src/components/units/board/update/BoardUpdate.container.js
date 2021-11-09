import BoardUpdateUI from './BoardUpdate.presenter'
import {useRouter} from 'next/router'
import {useState} from 'react'
import {FETCH_BOARD} from '../get/BoardGet.queries'
import { useQuery } from '@apollo/client'

export default function BoardWrite(){
    //작성자 , 비밀번호 제목 내용 체크
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [errorWriter, setErrorWriter] = useState("")
    const [errorPassword, setErrorPassword] = useState('')
    const [errorTitle, setErrorTitle] = useState('')
    const [errorContent, setErrorContent] = useState('')

    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD,{
        variables:{
            boardId : router.query.boardId
        }
    })

    // input 입력값 얻어오기
    const getWriter = (e)=>{
        setWriter(e.target.value)
        if(e.target.value !== ''){
            setErrorWriter('')
        }else{
            setErrorWriter('작성자를 입력해주세요')
        }
    }

    const getPassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value !== ''){
            setErrorPassword('')
        }else{
            setErrorPassword('비밀번호를 입력해주세요')
        }
    }

    const getTitle = (e) =>{
        setTitle(e.target.value)
        if(e.target.value !== ''){
            setErrorTitle('')
        }else{
            setErrorTitle('제목을 입력해주세요')
        }
    }

    const getContent = (e) =>{
        setContent(e.target.value)
        if(e.target.value !== ''){
            setErrorContent('')
        }else{
            setErrorContent('내용을 입력해주세요')
        }
    }

    // 유효성 체크
    const check = (e)=>{

        let isCheck = true

        if(writer === ''){
            setErrorWriter('작성자를 입력해주세요')
            isCheck = false
        }

        if(password === ''){
            setErrorPassword('비밀번호를 입력해주세요')
            isCheck = false
        }

        if(title === ''){
            setErrorTitle('제목을 입력해주세요')
            isCheck = false
        }

        if(content === ''){
            setErrorContent('내용을 입력해주세요')
            isCheck = false
        }

        return isCheck
    }

    // 취소버튼
    const cancle = () =>{
        router.push(`/boards/${router.query.boardId}`)
    }


    return(
        <BoardUpdateUI 
            writer = {data?.fetchBoard.writer}
            password={password}
            title = {data?.fetchBoard.title}
            contents = {data?.fetchBoard.contents}
            getWriter={getWriter}
            getPassword={getPassword}
            getTitle={getTitle}
            getContent={getContent}
            
            errorWriter={errorWriter}
            errorPassword={errorPassword}
            errorTitle={errorTitle}
            errorContent={errorContent}

            cancle={cancle}
        />
    )

}