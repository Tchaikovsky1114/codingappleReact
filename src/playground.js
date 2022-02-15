import styled from 'styled-components';

let 박스 = styled.div`
  padding: 20px;
`;
let 제목 = styled.h4`
  font-size: 1.6rem;
  color: ${(props) => props.색상};
`;

function playGround() {
  <박스>
    <제목 색상="blue">하이하이</제목>
    <제목 className="red">호이호이</제목>
  </박스>;
}
