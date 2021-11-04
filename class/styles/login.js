import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    margin: 40px;
    border: 1px solid black;
    background-color: gray;
    background-image: url( "/images/img-bg.png" );
`

export const Header = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Marker = styled.img`
    width: 100px;
    height: 100px;
`

export const Title = styled.div`
    font-size: 60px;
    color: white;

`

export const Main = styled.div`
    width: 100%;
    height: 50%; 
    padding-left: 51px;
    padding-right: 49px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const ErrorText = styled.div`
    color: #ff1b6d;
    border-top: 1px solid white;
    padding-top: 10px;
    font-size: 18px;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const Menu = styled.div`
    font-size: 20px;
    color: white;
`

export const Delete = styled.img`
    width: 20px;
    height: 20px;
    margin-left : 10px;
`

export const InputBox = styled.input`
    width: 500px;
    height: 60px;
    background-color: transparent;
    border: none;
    color: white;
`

export const LoginBtn = styled.button`
    width: 540px;
    height: 76px;
    border: none;
    border-radius: 50px;
    background-color: #ff1b6d;
    font-size: 26px;
    color: white;
`

export const SnsBtn = styled.button`
    width: 540px;
    height: 76px;
    border: 1px solid #fae100;
    border-radius: 50px;
    font-size: 21px;
    color: #fae100;
    background-color: transparent;
`