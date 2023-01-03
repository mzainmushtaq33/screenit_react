import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Box, Button, FormControl, FormHelperText } from '@mui/material';
import AnimateButton from '../../component/ui-components/extended/AnimateButton';
import AuthWrapper from './auth-wrapper';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../routes/slug';

const ForgotPass = () => {

    // from submit
    const navigate = useNavigate();

    const handleSubmitValue = (e) => {
        // console.log(e);

    }
    const loginNav = () => {
        navigate(LOGIN);
    }

    return (
        <div>
            {/* <h1>Login</h1> */}
            <AuthWrapper>
                <div className=''>
                    <h1>Forgot Password</h1>
                    <span>Enter your email address and your password will be reset and emailed to you.</span>
                    <br /><br />
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().max(255).required('Email or Username is required'),
                            password: Yup.string().max(255).required('Password is required')
                        })}
                        onSubmit={(e) => handleSubmitValue(e)}
                        className=""
                    >
                        {/* isSubmitting */}
                        {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{}}>
                                    <label htmlFor="">Email Address<span className='required'>*</span></label>
                                    <input
                                        id="outlined-adornment-email-login"
                                        placeholder='admin@screeniton.com'
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        label="Username"
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                {errors.submit && (
                                    <Box sx={{ mt: 3 }}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Box>
                                )}
                                <Box sx={{ mt: 2 }}>
                                    <AnimateButton>
                                        <Button
                                            className='submitBtn text-capitalize'
                                            disableElevation
                                            // disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Send New Password
                                        </Button>
                                    </AnimateButton>
                                </Box>
                                <br />
                                <span className='text-center d-block'>OR</span>
                                <br />

                                <Box>
                                    <AnimateButton>
                                        <Button
                                            className='submitBtn loginBtn text-capitalize'
                                            disableElevation
                                            // disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            onClick={(e) => loginNav()}
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Login
                                        </Button>
                                    </AnimateButton>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </div>
            </AuthWrapper>
        </div>
    );
};

export default ForgotPass;