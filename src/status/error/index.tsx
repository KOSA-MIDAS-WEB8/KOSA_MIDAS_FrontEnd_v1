import styled from "styled-components";
import { BiError } from "react-icons/bi";
const Error: React.FC = () => {
  return (
    <>
      <div>Error</div>
      <Triangle />
    </>
  );
};
export default Error;
const Triangle = styled(BiError)`
  width: 250px;
  height: 250px;
  color: ${(props) => props.theme.colors.error};
`;
