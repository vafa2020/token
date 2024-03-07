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
const Register = () => {
  const defaultTheme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
            ثبت نام
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
              <TextField
            
                dir="rtl"
                margin="normal"
                required
                fullWidth
                id="email"
                label="ایمیل"
                name="email"
                autoFocus
                sx={{
                  fontFamily: "IranYekan",
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="گذرواژه"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  fontFamily: "IranYekan",
                }}
              />
            <FormControlLabel
              sx={{
                fontFamily: "IranYekan",
              }}
              control={<Checkbox value="remember" color="primary" />}
              label="مرا به خاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ fontFamily: "IranYekan", mt: 3, mb: 2 }}
            >
              ثبت نام
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="/forgetPassword"
                  variant="body2"
                  sx={{
                    fontFamily: "IranYekan",
                  }}
                >
                  فراموشی گذرواژه ؟
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    fontFamily: "IranYekan",
                  }}
                >
                  قبلا ثبت نام کرده ام.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;
