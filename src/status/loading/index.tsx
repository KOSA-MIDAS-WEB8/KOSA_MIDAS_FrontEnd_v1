import styled, { keyframes } from "styled-components";
const Loading: React.FC = () => {
  return (
    <>
      <Box>
        <Spinner />
        <Font>Loading...</Font>
      </Box>
    </>
  );
};
export default Loading;
const turn = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  position: relative;
  left: 120px;
  width: 250px;
  height: 250px;
  border: 20px solid ${(props) => props.theme.colors.white};
  border-bottom-color: ${(props) => props.theme.colors.purple};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${turn} 2.5s linear infinite;
`;
const Box = styled.div`
  position: relative;
  top: 250px;
  width: 500px;
  height: 505px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Font = styled.div`
  width: 480px;
  height: 130px;
  font-size: 128px;
  font: ${(props) => props.theme.font.en};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`;
