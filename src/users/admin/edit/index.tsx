import styled from "styled-components";
const Edit = () => {
  return (
    <>
      <Title>
        부서명: <InputTitle></InputTitle>{" "}
      </Title>
      <Ul>
        <Li width={281}>
          필수/필요근무:{" "}
          <Input
            width={30}
            onInput={(e: any) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              if (e.target.value > 24) {
                e.target.value = 24;
              }
            }}
          ></Input>
          /
          <Input
            width={30}
            onInput={(e: any) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              if (e.target.value > 24) {
                e.target.value = 24;
              }
            }}
          ></Input>
          시간
        </Li>
        <Li width={230}>
          기본근무시작시간:{" "}
          <Input
            width={30}
            onInput={(e: any) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              if (e.target.value > 24) {
                e.target.value = 24;
              }
            }}
          ></Input>
          :
          <Input
            width={30}
            onInput={(e: any) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
              if (e.target.value > 59) {
                e.target.value = 59;
              }
            }}
          ></Input>
        </Li>
        <Li width={150}>
          인원수:{" "}
          <Input
            width={60}
            onInput={(e: any) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          ></Input>
          명
        </Li>
      </Ul>
    </>
  );
};
export default Edit;
const Title = styled.h1`
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto;
  font: 700 40px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.purple};
`;
const InputTitle = styled.input`
  width: 400px;
  font: 700 40px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.purple};
  border-radius: 20px;
  padding: 0px 20px;
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
const Input = styled.input<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 27px;
  border-radius: 20px;
  padding: 0px 7px;
`;
