import styled from "styled-components";
interface dataProps {
  data: {
    code: string;
    name: string;
    core_time_start: string;
    core_time_hours: number;
    work_hour: number;
    member_count: number;
    default_start_hour: string;
  };
}
const DepartmentList = (data: dataProps) => {
  return (
    <>
      <Title>부서명: &nbsp;{data.data.name}</Title>
      <Ulprops>
        <Liprops>
          <Ul>
            <Li width={211}>필수근무시작시간: {data.data.core_time_start}</Li>
            <Li width={210}>기본근무시작시간:{data.data.default_start_hour}</Li>
          </Ul>
        </Liprops>
        <Liprops>
          <Ul>
            {" "}
            <Li width={180}>필수근무시간:{data.data.core_time_hours}</Li>
            <Li width={230}>일간요구 업무시간: {data.data.work_hour}</Li>
            <Li width={150}>인원수: {data.data.member_count}명</Li>
          </Ul>
        </Liprops>
      </Ulprops>
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
  list-style-type: none;
`;
const Li = styled.li<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 25px;
  color: ${(props) => props.theme.colors.black};
  font: 500 20px ${(props) => props.theme.font.kr};
`;
const Ulprops = styled.ul`
  position: relative;
  width: 280px;
  top: -55px;
  left: 380px;
  height: 50px;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`;
const Liprops = styled.li`
  position: relative;
  width: 100%;
`;
