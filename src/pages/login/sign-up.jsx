import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Stack,
  useTheme,
} from "@mui/material";
import AnimateButton from "../../component/ui-components/extended/AnimateButton";
import AuthWrapper from "./auth-wrapper";
import { IconEye, IconEyeOff } from "@tabler/icons";
import { Link } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../routes/slug";
import { useRegisterMutation } from "../../reduxToolKit/authentication/authService";
import { ToastMessage } from "../../utils/toastMessage/ToastMessage";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [authRegisterSendData] = useRegisterMutation();

  const [showPassword, setShowPassword] = React.useState(false);
  const [checkedA, setCheckedA] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // from submit

  const handleSubmitValue = async (e,{setFieldError}) => {
    const data = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    try {
      const response = await authRegisterSendData(data);
      ToastMessage(
        response?.data?.success || response?.error?.data?.success,
        response?.data?.message || response?.error?.data?.message
      );
      if( response?.data?.success){
        localStorage.setItem("screenItOnInfo", JSON.stringify(response?.data?.data));
        navigate(`${DASHBOARD}`)
      }else{
        setFieldError(Object.keys(response?.error?.data?.data)[0],Object.values(response?.error?.data?.data)[0])
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {/* <h1>Login</h1> */}
      <AuthWrapper>
        <div className="">
          <h1>Sign Up</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              checked: false,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string("Enter Name").required("Name is required"),
              email: Yup.string()
                .max(255)
                .required("Email or Username is required"),
              password: Yup.string().max(255).required("Password is required"),
              checked: Yup.bool("select checkbox").oneOf(
                [true],
                "Field must be checked"
              ),
            })}
            onSubmit={handleSubmitValue}
            className=""
          >
            {/* isSubmitting */}
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
                  sx={{}}
                >
                  <label htmlFor="">
                    Full Name<span className="required">*</span>
                  </label>
                  <input
                    id="outlined-adornment-name-login"
                    placeholder="Enter Name"
                    type="text"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Full Name"
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-name-login"
                    >
                      {errors.name}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                  sx={{}}
                >
                  <label htmlFor="">
                    Email Address<span className="required">*</span>
                  </label>
                  <input
                    id="outlined-adornment-email-login"
                    placeholder="admin@screeniton.com"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Username"
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  sx={{ ...theme.typography.customInput }}
                  className="inputPassword"
                >
                  <label htmlFor="">
                    Password<span className="required">*</span>
                  </label>
                  <input
                    id="outlined-adornment-password-login"
                    placeholder="Enter password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Password"
                  />
                  <IconButton
                    className="iconPassEye"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                    sx={{}}
                  >
                    {showPassword ? <IconEyeOff /> : <IconEye />}
                  </IconButton>
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
                <Stack
                  direction="row"
                  className="formColumn"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <FormControl
                    error={Boolean(touched.checked && errors.checked)}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checked"
                          checked={checkedA}
                          onChange={(event) => {
                            handleChange(event);
                            setCheckedA(event.target.checked);
                          }}
                          onBlur={handleBlur}
                        />
                      }
                      label={<span>I accept the terms & conditions*</span>}
                    />
                    {touched.checked && errors.checked && (
                      <FormHelperText error id="">
                        {errors.checked}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Stack>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}

                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      className="submitBtn"
                      disableElevation
                      // disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      Sign Up
                    </Button>
                  </AnimateButton>
                </Box>
                <p className="doNotAcc">
                  Already have an account?{" "}
                  <Link to={LOGIN}>
                    <b>Login</b>
                  </Link>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </AuthWrapper>
    </div>
  );
};

export default SignUp;
