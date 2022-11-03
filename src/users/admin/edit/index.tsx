import styled from "styled-components";
const Edit = () => {
  return (
    <>
      <Title>
        부서명: <InputTitle></InputTitle>{" "}
      </Title>
      <Ulprops>
        <Liprops>
          <Ul>
            <Li width={231}>
              필수근무시작시간:{" "}
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
          </Ul>
        </Liprops>
        <Liprops>
          <Ul>
            <Li width={200}>
              필수근무시간:{" "}
              <Input
                width={30}
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  if (e.target.value > 24) {
                    e.target.value = 24;
                  }
                }}
              ></Input>
            </Li>
            <Li width={230}>
              일간요구 업무시간:
              <Input
                width={30}
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  if (e.target.value > 24) {
                    e.target.value = 24;
                  }
                }}
              ></Input>{" "}
            </Li>
            <Li width={150}>
              인원수:{" "}
              <Input
                width={30}
                onInput={(e: any) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              ></Input>
              명
            </Li>
          </Ul>
        </Liprops>
      </Ulprops>
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
  top: -65px;
  left: 330px;
  height: 50px;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`;
const Liprops = styled.li`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 27px;
  border-radius: 20px;
  padding: 0px 7px;
`;
const InputTitle = styled.input`
  width: 250px;
  font: 700 40px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.purple};
  border-radius: 20px;
  padding: 0px 20px;
`;
