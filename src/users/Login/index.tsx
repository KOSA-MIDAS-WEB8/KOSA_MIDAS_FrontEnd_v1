import { SubTitle } from 'chart.js';
import styled from 'styled-components'
import { WelcomeImg } from '../../asset';

function Login():JSX.Element {
  return (
    <Container>
      <LogoWrap>
        <LogoImg src={WelcomeImg}/>
      </LogoWrap>
      <LoginForm>
        <LoginTxt>로그인</LoginTxt>
        <LoginLabelId>아이디</LoginLabelId>
        <LoginInputId/>
        <LoginLabelPw>비밀번호</LoginLabelPw>
        <LoginInputPw/>
        <LoginBtn>로그인</LoginBtn>
        <GoSignUp>계정이 없다면? 가입 하러가기</GoSignUp>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Noto Sans';
  width: 1246px;
  height: 851px;
  background-color: white;
  border-radius: 40px ;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LogoWrap = styled.div`
  background-color:#A7B9FF;
  width: 534px;
  height: 851.05px;
  border-radius: 40px 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoImg = styled.img`
  width: 460px;
  height: 785px;
  display: inline;
`;


const LoginForm = styled.form `
  margin-top: 102px;
  margin-left: 91px;
  display: flex;
  flex-direction: column;
`;
const XBtn = styled.div`
  float: right;
  font-weight: 400;
  font-size: 40px;
`
const LoginTxt = styled.span`
  color:black; 
  font-size: 48px;
  margin-bottom:40px;
`
const LoginLabel = styled.label`
  color:black ; 
  font-size: 32px;
  margin-bottom:39px;
`
const LoginInput = styled.input`
  width: 434px;
  height: 59px;
  background-color: #D9D9D9;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 500;
  border: 0px;
  padding:0px 23px;
`
const LoginLabelId = styled(LoginLabel)`
  margin-bottom: 39px; 
`
const LoginInputId = styled(LoginInput)`
  margin-bottom: 44px;
`;
const LoginLabelPw = styled(LoginLabel)`
  margin-bottom: 24px; 
`
const LoginInputPw = styled(LoginInput)`
  margin-bottom: 29px;
`;

const LoginBtn = styled.button`
  color:white; 
  width: 297px;
  height: 87px;
  background-color: #755ADB ;
  font-size: 36px; 
  font-weight: 600;
  border-radius: 50px;
  border: 0px;
  margin-bottom: 53px;
`
const GoSignUp = styled.p`
  font-size: 24px ; 
  font-weight: 500; 
`




export default Login ;