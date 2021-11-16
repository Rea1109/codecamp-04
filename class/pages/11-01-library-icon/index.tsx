import { PieChartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(PieChartOutlined)`
  font-size: 50px;
  color: blue;
`;

export default function LibraryIconPage() {
  // 태그에 아이디값 줘도 의미없음
  return <MyIcon />;
}
