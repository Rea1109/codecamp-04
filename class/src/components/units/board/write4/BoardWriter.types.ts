import {ChangeEvent} from "react"

export interface IStyleProps {
    change: boolean
}

export interface IMyVariables {
    number: number,
    writer?: string,
    title?: string,
    contents?: string
}

export interface IBoardWriteUIProps {
    onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>)=> void
    onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>)=> void     
    onChangeMyContents: (event: ChangeEvent<HTMLInputElement>)=> void     
    addBoard: ()=> void       
    editBoard: ()=> void    
    myChange: boolean     
    isEdit: boolean   
    data: any 
}

export interface IBoardWriteProps {
    isEdit:boolean
    data?: any
}