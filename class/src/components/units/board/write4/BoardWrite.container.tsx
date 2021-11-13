import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from '@apollo/client'
import { ChangeEvent, useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import {useRouter} from 'next/router'
import { IBoardWriteProps,IMyVariables } from "./BoardWriter.types"



export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()

    const [myChange, setMyChange] = useState<boolean>(true)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)



    // event handler function
    const onChangeMyWriter = (e: ChangeEvent<HTMLInputElement>)=>{
        setMyWriter(e.target.value)
        if(e.target.value !== '' && myTitle !== '' && myContents !==''){
            setMyChange(false)
        }else{
            setMyChange(true)
        }
    }

    const onChangeMyTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        setMyTitle(e.target.value)
        if(e.target.value !== '' && myWriter !== '' && myContents !==''){
            setMyChange(false)
        }else{
            setMyChange(true)
        }
    }

    const onChangeMyContents = (e: ChangeEvent<HTMLInputElement>)=>{
        setMyContents(e.target.value)
        if(e.target.value !== '' && myWriter !== '' && myTitle !== ''){
            setMyChange(false)
        }else{
            setMyChange(true)
        }
    }

    
    const addBoard = async ()=>{
        alert("등록하기")
        const result = await createBoard({
            variables : {writer:myWriter ,title: myTitle, contents:myContents}
        })
        console.log(result)
        router.push(`/09-02-boards2/${result.data.createBoard.number}`)
    }

    const editBoard = async ()=>{
        alert("수정하기")
        
        
        const myVariables: IMyVariables = {
            number: Number(router.query.myNumber)
        }

        if(myWriter !== "") myVariables.writer = myWriter
        if(myTitle !== "") myVariables.title = myTitle
        if(myContents !== "") myVariables.contents = myContents

        await updateBoard({
            variables : myVariables
        })
        router.push(`/09-02-boards2/${router.query.myNumber}`)
    }
    return(
      <BoardWriteUI 
        onChangeMyWriter={onChangeMyWriter} 
        onChangeMyTitle={onChangeMyTitle} 
        onChangeMyContents={onChangeMyContents} 
        addBoard={addBoard}
        editBoard={editBoard}
        myChange = {myChange}
        isEdit = {props.isEdit}
        data = {props.data}
      />
    )

}