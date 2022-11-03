import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./users/admin";
import Main from "./commons/main";
import User from "./users/user";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { createGlobalStyle } from "styled-components";
import Signup from "./users/Signup";
import Login from "./users/Login";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GoToWork from "./users/user/GoToWork";
import LeaveWork from "./users/user/LeaveWork";
import AdminManage from "./users/admin/manage";
import TimeLine from "./users/user/TimeLine";
import { Chart } from "./users/admin/chart";
import { chulgeunState } from "./atom/index";
import { useRecoilValue } from "recoil";
function App() {
  const queryClient = new QueryClient();
  const state = useRecoilValue(chulgeunState);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <BrowserRouter>
              <GlobalStyle />
              <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/user" element={<User />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/goToWork" element={<GoToWork />} />
                <Route path="/user/leaveWork" element={<LeaveWork />} />

                <Route path="/user/timeline" element={<TimeLine />} />

                <Route path="/admin/:adminId" element={<AdminManage />} />
                <Route path="/admin/chart/:chartId" element={<Chart />} />
                {state ? <>출근상태입니다</> : <>퇴근상태입니다.</>}
              </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={true} />
          </RecoilRoot>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`
body, html {
  background-color: #4F73FF;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
* {
  outline: none;
  box-sizing: border-box;
}
`;
