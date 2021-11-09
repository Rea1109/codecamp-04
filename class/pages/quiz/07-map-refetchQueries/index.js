import { useMutation, useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled';

const FETCH_PRODUCTS = gql`
    query{
        fetchProducts{
            _id
            seller
            name
            detail
            price
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteProduct($productId:ID){
        deleteProduct(productId:$productId){
            message
        }
    }
`

const Column = styled.div`
    width: 20%;
`
const Row = styled.div`
    display: flex;
`
const HeadRow = styled.div`
    margin-bottom: 20px;
    display: flex;
`

export default function RefetchQueriesPage(){
    const {data} = useQuery(FETCH_PRODUCTS);
    const [deleteProduct] = useMutation(DELETE_BOARD)

    const onClickDelete = async (e)=>{
        try{
            const result = await deleteProduct({
                variables : {
                    productId: String(e.target.id)
                },
                refetchQueries : [{query:FETCH_PRODUCTS}]
            })
            alert(result.data.deleteProduct.message)
        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <div>
            <HeadRow>
                <Column><input type="checkbox" /></Column>
                <Column>상품명</Column>
                <Column>상품가격</Column>
                <Column>판매자</Column>
            </HeadRow>    
            {data?.fetchProducts.map((el,idx)=>(
             <Row key={el._id}>
                <Column><input type="checkbox"/></Column>
                <Column>{el.name}</Column>
                <Column>{el.price} 원</Column>
                <Column>{el.seller}</Column>
                <Column><button id={el._id} onClick={onClickDelete}>삭제하기</button></Column>
             </Row>   
            ))}
        </div>
    )

}