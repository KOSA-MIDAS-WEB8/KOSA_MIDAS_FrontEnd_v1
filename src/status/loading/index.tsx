import styled, { keyframes } from "styled-components";
const Loading: React.FC = () => {
  return (
    <>
      <Spinner />
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
  left: 200px;
  top: 200px;
  width: 300px;
  height: 300px;
  border: 20px solid ${(props) => props.theme.colors.white};
  border-bottom-color: ${(props) => props.theme.colors.purple};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${turn} 1s linear infinite;
`;
