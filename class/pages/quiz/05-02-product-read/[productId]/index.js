import {useState} from 'react'
import { useMutation, gql, useQuery } from '@apollo/client'
import router, {useRouter} from 'next/router'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId:$productId){
            seller
            name
            detail
            price
        }
    }
`

export default function ProductReadPage(){

    const router = useRouter()
    
    const {data} = useQuery(FETCH_PRODUCT,{
        variables:{
            productId : router.query.productId
        }
    })

    console.log(data)

    return(
        <div>
            <div> 판매자 : {data ? data.fetchProduct.seller: "loading...."}</div>
            <div> 상품명 : {data ?.fetchProduct.name}</div>
            <div> 상품설명 : {data ?.fetchProduct.detail}</div>
            <div> 상품가격 : {data ?.fetchProduct.price}</div>
        </div>
    )
}