import {useRouter} from 'next/router'
import { useMutation, gql } from '@apollo/client'
import { useState} from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String,$createProductInput:CreateProductInput!){

        createProduct(
            seller:$seller,
            createProductInput:$createProductInput
        ){
            _id
            message
        }

    }   
`

export default function AddProduct(){
    const router = useRouter()
    const [seller, setSeller] = useState('')
    const [productName, setProductName] = useState('')
    const [productDetail, setProductDetail] = useState('')
    const [price, setPrice] = useState('')

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onChangeSeller = (e)=>{
        setSeller(e.target.value)
    }

    const onChangeProductName = (e)=>{
        setProductName(e.target.value)
    }

    const onChangeProductDetail = (e)=>{
        setProductDetail(e.target.value)
    }

    const onChangePrice = (e)=>{
        setPrice(e.target.value)
    }

    const addProduct = async ()=>{

        try{
            const result = await createProduct({
                variables:{
                    seller,
                    createProductInput : {
                        name: productName,
                        detail : productDetail,
                        price : Number(price)
                    }
                }
            })
            console.log(result)

            router.push(`/quiz/05-02-product-read/${result.data.createProduct._id}`)

        }catch(error){
            console.log(error)
        }

    }

    return(
        <>
            <div>판매자 : <input type="text" onChange={onChangeSeller} value={seller}/></div> <br />
            <div>상품명 : <input type="text" onChange={onChangeProductName} value={productName}/></div> <br />
            <div>상품내용 : <input type="text" onChange={onChangeProductDetail} value={productDetail}/></div> <br />
            <div>가격 : <input type="number" onChange={onChangePrice} value={price}/></div> <br />
            <button onClick={addProduct}>상품등록</button>
        </>
    )
}