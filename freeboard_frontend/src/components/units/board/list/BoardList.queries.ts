import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
query fetchBoards($search:String){
    fetchBoards(search:$search){
    _id
    writer
    title
    createdAt
}
}
`
export const FETCH_BOARDS_BEST = gql`
    query{
        fetchBoardsOfTheBest{
            _id
            writer
            title
            createdAt
            likeCount
        }
    }
`