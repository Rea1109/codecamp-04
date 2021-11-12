import * as S from './BoardWrite.styles'
import Head from 'next/head'

export default function BoardWriteUI(props){
    return(
        <>
            <Head>
                <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
            </Head>
            <S.Wrapper>
                {!props.isEdit && <S.Title>게시글 등록</S.Title>}
                {props.isEdit && <S.Title>게시글 수정</S.Title>}
                <S.BodyWrapper>
                    <S.AccountWrapper>
                        <S.Writer>
                            <S.Lavel>작성자</S.Lavel>
                            <S.InputBox_2 type="text" placeholder="이름을 입력해주세요" defaultValue={props.data?.fetchBoard.writer} readOnly={props.isEdit} onChange={props.onChangeWriter} />
                            <S.ErrorText>{props.errorWriter}</S.ErrorText>
                        </S.Writer>
                        <S.Writer>
                            <S.Lavel>비밀번호</S.Lavel>
                            <S.InputBox_2 type="password" placeholder="비밀번호를 입력해주세요" onChange={props.onChangePassword} />
                            <S.ErrorText>{props.errorPassword}</S.ErrorText>
                        </S.Writer>
                    </S.AccountWrapper>
                    <S.InputWrapper>
                        <S.Lavel>제목</S.Lavel>
                        <S.InputBox_1 type="text" placeholder="제목을 작성해주세요" defaultValue={props.data?.fetchBoard.title} onChange={props.onChangeTitle}/>
                        <S.ErrorText>{props.errorTitle}</S.ErrorText>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Lavel>내용</S.Lavel>
                        <S.TextAreaBox type="text" placeholder="내용을 작성해주세요" defaultValue={props.data?.fetchBoard.contents} onChange={props.onChangeContent} />
                        <S.ErrorText>{props.errorContent}</S.ErrorText>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Lavel>주소</S.Lavel>
                        <S.Addr>
                            <S.Post type="text" readOnly value={props.zipcode} />
                            <S.PostBtn type="button" value="우편번호검색" onClick={props.getAddr} />
                        </S.Addr>
                        <S.AddrBox type="text" value={props.address} readOnly={true} /> 
                        <S.AddrBox type="text" id="extraAddr" onClick={props.onChangeAddr} placeholder="상세주소를 입력해주세요" />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Lavel>유튜브</S.Lavel>
                        <S.InputBox_1 type="text" />
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Lavel>사진 첨부 </S.Lavel>
                        <S.ImgWrapper>
                            <S.ImgBox>+Upload</S.ImgBox>
                            <S.ImgBox>+Upload</S.ImgBox>
                            <S.ImgBox>+Upload</S.ImgBox>
                        </S.ImgWrapper>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Lavel>메인 설정</S.Lavel>
                        <S.SettingWrapper>
                            <S.Setting>
                                <S.Radio type="radio" name="setMenu" />
                                <S.Lavel>유튜브</S.Lavel>
                            </S.Setting>
                            <S.Setting>
                                <S.Radio type="radio" name="setMenu" />
                                <S.Lavel>사진</S.Lavel>
                            </S.Setting>
                        </S.SettingWrapper>
                    </S.InputWrapper>
                    <S.BoardFunction>
                        {!props.isEdit && <S.ConfirmButton onClick={props.addBoard}>등록하기</S.ConfirmButton>}
                        {props.isEdit &&<S.CancleButton onClick={props.getBoard}>취소하기</S.CancleButton>}
                        {props.isEdit &&<S.ConfirmButton onClick={props.editBoard}>수정하기</S.ConfirmButton>}
                    </S.BoardFunction>
                </S.BodyWrapper>
            </S.Wrapper>
        </>
        
    )

}