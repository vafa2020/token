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
const Register = () => {
  const defaultTheme = createTheme();
  const [isPersist, setIsPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );
  const UserName = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(isPersist));
  }, [isPersist]);
  const handleSubmit = (event) => {
    event.preventDefault()
  };
  const persistHandlder = ({ target }) => {
    if (target.checked) {
      setIsPersist(true);
    } else {
      setIsPersist(false);
    }
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
              margin="normal"
              required
              fullWidth
              id="UserName"
              label="نام کاربری"
              name="UserName"
              autoFocus
              sx={{
                fontFamily: "IranYekan",
              }}
              ref={UserName}
            />
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
              ref={Email}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="گذرواژه"
              type="password"
              id="Password"
              autoComplete="current-password"
              sx={{
                fontFamily: "IranYekan",
              }}
              ref={Password}
            />
            <FormControlLabel
              sx={{
                fontFamily: "IranYekan",
              }}
              control={
                <Checkbox
                  color="primary"
                  checked={isPersist}
                  onChange={persistHandlder}
                />
              }
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
