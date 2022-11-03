import styled from "styled-components";
interface dataProps {
  data: {
    code: string;
    name: string;
    work_hour: number;
    core_time_hours: number;
    member_count: number;
    default_start_hour: string;
  };
}
const DepartmentList = (data: dataProps) => {
  return (
    <>
      <Title>부서명: &nbsp;{data.data.name}</Title>
      <Ul>
        <Li width={251}>
          필수/필요근무: {data.data.work_hour}/{data.data.core_time_hours} 시간
        </Li>
        <Li width={230}>기본근무시작시간:{data.data.default_start_hour}</Li>
        <Li width={150}>인원수: {data.data.member_count}명</Li>
      </Ul>
    </>
  );
};
export default DepartmentList;
const Title = styled.h1`
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto;
  font: 700 40px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.purple};
`;
const Ul = styled.ul`
  position: relative;
  top: -75px;
  left: 550px;
  width: 550px;
  height: 50px;
  list-style-type: none;
`;
const Li = styled.li<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 32px;
  color: ${(props) => props.theme.colors.black};
  font: 500 20px ${(props) => props.theme.font.kr};
`;
