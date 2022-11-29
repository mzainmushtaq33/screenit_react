import React from 'react';
import { Box, Grid } from '@mui/material';
import './auth-style.scss';
import HelpModal from './help-modal';
import MainButton from '../../component/ui-components/main-buttons/main-button';
import Logo from '../../services/images/Instagram Post – 8.png';
import Footer from '../../component/ui-components/footer/footer';
import { Carousel } from 'antd';

const AuthWrapper = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const createHandler = (e) => {
        setOpen(true);
    };

    return (
        <Box sx={{}} className="auth_wrapper mainFS16">
            <div className='getHelp getHelpNone'>Having trouble? <b onClick={createHandler}>Get Help</b></div>
            <div className='d-none getHelpBlock'><b onClick={createHandler}>Having trouble? Get Help</b></div>
            <HelpModal
                clickHandler={createHandler}
                open={open}
                setOpen={setOpen}
                titleText="Help"
            >
                <Box className="helpContent">
                    <div className='content'>
                        <b>Top Suggestions</b>
                        <span>1. Multi-users: Invite your team members to your account.</span>
                        <span>2. How to use Microsoft Teams Live app with ScreenItOn.</span>
                        <span>3. How to set up ScreenItOn Player on ChromeOS with Chrome Device Management.</span>
                    </div>
                    <MainButton btnText="Contact Us" variant="largeBtn" wdt="100%" />
                </Box>
            </HelpModal>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{}}>
                <Grid item xs={12} md={12} lg={5} xl={5} className="authFromParent">
                    <Box className="authFromWrapperBG">
                        <Box className='authFromWrapper'>
                            <div className="logo">
                                <img src={Logo} width="300px" alt="" />
                                {children}
                            </div>
                            <div className='AuthFooter'>
                                <Footer />
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={7} xl={7}>
                    <Box className='authContentWrapperBG'>
                        <Box className='authContentWrapper'>
                            <Carousel effect="fade" autoplay>
                                <div>
                                    <h1>We Make Any Screen a Digital Sign!</h1>
                                    <p>Impress your customers, visitors, engage your employees with beautifully designed contents.</p>
                                </div>
                                <div>
                                    <h1>We Make Any Screen a Digital Sign!</h1>
                                    <p>Impress your customers, visitors, engage your employees with beautifully designed contents.</p>
                                </div>
                                <div>
                                    <h1>We Make Any Screen a Digital Sign!</h1>
                                    <p>Impress your customers, visitors, engage your employees with beautifully designed contents.</p>
                                </div>
                            </Carousel>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AuthWrapper;