import {useRouter} from 'next/router'
import {useMutation,useQuery} from '@apollo/client'
import {useState} from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import {CREATE_BOARD,UPDATE_BOARD} from './BoardWrite.queries'

export default function BoardWrite(props){
    const router = useRouter()

    // const {data} = useQuery(FETCH_BOARD,{variables:{boardId : router.query.boardId}})
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD) 

    const [writer, setWriter] = useState('')
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [errorWriter, setErrorWriter] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorTitle, setErrorTitle] = useState('')
    const [errorContent, setErrorContent] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [addressDetail, setAddressDetail] = useState('')

    const onChangeWriter = (e)=>{
        setWriter(e.target.value)
        if(e.target.value !== ''){
            setErrorWriter('')
        }else{
            setErrorWriter('작성자를 입력해주세요')
        }
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value !== ''){
            setErrorPassword('')
        }else{
            setErrorPassword('비밀번호를 입력해주세요')
        }
    }

    const onChangeTitle = (e) =>{
        setTitle(e.target.value)
        if(e.target.value !== ''){
            setErrorTitle('')
        }else{
            setErrorTitle('제목을 입력해주세요')
        }
    }

    const onChangeContent = (e) =>{
        setContent(e.target.value)
        if(e.target.value !== ''){
            setErrorContent('')
        }else{
            setErrorContent('내용을 입력해주세요')
        }
    }

    const onChangeAddr = (e) => (setAddressDetail(e.target.value))

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

    const addBoard = async ()=>{
        if(check()){
            try{
                const result = await createBoard({
                    variables:{
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents:content,
                            boardAddress:{
                                zipcode,
                                address,
                                addressDetail
                            }
                        }
                    }
                })
                alert("게시물 등록이 완료 되었습니다.")
                console.log(result)
                router.push(`/boards/${result.data.createBoard._id}`)
            }catch(error){
                console.log(error.message)
                alert("서버 에러")
            }
        }
    }

    const editBoard = async ()=>{
        if(check()){
            try{
                const result = await updateBoard({
                    variables:{
                        boardId:router.query.boardId,
                        password,
                        updateBoardInput: {
                            title,
                            contents:content
                        }
                    }
                })
                alert("게시물 수정이 완료 되었습니다.")
                router.push(`/boards/${result.data.updateBoard._id}`)
            }catch(error){
                console.log(error.message)
                alert(error.message)
            }
        }
    }

    const getAddr = ()=>{
        new daum.Postcode({
            oncomplete: function(data) {

                let addr = ''; // 주소 변수
                let extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                }

                // // 우편번호와 주소 정보를 해당 필드에 넣는다.
                setZipcode(data.zonecode)
                setAddress(addr)
                // // 커서를 상세주소 필드로 이동한다.
                document.getElementById('extraAddr').focus()
            }
        }).open();
    }

    return(
        <BoardWriteUI 
            writer={writer}
            password={password}
            title={title}
            content={content}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContent={onChangeContent}
            addBoard={addBoard}
            editBoard={editBoard}
            getBoard={()=>(router.push(`/boards/${router.query.boardId}`))}
            errorWriter={errorWriter}
            errorPassword={errorPassword}
            errorTitle={errorTitle}
            errorContent={errorContent}
            isEdit = {props.isEdit}
            getAddr = {getAddr}
            onChangeAddr = {onChangeAddr}
            address = {address}
            zipcode ={zipcode}
        />
    )

}