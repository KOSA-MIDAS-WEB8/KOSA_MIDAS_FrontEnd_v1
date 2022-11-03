import { asdf } from "./data";
import DepartmentList from "./list";
import styled from "styled-components";
import { useState, useCallback, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Edit from "./edit";
import axios from "axios";
import { BASE_URL } from "../../base";
import Error from "../../status/error";
import Loading from "../../status/loading";
import { Link } from "react-router-dom";
interface dataProps {
  data: {
    department_list: [
      {
        code: string;
        name: string;
        core_time_start: string;
        core_time_hours: number;
        work_hour: number;
        member_count: number;
        default_start_hour: string;
      }
    ];
  };
}
const Admin = () => {
  const token = localStorage.getItem("access_token");
  const { status, data } = useQuery(["userGet", token], async () => {
    const { data } = await axios({
      method: "GET",
      url: BASE_URL + "/departments",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  });
  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error />
      ) : (
        <Content data={data} />
      )}
    </>
  );
};
const Content = (data: dataProps) => {
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    asdfq();
  }, []);
  const asdfq = async () => {
    const data = axios.post(
      BASE_URL + "/departments",
      {
        name: "소프트웨어개발부",
        core_time_start: "11:11",
        core_time_hours: 2,
        work_hour: 8,
        default_start_hour: "11:11",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    return data;
  };
  const dataprops = data.data.department_list;
  const [list, setList] = useState<any>(dataprops);
  const [state, setState] = useState<boolean>(false);
  const [count, setCount] = useState<number>(-1);
  const Change = (i: number) => {
    if (count !== -1) {
      return;
    } else {
      setCount(i);
    }
  };
  const ChangeDataListFunc = useCallback((e: any) => {
    // eslint-disable-next-line array-callback-return
    const same = dataprops.filter((el: { name: string | any[] }) => {
      if (el.name.indexOf(e.target.value) !== -1) {
        return el;
      }
    });
    const content = same.sort(
      (a: { name: string | any[] }, b: { name: string | any[] }) => {
        return a.name.indexOf(e.target.value) - b.name.indexOf(e.target.value);
      }
    );
    setList(content);
  }, []);
  return (
    <>
      <Layout>
        <Ul>
          <Li>
            <InputBox>
              <Search />
              <InputSearch onChange={(e: any) => ChangeDataListFunc(e)} />
            </InputBox>
          </Li>
          <Li>
            {state ? (
              <>
                <Box>
                  <Box2 state={state}>
                    <Edit />
                  </Box2>
                  <SubmitButton onClick={() => setState(false)}>
                    추가
                  </SubmitButton>
                  <DeleteButton onClick={() => setState(false)}>
                    취소
                  </DeleteButton>
                </Box>
              </>
            ) : (
              <PlusBtn onClick={() => setState(true)}>+</PlusBtn>
            )}
          </Li>
          {list.map((item: any, i: number) => (
            <Li>
              <Box>
                {i === count ? (
                  <>
                    <Box2 state={i === count}>
                      <Edit />
                    </Box2>
                    <SubmitButton onClick={() => setCount(-1)}>
                      확인
                    </SubmitButton>
                    <DeleteButton onClick={() => setCount(-1)}>
                      취소
                    </DeleteButton>
                  </>
                ) : (
                  <>
                    <Link to={`/admin/${item.code}`}>
                      <Box2 state={i === count}>
                        <DepartmentList data={item} />
                      </Box2>
                    </Link>

                    <EditBtn onClick={() => Change(i)} />
                  </>
                )}
              </Box>
            </Li>
          ))}
        </Ul>
      </Layout>
    </>
  );
};
export default Admin;
const Layout = styled.div`
  height: 658px;
  width: 1000px;
  left: 0;
  right: 0;
  margin: auto;
`;
const Ul = styled.ul`
  margin-top: 100px;
  height: 658px;
  width: 1000px;
  list-style-type: none;
`;
const Li = styled.li`
  margin-left: -40px;
  margin-top: 29px;
`;
const PlusBtn = styled.div`
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border-radius: 50%;
  border: none;
  padding: 2px 0px 0px 17px;
  font: 700 32px ${(props) => props.theme.font.en};
`;
const InputBox = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 400px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding-left: 10px;
  padding-top: 10px;
`;
const InputSearch = styled.input`
  position: relative;
  width: 350px;
  height: 50px;
  top: -13.5px;
  border: none;
  border-radius: 20px;
  padding-left: 10px;
  font: 700 20px ${(props) => props.theme.font.kr};
`;
const Search = styled(AiOutlineSearch)`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.colors.black};
`;
const Box = styled.div`
  width: 1000px;
  height: 120px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px 70px 0px 25px;
  border-radius: 20px;
`;
const EditBtn = styled(MdModeEditOutline)`
  position: relative;
  width: 40px;
  height: 40px;
  top: -100px;
  left: 900px;
  :hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
const Box2 = styled.div<{ state: boolean }>`
  position: relative;
  top: -30px;
  left: -25px;
  width: 900px;
  height: 120px;
  padding: 30px 70px 0px 25px;
  border-radius: 20px;
  :hover {
    background-color: ${(props) =>
      props.state ? props.theme.colors.white : props.theme.colors.gray};
  }
`;
const SubmitButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.purple};
  font: 700 24px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.white};
  top: -130px;
  left: 850px;
  border: none;
  border-radius: 20px;
`;
const DeleteButton = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.gray};
  font: 700 24px ${(props) => props.theme.font.kr};
  color: ${(props) => props.theme.colors.white};
  top: -80px;
  left: 750px;
  border: none;
  border-radius: 20px;
`;
