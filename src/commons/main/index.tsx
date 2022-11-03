import styled from "styled-components";
import { WelcomeImg, Arrow } from "../../asset";
import { Link } from "react-router-dom";

function Main(): JSX.Element {
  return (
    <Background>
      <Wrapper>
        <Body>
          <FirstText>일과 삶의 균형으로<br />일도 생활도 즐겁게!!</FirstText>
          <Title>유연근무제,</Title>
          <Emphasis>보다 쉽고, 간편하게<br />관리하세요.</Emphasis>
          <Link to="/login">
            <GoLogin>
              Get started now <img src={Arrow} />
            </GoLogin>
          </Link>
        </Body>
        <img src={WelcomeImg} />
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  height: calc(100vh - 17px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 279px;
  >img{
    width: 460px;
  }
`;
const Body = styled.div`
  color: white;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 30px;
  >a{
    text-decoration: none;
  }
`;
const FirstText = styled.span`
  font-size: 30px;
`;
const Title = styled.span`
  font-size: 50px;
`;
const Emphasis = styled.span`
  font-size: 90px;
`;
const GoLogin = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 55px;
  color: white;
  >img{
    width: 56px;
  }
  :hover{
    color: #755ADB;
  }
`;

export default Main;