import styled from '@emotion/styled'

export const MyInput = styled.input`

`
export const MyButton = styled.button`
    background-color: ${(props)=>props.change === true ? "gray" : "yellow"} ;
    font-size: 30px;

`