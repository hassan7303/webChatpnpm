import "../../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
function SignUp() {
  const Navigate = useNavigate();

  //   password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  // user Name
  const [userName, setUserName] = useState();

  const sendUserNameAndPassword = () => {
    Navigate("/chatPage");
    console.log(userName);
    console.log(password);
    console.log(password2);
  };
  return (
    <div className="login">
      <div className="bg"></div>
      <div className="input_login" dir="ltr">
        {/* user Name */}
        <TextField
          onChange={(event) => setUserName(event.target.value)}
          id="input-with-icon-textField_UserName"
          label="ایمیل خپود را وارد کنید"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        {/* password */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            رمز خود را وارد کنید
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={(event) => setPassword(event.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* password */}
        <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            رمز خود را وارد کنید
          </InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={(event) => setPassword2(event.target.value)}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <button
          className="btn btn-primary w-100 btn_signUp"
          onClick={sendUserNameAndPassword}
        >
          ثبت نام{" "}
        </button>
      </div>
    </div>
  );
}
export default SignUp;
