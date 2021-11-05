import {useMutation, gql} from '@apollo/client'
import {useRouter} from 'next/router'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller,createProductInput:$createProductInput ){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProductPage(){
    const router = useRouter()

    const [mySeller, setMySeller] = useState("")
    const [productName, setProductName] = useState("")
    const [productDetail, setProductDetail] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onChangeSeller = (e)=>{
        setMySeller(e.target.value)
    }

    const onChangeName = (e)=>{
        setProductName(e.target.value)
    }

    const onChangeDetail = (e)=>{
        setProductDetail(e.target.value)
    }

    const onChangePrice = (e)=>{
        // setProductPrice(Number(e.target.value))
        setProductPrice(e.target.value)
    }

    const graphqlApi = async ()=>{

        try{

            const result = await createProduct({
                variables:{
                    // 만약 key 랑 value 의 변수명이 같을경우 생략 가능
                    // seller,
                    // createProductInput: {
                    //     name,
                    //     detail,
                    //     price
                    // }
                    seller: mySeller,
                    createProductInput: {
                        name:productName,
                        detail:productDetail,
                        price: Number(productPrice)
                    }
                }
            })
            alert(result.data.createProduct.message)
            // router.push('/05-08-dynamic-product-read/'+result.data.createProduct._id)
            router.push(`/05-08-dynamic-product-read/${result.data.createProduct._id}`)

        } catch(error){
            console.log(error.message)
        }

    
    }

    return(
        <div>
            판매자 : <input type="text" onChange={onChangeSeller}  /><br/>  
            상품명 : <input type="text"  onChange={onChangeName}/><br/>
            상품내용 : <input type="text"  onChange={onChangeDetail} /><br/>
            상품가격 : <input type="number"   onChange={onChangePrice}/><br/>
            <button onClick={graphqlApi}>상품 등록하기 !</button>
        </div>
    )

}