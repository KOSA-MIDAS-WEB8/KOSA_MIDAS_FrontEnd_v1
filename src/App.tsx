import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./users/admin";
import Main from "./main";
import User from "./users/user";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Loading from "./status/loading";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/user" element={<User />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/loading" element={<Loading />} />
              </Routes>
            </BrowserRouter>
          </RecoilRoot>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
