import Login from "./component/login/login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./component/signup/SignUp";
import UiChat from "./component/ChatPage/UiChat";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Gmail } from "./component/gmail/Gmail";
import "./index.css";
function App() {
  const theme = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chatPage" element={<UiChat />} />
            <Route
              path="/user/email_validation/86c636ec01165c6683f53d4830c2f69649dd16ff0cfa9f5ced2c28e18564e33e/"
              element={<Gmail />}
            />
            <Route path="*" element={<h1>this page not found</h1>} />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
