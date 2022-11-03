import { SubTitle } from "chart.js";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../base";
import { Link } from "react-router-dom";
import { JsxElement } from "typescript";
import { GoToWorkLogo } from "../../../asset";

function GoToWork(): JSX.Element {
  return (
    <>
      <Container>
        <LogoWrap>
          <LogoImg src={GoToWorkLogo} />
        </LogoWrap>
        <GoToWorkContainer>
          <GoToWorkTxt>출근</GoToWorkTxt>
          <QrReader></QrReader>
          <GoToWorkBtn>출근하기</GoToWorkBtn>
        </GoToWorkContainer>
      </Container>
    </>
  );
}
export default GoToWork;
const Container = styled.div`
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
const LogoWrap = styled.div`
  background-color: #a7b9ff;
  width: 534px;
  height: 851.05px;
  border-radius: 40px 0 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.img`
  width: 380px;
  height: 690px;
  display: inline;
`;

const GoToWorkContainer = styled.section`
  width: 712px;
  height: 851px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const GoToWorkTxt = styled.div`
  font-size: 96px;
  font-weight: 600;
  margin: 50px 0px;
`;

const QrReader = styled.div`
  width: 442px;
  height: 344px;
  background-color: #d9d9d9;
`;

const GoToWorkBtn = styled.button`
  width: 442px;
  height: 118px;
  background-color: #755adb;
  border: 0px;
  border-radius: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 64px;
  color: white;
  margin-top: 59px;
`;
