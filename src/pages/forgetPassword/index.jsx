import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef, useState } from "react";
import { useEffect } from "react";
const ForgetPassword = () => {
  const defaultTheme = createTheme();
  const Email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const UserInfo = {
      Email: Email?.current?.value,
    };
    // console.log("UserInfo", UserInfo);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "IranYekan",
            }}
          >
            فراموشی رمز عبور
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email"
              label="ایمیل"
              name="Email"
              autoFocus
              sx={{
                fontFamily: "IranYekan",
              }}
              inputRef={Email}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ fontFamily: "IranYekan", mt: 3, mb: 2 }}
            >
              تایید
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default ForgetPassword;
