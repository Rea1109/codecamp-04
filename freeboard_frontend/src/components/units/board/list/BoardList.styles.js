import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainTitle = styled.div`
    text-align: center;
    margin-bottom: 100px;
    font-size: 36px;
    font-weight: bolder;
`

export const Header = styled.div`
    display: flex;
    flex-direction:column;
`

export const Row = styled.div`
    width: 1200px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`

export const BoardRow = styled.div`
    width: 1200px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    border-bottom: 1px solid #BDBDBD;
`

export const Bottom = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: flex-end;
`

export const BoardCard = styled.div`
    width: 282px;
    border: none;
    border-radius: 15px;
    box-shadow: 0px 0px 5px gray;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SearchTitle = styled.input`
    width: 776px;
    height: 52px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    background-color: #F2F2F2;
`

export const SearchDate = styled.input`
    width: 244px;
    height: 52px;
    padding: 20px;
    border: 1px solid #F2F2F2;
    border-radius: 10px;
`

export const SearchBtn = styled.button`
    width: 94px;
    height: 52px;
    color: white;
    background-color: black;
    border-radius: 10px;
`

export const ColumnNumber = styled.div`
    width: 100px;
    text-align: center;
    font-size: 18px;
    color: #4F4F4F;
`

export const ColumnTitle = styled.div`
    text-align: center;
    width: 400px;
    font-size: 18px;
    color: #4F4F4F;

    cursor: default;

    :hover {
        color: blue;
        font-weight: bolder;
    }
`

export const ColumnWriter = styled.div`
    text-align: center;
    width: 170px;
    font-size: 18px;
    color: #4F4F4F;
`

export const ColumnDate = styled.div`
    width: 250px;
    text-align: center;
    font-size: 18px;
    color: #4F4F4F;
`

export const AddBtn = styled.button`
    width: 171px;
    height: 52px;
    border : 1px solid #F2F2F2;
    border-radius: 10px;
    background-color: white;

    :hover {
        background-color :#FFD600;
    }
`

export const BestTitle = styled.div`
    cursor: default;
    :hover {
        color: blue;
        font-weight: bolder;
    }

    margin : 20px;
`
export const BestWriter = styled.div`
    margin : 20px;
`
export const BestDate = styled.div`
    margin : 20px;
`
