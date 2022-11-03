import styled, { keyframes } from "styled-components";
const Error: React.FC = () => {
  return (
    <>
      <Spinner />
    </>
  );
};
export default Error;
const Spinner = styled.div``;
const Turn = keyframes`
  0% {
     transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
