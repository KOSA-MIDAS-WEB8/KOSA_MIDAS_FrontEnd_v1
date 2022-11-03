import styled from "styled-components";
import { ToDoDelLogo, ToDoFixLogo } from "../../../asset";
import { useQuery } from "@tanstack/react-query";
import { stringify } from "querystring";
import axios from "axios";
import { BASE_URL } from "../../../base";
import { useEffect, useState, useRef } from "react";
import { date } from "../../../Date";
import dayjs from "dayjs";
const ArrData = [
  {
    src: ToDoFixLogo,
    del: ToDoDelLogo,
  },
  { src: ToDoFixLogo, del: ToDoDelLogo },
  { src: ToDoFixLogo, del: ToDoDelLogo },
];
function TimeLine(): JSX.Element {
  const accessToken = localStorage.getItem("access_token");
  const InputRef = useRef<any>([]);
  const getDepartmentCode = async () => {
    await axios
      .get(`${BASE_URL}/auth/user-info`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const getTeamInfo = async () => {
    const departmentCode = getDepartmentCode();
    console.log(departmentCode);

    await axios
      .get(`${BASE_URL}/departments/${departmentCode}/users`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    getTeamInfo();
  }, []);
  const tueq = async (i: number) => {
    const asdf = {
      title: "제목",
      description: InputRef.current[i].value,
      visibleToTeam: true,
      conduct_at: dayjs(date).format("YYYY-MM-DD HH:mm:ss"),
    };
    const { data } = await axios.post(BASE_URL + "/works/todo", asdf, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(data);
  };
  return (
    <Container>
      <Header>
        <Date>2022년</Date>
        <WorkTimes>
          <Time>
            출근시간:<Paint color="#2F55DD">7시</Paint>
          </Time>
          <Time>
            근무시간:<Paint color="#2F55DD">7시간</Paint>
          </Time>
          <Time>
            초과 근무시간:<Paint color="#C73E1D">0시간</Paint>
          </Time>
        </WorkTimes>
      </Header>
      <Main>
        <Peoples>
          <NameTxt>팀원</NameTxt>
          <Users>
            <UserName>*이윤서</UserName>
            <UserName>*이승민</UserName>
            <UserName>*김진건</UserName>
            <UserName>*안윤지</UserName>
          </Users>
        </Peoples>
        <TimeLineBox>
          <TimeLineTitle>OO님의 타임라인</TimeLineTitle>
          <HourBox>
            <HourTxt>6시</HourTxt>
            <HourTxt>7시</HourTxt>
            <HourTxt>8시</HourTxt>
            <HourTxt>9시</HourTxt>
            <HourTxt>10시</HourTxt>
            <HourTxt>11시</HourTxt>
            <HourTxt>12시</HourTxt>
            <HourTxt>13시</HourTxt>
            <HourTxt>14시</HourTxt>
            <HourTxt>15시</HourTxt>
            <HourTxt>16시</HourTxt>
            <HourTxt>17시</HourTxt>
            <HourTxt>18시</HourTxt>
            <HourTxt>19시</HourTxt>
            <HourTxt>20시</HourTxt>
            <HourTxt>21시</HourTxt>
            <HourTxt>22시</HourTxt>
            <HourTxt>23시</HourTxt>
            <HourTxt>24시</HourTxt>
          </HourBox>
          <TimeShow></TimeShow>
          <ToDoListContainer>
            {ArrData.map((item, i) => (
              <ToDoList>
                <ToDoHeader>
                  <ToDoTitle>해야할 일</ToDoTitle>
                  <ToDoFix src={ToDoFixLogo} />
                </ToDoHeader>
                <ToDoInput
                  ref={(el: any) => (InputRef.current[i] = el)}
                  onBlur={() => tueq(i)}
                />
                <ToDoPrint>
                  <ToDoLi>
                    <LiTxt>7시-뭐뭐하기</LiTxt>
                    <LiDel src={ToDoDelLogo} />
                  </ToDoLi>
                </ToDoPrint>
              </ToDoList>
            ))}
          </ToDoListContainer>
        </TimeLineBox>
      </Main>
    </Container>
  );
}

export default TimeLine;

const Container = styled.div`
  font-family: "Noto Sans";
  width: 1787px;
  height: 925px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  width: 100%;
  height: 164px;
  display: flex;
`;
const Date = styled.div`
  width: 589px;
  height: 100%;
  background-color: #a7b9ff;
  border-radius: 40px 0 40px 0;
  font-size: 64px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WorkTimes = styled.div`
  width: 1198px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 103px;
`;
const Time = styled.span`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Paint = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

const Main = styled.div`
  width: 100%;
  height: 761px;
  display: flex;
`;
const Peoples = styled.div`
  width: 222px;
  height: 100%;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 40px;
  padding: 31px 0 0 15px;
`;
const NameTxt = styled.div`
  font-weight: 600;
  font-size: 48px;
`;
const Users = styled.div`
  width: 100%;
  height: 600px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
const UserName = styled.span`
  font-weight: 400;
  font-size: 24px;
  margin: 10px;
`;

const TimeLineBox = styled.div`
  width: 1565px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const TimeLineTitle = styled.span`
  font-weight: 600;
  font-size: 40px;
  margin: 34px 0px 0px 17px;
`;
const HourBox = styled.div`
  width: 1510px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0 0 17px;
`;
const HourTxt = styled.span`
  font-weight: 600;
  font-size: 32px;
`;
const TimeShow = styled.div`
  width: 976px;
  height: 101px;
  background: #a7b9ff;
  border-radius: 20px;
  margin-top: 22px;
  margin-left: 64px;
`;
const TimeToDO = styled.span`
  width: 34px;
  height: 69px;
  background: #755adb;
  border-radius: 10px;
`;

const ToDoListContainer = styled.div`
  width: 1420px;
  height: 419px;
  background: #d9d9d9;
  border-radius: 40px 0px;
  margin: 34px 0 0 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
`;
const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ToDoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;
const ToDoTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 40px;
`;
const ToDoFix = styled.img`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
`;
const ToDoInput = styled.input`
  width: 338px;
  height: 50px;
  border: 0px;
  background-color: white;
  border-radius: 10px;
  margin: 10px 0;
  padding: 0 10px;
  font-size: 20px;
`;
const ToDoPrint = styled.span`
  width: 338px;
  height: 192px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const ToDoLi = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LiTxt = styled.span`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LiDel = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
