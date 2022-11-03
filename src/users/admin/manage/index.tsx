/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../../status/loading";
import Error from "../../../status/error";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../base";
import axios from "axios";
const AdminManage = () => {
  const { adminId }: any = useParams();
  const { status, data } = getUsers(adminId);
  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error />
      ) : (
        <div>성공</div>
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
      url: BASE_URL + `/${adminId}/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  });
};
