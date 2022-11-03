import { Link } from "react-router-dom";
import styled from "styled-components";
import { WelcomeImg } from "../../asset";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../base";

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
          <GoLogin>
            계정이 없다면? <b>로그인</b> 하러가기
          </GoLogin>
        </Link>
      </Inside>
    </Container>
  );
}

function SignupInputs(): JSX.Element {
  const LeftText = [
    { title: "아이디", name: "id", type: "text" },
    { title: "비밀번호", name: "password", type: "password" },
    { title: "비밀번호 확인", name: "checkPassword", type: "password" },
    { title: "부서코드", name: "department", type: "text" },
  ];
  const RightText = [
    { title: "이름", name: "name", type: "text" },
    {
      title: "전화번호",
      name: "phone_number",
      type: "text",
      placeholder: "ex) 010-1234-5678",
    },
  ];

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    checkPassword: "",
    name: "",
    phone_number: "",
    department: "",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const { id, password, checkPassword, name, phone_number, department } =
    inputs;

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signup = async () => {
    console.log(isAdmin);
    await axios
      .post(`${BASE_URL}/auth/sign-up`, {
        id: id,
        password: password,
        name: name,
        phone_number: phone_number,
        department: department,
        is_admin: isAdmin,
      })
      .then(() => {});
  };
  const onSignup = async () => {
    console.log(inputs);

    if (password === checkPassword) {
      try {
        await signup();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Inputs>
      <div>
        {LeftText.map((list) => (
          <SignupInput>
            <Title>{list.title}</Title>
            <Input name={list.name} type={list.type} onChange={onChange} />
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
              onChange={onChange}
              placeholder={list.placeholder}
            />
          </SignupInput>
        ))}
        <IsAdmin>
          <span>관리자 여부</span>
          <CheckBox type="checkbox" onChange={() => setIsAdmin(!isAdmin)} />
        </IsAdmin>
        <Link to="/login">
          <SignupBtn onClick={onSignup}>완료</SignupBtn>
        </Link>
      </div>
    </Inputs>
  );
}

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
  background: #a7b9ff;
  border-radius: 40px 0px 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
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
  > a {
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
  > div {
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
  background: #d9d9d9;
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
  background: #755adb;
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
