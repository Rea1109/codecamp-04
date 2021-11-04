import { MyDiv, MyInput, InputDiv, SubText } from '../../styles/emotion'

export default function EmotionPage() {
    // javascript 


    return(
        // JSX(React HTML) 동일 line에 태그 존재x (부모태그로 감싸야함)
        // <></> Fragment 빈 태그로 감싸기도 함
        <div>
            <MyDiv>로그인</MyDiv>

            <InputDiv>
                <div>
                    <SubText>아이디</SubText> 
                    <MyInput type="text" />
                </div>
                <div>
                    <SubText>비밀번호</SubText> 
                    <MyInput type="text" />
                </div>
                <div>
                    나의 이미지 : <img src="/images/lotto.png" />
                </div>
            </InputDiv>           
        </div>
        
    )
}