import {useRouter} from 'next/router'
import {useMutation} from '@apollo/client'
import {useState} from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD} from './BoardWrite.queries'

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

    const [createBoard] = useMutation(CREATE_BOARD)

    const router = useRouter()

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

    // 게시물 등록
    const addBoard = async ()=>{

        if(check()){

            try{
                const result = await createBoard({
                    variables:{
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents:content
                        }
                    }
                })
                alert("게시물 등록이 완료 되었습니다.")
                router.push(`/boards/${result.data.createBoard._id}`)

            }catch(error){
                console.log(error.message)
                alert("서버 에러")
            }

        }

    }

    return(
        <BoardWriteUI 
            writer={writer}
            password={password}
            title={title}
            content={content}
            getWriter={getWriter}
            getPassword={getPassword}
            getTitle={getTitle}
            getContent={getContent}
            addBoard={addBoard}
            errorWriter={errorWriter}
            errorPassword={errorPassword}
            errorTitle={errorTitle}
            errorContent={errorContent}
        />
    )

}