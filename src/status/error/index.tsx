import styled from "styled-components";
import { BiError } from "react-icons/bi";
const Error: React.FC = () => {
  return (
    <>
      <Box>
        <Triangle />
        <ErrorFont>Error!!</ErrorFont>
      </Box>
    </>
  );
};
export default Error;
const Box = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 250px;
  width: 500px;
  height: 100px;
`;
const Triangle = styled(BiError)`
  position: relative;
  left: 80px;
  width: 250px;
  height: 250px;
  color: ${(props) => props.theme.colors.error};
`;
const ErrorFont = styled.div`
  position: relative;
  top: -30px;
  color: ${(props) => props.theme.colors.error};
  font: 700 128px ${(props) => props.theme.font.en};
`;
