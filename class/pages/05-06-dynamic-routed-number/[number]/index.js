import {useRouter} from 'next/router'
import {useState} from 'react'

export default function DynamicRoutedNumberPage(){

    const router = useRouter()

    console.log(router)
    console.log(router.query.number)

    return(
        <div>{router.query.number}번게시글 상세페이지 이동완료</div>
    )

}