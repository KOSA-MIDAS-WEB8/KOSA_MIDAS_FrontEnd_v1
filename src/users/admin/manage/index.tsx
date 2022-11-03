/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../../status/loading";
import Error from "../../../status/error";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { BASE_URL } from "../../../base";
import axios from "axios";
import AdminUser from "./user";
import { Link } from "react-router-dom";
const AdminManage = () => {
  const { adminId }: any = useParams();
  const { status, data } = getUsers(adminId);
  const [count, setCount] = useState(-1);
  const [state, setState] = useState(false);
  const InputRef = useRef<any[]>([]);
  const EditSubmit = async (user: string) => {
    const ad = {
      name: InputRef.current[0].value, // 이름 수정
      department: InputRef.current[1].value, // 부서코드 수정
      is_admin: state, // de관리자 여부 수정
    };
    const token = localStorage.getItem("access_token");
    const { data } = await axios.patch(BASE_URL + `/admin/users/${user}`, ad, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data === "error") {
      window.alert("다시요청해주세요");
      return;
    } else {
      setCount(-1);
    }
  };
  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error />
      ) : (
        <>
          <Ul>
            {data.members.map((user: any, i: number) => (
              <>
                <Li onClick={() => setCount(i)}>
                  {count === i ? (
                    <>
                      <Box>
                        <Ul>
                          <Li>
                            이름 수정:{" "}
                            <Input
                              type="text"
                              ref={(el: any) => (InputRef.current[0] = el)}
                            ></Input>
                          </Li>
                          <Li>
                            부서코드수정:
                            <Input
                              type="text"
                              ref={(el: any) => (InputRef.current[1] = el)}
                            ></Input>
                          </Li>
                          <Li>
                            관리자여부
                            <Input
                              type="checkbox"
                              onChange={() => setState(!state)}
                            ></Input>
                          </Li>
                        </Ul>
                        <Button onClick={() => EditSubmit(user.user_Id)}>
                          수정
                        </Button>
                        <Button onClick={() => setCount(-1)}>취소</Button>
                      </Box>
                    </>
                  ) : (
                    <>
                      <AdminUser data={user}></AdminUser>
                      <Link
                        to={`/admin/chart${user.user_Id}`}
                        state={{ user: data.members }}
                      >
                        <Button>차트보러가기</Button>
                      </Link>
                    </>
                  )}
                </Li>
              </>
            ))}
          </Ul>
        </>
      )}
    </>
  );
};
export default AdminManage;
const getUsers = (adminId: any) => {
  const token = localStorage.getItem("access_token");
  return useQuery(["usersAdmin", adminId], async () => {
    const { data } = await axios({
      method: "GET",
      url: BASE_URL + `/departments/${adminId}/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  });
};
const Input = styled.input``;
const Ul = styled.ul`
  list-style-type: none;
`;
const Li = styled.li`
  margin-top: 20px;
`;
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
const Button = styled.button``;
