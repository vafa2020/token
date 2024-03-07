import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./fonts/IranYekan/Qs_Iranyekan bold.ttf";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'IranYekan',
  },
  direction:'rtl',
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
