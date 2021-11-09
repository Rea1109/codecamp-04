import {
    Wrapper
    ,Title
    ,BodyWrapper
    ,AccountWrapper
    ,InputWrapper
    ,Writer
    ,Lavel
    ,InputBox_1
    ,TextAreaBox
    ,InputBox_2
    ,Post
    ,PostBtn
    ,Addr
    ,AddrBox
    ,ImgWrapper
    ,ImgBox
    ,SettingWrapper
    ,Setting
    ,Radio
    ,AddBoard
    ,ConfirmButton
    ,ErrorText
    ,CancleButton
} from './BoardUpdate.styles'

export default function BoardUpdateUI(props){

    return(
        <Wrapper>
            <Title>게시글 등록</Title>
            <BodyWrapper>
                <AccountWrapper>
                    <Writer>
                        <Lavel>작성자</Lavel>
                        <InputBox_2 type="text" placeholder="이름을 입력해주세요" value={props.writer} onChange={props.getWriter} />
                        <ErrorText>{props.errorWriter}</ErrorText>
                    </Writer>
                    <Writer>
                        <Lavel>비밀번호</Lavel>
                        <InputBox_2 type="password" placeholder="비밀번호를 입력해주세요" value={props.password} onChange={props.getPassword} />
                        <ErrorText>{props.errorPassword}</ErrorText>
                    </Writer>
                </AccountWrapper>
                <InputWrapper>
                    <Lavel>제목</Lavel>
                    <InputBox_1 type="text" placeholder="제목을 작성해주세요" value={props.title} onChange={props.getTitle}/>
                    <ErrorText>{props.errorTitle}</ErrorText>
                </InputWrapper>
                <InputWrapper>
                    <Lavel>내용</Lavel>
                    <TextAreaBox type="text" placeholder="내용을 작성해주세요" value={props.contents} onChange={props.getContent} />
                    <ErrorText>{props.errorContent}</ErrorText>
                </InputWrapper>
                <InputWrapper>
                    <Lavel>주소</Lavel>
                    <Addr>
                        <Post type="text" readOnly value="00000" />
                        <PostBtn type="button" value="우편번호검색" />
                    </Addr>
                    <AddrBox type="text" /> 
                    <AddrBox type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Lavel>유튜브</Lavel>
                    <InputBox_1 type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Lavel>사진 첨부 </Lavel>
                    <ImgWrapper>
                        <ImgBox>+Upload</ImgBox>
                        <ImgBox>+Upload</ImgBox>
                        <ImgBox>+Upload</ImgBox>
                    </ImgWrapper>
                </InputWrapper>
                <InputWrapper>
                    <Lavel>메인 설정</Lavel>
                    <SettingWrapper>
                        <Setting>
                            <Radio type="radio" name="setMenu" />
                            <Lavel>유튜브</Lavel>
                        </Setting>
                        <Setting>
                            <Radio type="radio" name="setMenu" />
                            <Lavel>사진</Lavel>
                        </Setting>
                    </SettingWrapper>
                </InputWrapper>
                <AddBoard>
                    <CancleButton onClick={props.cancle}>취소하기</CancleButton>
                    <ConfirmButton onClick={props.addBoard}>수정하기</ConfirmButton>
                </AddBoard>
            </BodyWrapper>
        </Wrapper>
    )
}