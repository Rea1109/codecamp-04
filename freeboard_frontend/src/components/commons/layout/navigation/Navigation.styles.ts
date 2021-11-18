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
