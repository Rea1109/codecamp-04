import styled from '@emotion/styled'
import { IStyleProps } from './BoardWriter.types'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${(props: IStyleProps)=>props.change === true ? "gray" : "yellow"} ;
    font-size: 30px;

`