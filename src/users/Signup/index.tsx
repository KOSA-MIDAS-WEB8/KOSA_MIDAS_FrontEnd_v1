import { Link } from "react-router-dom";
import styled from "styled-components";
import { idText } from "typescript";
import { WelcomeImg } from "../../asset";

function Signup(): JSX.Element {
  return (
    <Container>
      <WelcomeBox>
        <img src={WelcomeImg} />
      </WelcomeBox>
      <Inside>
        <Topic>회원가입</Topic>
        <SignupInputs />
        <Link to="/login">
          <GoLogin>계정이 없다면? <b>로그인</b> 하러가기</GoLogin>
        </Link>
      </Inside>
    </Container>
  );
};

function SignupInputs(): JSX.Element {
  const LeftText = [
    { title: "아이디", name: "id", type: "text" },
    { title: "비밀번호", name: "password", type: "password" },
    { title: "비밀번호 확인", name: "passwordCheck", type: "password" },
    { title: "부서코드", name: "department", type: "text" }
  ];
  const RightText = [
    { title: "이름", name: "name", type: "text" },
    { title: "전화번호", name: "phone_number", type: "text" }
  ];

  return (
    <Inputs>
      <div>
        {LeftText.map((list) => (
          <SignupInput>
            <Title>{list.title}</Title>
            <Input
              name={list.name}
              type={list.type}
            />
          </SignupInput>
        ))}
      </div>
      <div>
        {RightText.map((list) => (
          <SignupInput>
            <Title>{list.title}</Title>
            <Input
              name={list.name}
              type={list.type}
            />
          </SignupInput>
        ))}
        <IsAdmin>
          <span>관리자 여부</span>
          <CheckBox type="checkbox"></CheckBox>
        </IsAdmin>
        <SignupBtn>완료</SignupBtn>
      </div>
    </Inputs>
  );
};

const Container = styled.div`
  width: 1600px;
  height: 851px;
  background: white;
  border-radius: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;
const WelcomeBox = styled.div`
  height: inherit;
  width: 534px;
  background: #A7B9FF;
  border-radius: 40px 0px 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  >img{
    width: 460px;
  }
`;
const Inside = styled.div`
  width: 1066px;
  height: inherit;
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 43px 78px;
  >a{
    text-decoration: none;
  }
`;
const Topic = styled.span`
  font-weight: 600;
  font-size: 48px;
`;
const Inputs = styled.div`
  display: flex;
  gap: 26px;
  >div{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
const SignupInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
`;
const Input = styled.input`
  width: 434px;
  height: 59px;
  padding: 0 23px;
  background: #D9D9D9;
  border-radius: 20px;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 25px;
`;
const IsAdmin = styled.div`
  margin-top: 68px;
  font-weight: 600;
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const CheckBox = styled.input`
  width: 30px;
  height: 30px;
`;
const SignupBtn = styled.button`
  background: #755ADB;
  border-radius: 50px;
  font-weight: 600;
  font-size: 36px;
  color: white;
  border: none;
  width: 450px;
  height: 59px;
  margin-top: 82px;
`;
const GoLogin = styled.span`
  font-weight: 500;
  font-size: 24px;
  color: black;
`;

export default Signup;