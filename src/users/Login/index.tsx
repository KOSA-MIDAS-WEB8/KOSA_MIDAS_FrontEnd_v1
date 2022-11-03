import styled from "styled-components";
import { WelcomeImg } from "../../asset";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../base";
import { Link } from "react-router-dom";

function Login(): JSX.Element {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = () => {
    if (id.length < 8 || password.length < 8) {
      alert("아이디또느 비밀번호의 길이가 잘못되었습니다.");
    } else {
      axios
        .post(`${BASE_URL}/auth/sign-in`, {
          id: id,
          password: password,
        })
        .then((res: any) => {
          localStorage.setItem("access_token", res.data.access_token);
          alert("로그인을 성공하셨습니다");
          if (res.role === "NORMAL") {
            navigate("/main");
          } else {
            navigate("/admin");
          }
        })
        .catch(() => {
          alert("아이디가 없거나 비밀번호를 틀리셨습니다.");
        });
    }
  };

  return (
    <Container>
      <LogoWrap>
        <LogoImg src={WelcomeImg} />
      </LogoWrap>
      <LoginForm>
        <LoginTxt>로그인</LoginTxt>
        <LoginLabel margin="39">아이디</LoginLabel>
        <LoginInput
          margin="44"
          onChange={(e: { target: { value: string } }) => setId(e.target.value)}
        />
        <LoginLabel margin="24">비밀번호</LoginLabel>
        <LoginInput
          margin="29"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <LoginBtn onClick={onLogin}>로그인</LoginBtn>
        <Link to="/signup">
          <GoSignUp>
            계정이 없다면? <b>가입</b> 하러가기
          </GoSignUp>
        </Link>
      </LoginForm>
    </Container>
  );
}

export const Container = styled.div`
  font-family: "Noto Sans";
  width: 1246px;
  height: 851px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoWrap = styled.div`
  background-color: #a7b9ff;
  width: 534px;
  height: 851.05px;
  border-radius: 40px 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 460px;
  height: 785px;
  display: inline;
`;

const LoginForm = styled.div`
  margin-top: 102px;
  margin-left: 91px;
  display: flex;
  flex-direction: column;
  > a {
    text-decoration: none;
  }
`;

const LoginTxt = styled.span`
  color: black;
  font-size: 48px;
  margin-bottom: 40px;
`;

const LoginLabel = styled.label<{ margin: string }>`
  color: black;
  font-size: 32px;
  margin-bottom: ${(props) => `${props.margin}px`};
`;
const LoginInput = styled.input<{ margin: string }>`
  width: 434px;
  height: 59px;
  background-color: #d9d9d9;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 500;
  border: 0px;
  padding: 0px 23px;
  margin-bottom: ${(props) => `${props.margin}px`};
`;

const LoginBtn = styled.button`
  color: white;
  width: 297px;
  height: 87px;
  background-color: #755adb;
  font-size: 36px;
  font-weight: 600;
  border-radius: 50px;
  border: 0px;
  margin-bottom: 53px;
`;
const GoSignUp = styled.a`
  font-size: 24px;
  font-weight: 500;
  color: black;
  text-decoration: none;
`;

export default Login;
