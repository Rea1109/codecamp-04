import styled from "@emotion/styled";

export const Navigation = styled.div`
  background-color: #c6bba9;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Menu = styled.div`
  line-height: 80px;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: "mainFont";

  :hover {
    color: black;
    cursor: default;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 32px;
`;

export const WeatherWraaper = styled.div`
  display: flex;
  margin: 20px;
`;

export const WeatherWraaperHead = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 11px;
`;

export const WeatherLabel = styled.div`
  vertical-align: middle;
  font-weight: bolder;
  line-height: 35px;
  margin-left: 20px;
`;

export const SubLabel = styled.div`
  font-weight: bolder;
`;
