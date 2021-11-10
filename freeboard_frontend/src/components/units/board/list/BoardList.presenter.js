import * as S from "./BoardList.styles"

export default function BoardListUI(props){
    return(

        <S.Wrapper>
            <S.MainTitle>베스트 게시글</S.MainTitle>
            <S.Header>
                <S.Row> 
                    {props.best?.fetchBoardsOfTheBest.map((el)=>(
                    <S.BoardCard key={el._id}>
                        <S.BoardImg>
                            <div>No image</div>
                        </S.BoardImg>
                        <S.BoardBody>
                            <S.BestTitle onClick={props.onClickGetBoard} id={el._id} >{el.title}</S.BestTitle>
                            <S.BestInfo>
                                <S.Profile>
                                    <S.BestWriter>
                                        <S.ProfileImg src="/images/profile.png" />
                                        <S.ProfileLabel>{el.writer}</S.ProfileLabel>
                                    </S.BestWriter>
                                    <S.BestDate>Date : {el.createdAt.split(":")[0].slice(0,10).replace(/-/gi,".")}</S.BestDate>
                                </S.Profile>
                                <S.Like>
                                    <img src="/images/Vector.png" />
                                    <S.LikeCount>{el.likeCount}</S.LikeCount>
                                </S.Like>
                            </S.BestInfo>
                        </S.BoardBody>   
                    </S.BoardCard>
                    ))}
                </S.Row>
            </S.Header>
            <div>
                <S.Row>
                    <S.SearchTitle onChange={props.onChangeSearchInput} type="text" placeholder="제목 검색" />
                    <S.SearchDate type="text" placeholder="YY-MM-DD ~ YY-MM-DD" />
                    <S.SearchBtn>검색하기</S.SearchBtn>
                </S.Row>
                <S.BoardRow>
                    <S.ColumnNumber>번호</S.ColumnNumber>
                    <S.ColumnTitle>제목</S.ColumnTitle>
                    <S.ColumnWriter>작성자</S.ColumnWriter>
                    <S.ColumnDate>날짜</S.ColumnDate>
                </S.BoardRow>
                {props.boards?.fetchBoards.map((el,idx)=>(
                <S.BoardRow key={el._id}>
                    <S.ColumnNumber>{idx+1}</S.ColumnNumber>
                    <S.ColumnTitle onClick={props.onClickGetBoard} id={el._id}>{el.title}</S.ColumnTitle>
                    <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                    <S.ColumnDate>{el.createdAt.split(":")[0].slice(0,10).replace(/-/gi,".")}</S.ColumnDate>
                </S.BoardRow>
                ))}
                <S.Bottom>
                    <S.AddBtn  onClick={props.onClickNew}>게시물등록하기</S.AddBtn>
                </S.Bottom>
            </div>
        </S.Wrapper>
    )
}