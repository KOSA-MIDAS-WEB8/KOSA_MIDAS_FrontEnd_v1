import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./users/admin";
import Main from "./commons/main";
import User from "./users/user";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Loading from "./status/loading";
import Error from "./status/error";
import { createGlobalStyle } from "styled-components";
import Signup from "./users/Signup";
import Login from "./users/Login";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <BrowserRouter>
              <GlobalStyle />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/user" element={<User />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/load" element={<Loading />} />
                <Route path="/error" element={<Error />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
              </Routes>
            </BrowserRouter>
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
