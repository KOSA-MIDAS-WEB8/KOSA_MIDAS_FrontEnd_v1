import styled from "styled-components";
const AdminUser = ({ data }: any) => {
  return (
    <>
      <Box>
        <Title>{data.name}</Title>
      </Box>
    </>
  );
};
export default AdminUser;
const Box = styled.div`
  position: relative;
  width: 1000px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  padding-top: 50px;
`;
const Title = styled.div`
  width: 200px;
  height: 64px;
  font: 700 64px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.black};
`;
