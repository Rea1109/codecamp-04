import {useRouter} from 'next/router'
import NumberListUI from './NumberList.presenter'

export default function NumberList(){

    const router = useRouter()

    const onClickMove1 = ()=>{
        router.push('/05-06-dynamic-routed-number/1')
    }
    const onClickMove2 = ()=>{
        router.push('/05-06-dynamic-routed-number/2')
    }
    const onClickMove3 = ()=>{
        router.push('/05-06-dynamic-routed-number/3')
    }

    return(
        <NumberListUI 
            onClickMove1={onClickMove1}
            onClickMove2={onClickMove2}
            onClickMove3={onClickMove3}
        />
    )

}