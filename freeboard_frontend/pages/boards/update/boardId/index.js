import {useRouter} from 'next/router'
import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'
import {
    Wrapper
    ,Title
    ,BodyWrapper
    ,AccountWrapper
    ,InputWrapper
    ,Writer
    ,Lavel
    ,InputBox_1
    ,TextAreaBox
    ,InputBox_2
    ,Post
    ,PostBtn
    ,Addr
    ,AddrBox
    ,ImgWrapper
    ,ImgBox
    ,SettingWrapper
    ,Setting
    ,Radio
    ,AddBoard
    ,ConfirmButton
    ,ErrorText
} from '../../../../styles/NewBoards.js'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {

        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
        }
        
    }
`

export default function NewBoardPage() {

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
                router.push(`/boards/getBoard/${result.data.createBoard._id}`)

            }catch(error){
                console.log(error.message)
                alert("서버 에러")
            }

        }

    }

    return(
        
        <Wrapper>
            <Title>게시글 등록</Title>
            <BodyWrapper>
                <AccountWrapper>
                    <Writer>
                        <Lavel>작성자</Lavel>
                        <InputBox_2 type="text" placeholder="이름을 입력해주세요" value={writer} onChange={getWriter} />
                        <ErrorText>{errorWriter}</ErrorText>
                    </Writer>
                    <Writer>
                        <Lavel>비밀번호</Lavel>
                        <InputBox_2 type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={getPassword} />
                        <ErrorText>{errorPassword}</ErrorText>
                    </Writer>
                </AccountWrapper>
                <InputWrapper>
                    <Lavel>제목</Lavel>
                    <InputBox_1 type="text" placeholder="제목을 작성해주세요" value={title} onChange={getTitle}/>
                    <ErrorText>{errorTitle}</ErrorText>
                </InputWrapper>
                <InputWrapper>
                    <Lavel>내용</Lavel>
                    <TextAreaBox type="text" placeholder="내용을 작성해주세요" value={content} onChange={getContent} />
                    <ErrorText>{errorContent}</ErrorText>
                </InputWrapper>
                <InputWrapper>
                    <Lavel>주소</Lavel>
                    <Addr>
                        <Post type="text" readOnly value="00000" />
                        <PostBtn type="button" value="우편번호검색" />
                    </Addr>
                    <AddrBox type="text" /> 
                    <AddrBox type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Lavel>유튜브</Lavel>
                    <InputBox_1 type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Lavel>사진 첨부 </Lavel>
                    <ImgWrapper>
                        <ImgBox>+Upload</ImgBox>
                        <ImgBox>+Upload</ImgBox>
                        <ImgBox>+Upload</ImgBox>
                    </ImgWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Lavel>메인 설정</Lavel>
                    <SettingWrapper>
                        <Setting>
                            <Radio type="radio" name="setMenu" />
                            <Lavel>유튜브</Lavel>
                        </Setting>
                        <Setting>
                            <Radio type="radio" name="setMenu" />
                            <Lavel>사진</Lavel>
                        </Setting>
                    </SettingWrapper>
                </InputWrapper>
                <AddBoard>
                    <ConfirmButton onClick={addBoard}>등록하기</ConfirmButton>
                </AddBoard>
            </BodyWrapper>
        </Wrapper>
    )

}