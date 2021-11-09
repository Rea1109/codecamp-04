import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props){

    return(
        <S.Wrapper>
            <S.Title>게시글 등록</S.Title>
            <S.BodyWrapper>
                <S.AccountWrapper>
                    <S.Writer>
                        <S.Lavel>작성자</S.Lavel>
                        <S.InputBox_2 type="text" placeholder="이름을 입력해주세요" value={props.writer} onChange={props.getWriter} />
                        <S.ErrorText>{props.errorWriter}</S.ErrorText>
                    </S.Writer>
                    <S.Writer>
                        <S.Lavel>비밀번호</S.Lavel>
                        <S.InputBox_2 type="password" placeholder="비밀번호를 입력해주세요" value={props.password} onChange={props.getPassword} />
                        <S.ErrorText>{props.errorPassword}</S.ErrorText>
                    </S.Writer>
                </S.AccountWrapper>
                <S.InputWrapper>
                    <S.Lavel>제목</S.Lavel>
                    <S.InputBox_1 type="text" placeholder="제목을 작성해주세요" value={props.title} onChange={props.getTitle}/>
                    <S.ErrorText>{props.errorTitle}</S.ErrorText>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Lavel>내용</S.Lavel>
                    <S.TextAreaBox type="text" placeholder="내용을 작성해주세요" value={props.content} onChange={props.getContent} />
                    <S.ErrorText>{props.errorContent}</S.ErrorText>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Lavel>주소</S.Lavel>
                    <S.Addr>
                        <S.Post type="text" readOnly value="00000" />
                        <S.PostBtn type="button" value="우편번호검색" />
                    </S.Addr>
                    <S.AddrBox type="text" /> 
                    <S.AddrBox type="text" />
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
                <S.AddBoard>
                    <S.ConfirmButton onClick={props.addBoard}>등록하기</S.ConfirmButton>
                </S.AddBoard>
            </S.BodyWrapper>
        </S.Wrapper>
    )

}