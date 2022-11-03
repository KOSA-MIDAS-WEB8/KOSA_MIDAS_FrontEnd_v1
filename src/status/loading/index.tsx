import styled, { keyframes } from "styled-components";
const Loading: React.FC = () => {
  return (
    <>
      <Spinner />
    </>
  );
};
export default Loading;
const Spinner = styled.div``;
const Turn = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
