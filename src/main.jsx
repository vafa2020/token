import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./fonts/IranYekan/Qs_Iranyekan bold.ttf";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const theme = createTheme({
  typography: {
    fontFamily: "IranYekan",
  },
  direction: "rtl",

  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'IranYekan';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('IranYekan'), local('IranYekan'),  url("./fonts/IranYekan/Qs_Iranyekan bold.ttf") format("truetype");
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
  },
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
