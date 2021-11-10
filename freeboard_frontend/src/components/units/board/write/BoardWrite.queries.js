import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {

        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
        }
        
    }
`
export const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!,$boardId:ID!,$password:String) {
        updateBoard(updateBoardInput:$updateBoardInput,boardId:$boardId,password:$password){
            _id
            writer
            title
            contents
        }
    }
`

export const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            createdAt
        }
    }
`