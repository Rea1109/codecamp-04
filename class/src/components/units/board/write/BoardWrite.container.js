import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'

export default function BoardWrite(){
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [myChange, setMyChange] = useState(true)
    const [createBoard] = useMutation(CREATE_BOARD)


    //event handler function
    const onChangeMyWriter = (e)=>{
        setMyWriter(e.target.value)
        if(e.target.value !== '' && myTitle !== '' && myContents !==''){
            setMyChange(false)
        }else{
            setMyChange(true)
        }
    }

    const onChangeMyTitle = (e)=>{
        setMyTitle(e.target.value)
        if(e.target.value !== '' && myWriter !== '' && myContents !==''){
            setMyChange(false)
        }else{
            setMyChange(true)
        }
    }

    const onChangeMyContents = (e)=>{
        setMyContents(e.target.value)
        if(e.target.value !== '' && myWriter !== '' && myTitle !== ''){
            setMyChange(false)
        }else{
            setMyChange(true)
        }
    }

    
    const graphqlApi = async ()=>{
        const result = await createBoard({
            variables : {writer:myWriter ,title: myTitle, contents:myContents}
        })
    }
    return(
      <BoardWriteUI 
        onChangeMyWriter={onChangeMyWriter} 
        onChangeMyTitle={onChangeMyTitle} 
        onChangeMyContents={onChangeMyContents} 
        graphqlApi={graphqlApi}
        myChange = {myChange}
      />
    )

}