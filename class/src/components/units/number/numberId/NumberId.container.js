import {useRouter} from 'next/router'
import NumberIdUI from './NumberId.presenter'

export default function NumberId(){
    const router = useRouter()

    console.log(router)
    console.log(router.query.number)

    return(
        <NumberIdUI 
            data = {router.query.number}
            test = {"test"}
        />
    )

}