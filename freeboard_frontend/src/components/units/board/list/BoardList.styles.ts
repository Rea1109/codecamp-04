import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled.div`
  width: 1200px;
  margin: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.div`
  text-align: center;
  margin-bottom: 100px;
  font-size: 36px;
  font-weight: bolder;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 1200px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

export const BoardRowHead = styled.div`
  width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardRow = styled.div`
  width: 1200px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid #bdbdbd;

  cursor: default;
`;

export const Bottom = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const BoardCard = styled.div`
  width: 282px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 5px gray;
  display: flex;
  flex-direction: column;
`;

export const BoardBody = styled.div`
  padding: 30px;
  padding-top: 10px;
`;

export const SearchTitle = styled.input`
  width: 700px;
  height: 52px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

export const SearchDate = styled.input`
  width: 244px;
  height: 52px;
  padding: 20px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;

export const SearchBtn = styled.button`
  width: 94px;
  height: 52px;
  color: white;
  background-color: black;
  border-radius: 10px;
`;

export const ColumnNumber = styled.div`
  width: 100px;
  text-align: center;
  font-size: 18px;
  color: #4f4f4f;
`;
export const ColumnTitleHead = styled.div`
  text-align: center;
  width: 400px;
  font-size: 18px;
  color: #4f4f4f;
  cursor: default;
`;

export const ColumnTitle = styled.div`
  text-align: center;
  width: 400px;
  font-size: 18px;
  color: #4f4f4f;
  :hover {
    color: #ffd600;
    font-weight: bolder;
  }
`;

export const ColumnWriter = styled.div`
  text-align: center;
  width: 170px;
  font-size: 18px;
  color: #4f4f4f;
`;

export const ColumnDate = styled.div`
  width: 250px;
  text-align: center;
  font-size: 18px;
  color: #4f4f4f;
`;

export const AddBtn = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-color: white;

  :hover {
    background-color: #ffd600;
    color: white;
  }
`;

export const BestTitle = styled.div`
  cursor: default;
  :hover {
    color: #ffd600;
    font-weight: bolder;
  }
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const BestWriter = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const BestDate = styled.div`
  font-size: 12px;
  color: #828282;
`;
export const BoardImg = styled.img`
  background-color: #bdbdbd;
  width: 100%;
  height: 150px;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px 0px 5px gray;
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProfileLabel = styled.div`
  font-size: 16px;
  padding-left: 10px;
`;

export const BestInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div``;

export const Like = styled.div``;

export const LikeCount = styled.div`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;
