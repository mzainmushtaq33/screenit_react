import React from 'react';
import { Grid } from '@mui/material';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import MainButton from '../../component/ui-components/main-buttons/main-button';
import { IconCirclePlus } from '@tabler/icons';
import { ADD_SCREEN } from '../../routes/slug';
import imgDev from '../../services/images/New folder/device.png';
import img01 from '../../services/images/Artboard – 86.png';
import img02 from '../../services/images/Artboard – 87.png';
import img03 from '../../services/images/Artboard – 88.png';

const Dashboard = () => {
    return (
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: '0' }}>
            <Grid item xs={12} md={4} lg={4} xl={3} className="dashCrdWrp" sx={{marginBottom: '20px'}}>
                <div className='cmnBox welAdmin'>
                    <p>Welcome</p>
                    <h1>Admin</h1>
                    <span>A Fresh Dashboard Greets <br />You Today!</span>
                    <Link to={ADD_SCREEN}>
                        <MainButton btnText="Add Screens" icon={<IconCirclePlus />} />
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} md={8} lg={8} xl={6} className="dashCrdWrp" sx={{marginBottom: '20px'}}>
                <div className='cmnBox screenDash'>
                    <div className='topBar'>
                        <div>
                            <h3 className='titleText'>Screen</h3>
                            <span>Stats</span>
                        </div>
                        <MainButton btnText="Total: 10" wdt="150px" variant="outlinedDark" />
                    </div>
                    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{}}>
                        <Grid item xs={12} md={4} lg={4} xl={4} className="stsCrdWrp">
                            <div className='stsBox'>
                                Online <b>7</b>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} className="stsCrdWrp">
                            <div className='stsBox'>
                                Offline <b>3</b>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} xl={4} className="stsCrdWrp">
                            <div className='stsBox'>
                                Inactive <b>1</b>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4} xl={3} className="dashCrdWrp" sx={{marginBottom: '20px'}}>
                <div className='cmnBox deviceDash'>
                    <div>
                        <h3 className='titleText'>Device</h3>
                        <span>Device Get any Device by Subscribing to an Plan</span>
                    </div>
                    <div className='deviceBtm'>
                        <MainButton btnText="Buy Now" wdt="150px" />
                        <img src={imgDev} alt="" width="100px" />
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={8} lg={8} xl={3} className="">
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{}}>
                    <Grid item xs={12} md={6} lg={6} xl={12} className="dashCrdWrp" sx={{marginBottom: '20px'}}>
                        <div className="cldCrdWrp">
                            <div className='cldBox subscriptionDash'>
                                <h3 className='titleText'>Subscription</h3>
                                <b className='top'>0/2<sub> Screens</sub></b>
                                <div className='planIssue'>
                                    <div>
                                        <span>Trail Plan:</span>
                                        <b>Standard Plan</b>
                                    </div>
                                    <div>
                                        <span>Plan End Date:</span>
                                        <b>10/21/2022</b>
                                    </div>
                                </div>
                                <MainButton btnText="Update" wdt="150px" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={12} className="dashCrdWrp" sx={{marginBottom: '20px'}}>
                        <div className="cldCrdWrp">
                            <div className='cldBox userManageDash'>
                                <div className="header">
                                    <h3 className='titleText'>Subscription</h3>
                                    <b className='top'>5<sub> Users</sub></b>
                                </div>
                                <MainButton btnText="Manage" variant="outlinedBtn" wdt="150px" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={9} className="dashCrdWrp" sx={{marginBottom: '20px'}}>
                <div className='cmnBox'>
                    <h3 className='titleText centerTitle'>
                        How to Set Up Digital Signage with <Link to='/'>ScreenItOn</Link>
                    </h3>
                    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{}}>
                        <Grid item xs={12} md={6} lg={6} xl={4} className="howToCrdWrp">
                            <div className='howToBox'>
                                <div className="imgParentCrd">
                                    <img src={img01} width="100%" alt="" />
                                </div>
                                <div className='footerCrd'>
                                    <h3 className='titleText'>
                                        Step: 1
                                    </h3>
                                    <span>Download the <Link to='/'>ScreenItOn</Link> App</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={4} className="howToCrdWrp">
                            <div className='howToBox'>
                                <div className="imgParentCrd">
                                    <img src={img02} width="100%" alt="" />
                                </div>
                                <div className='footerCrd'>
                                    <h3 className='titleText'>
                                        Step: 1
                                    </h3>
                                    <span>Download the <Link to='/'>ScreenItOn</Link> App</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} xl={4} className="howToCrdWrp">
                            <div className='howToBox'>
                                <div className="imgParentCrd">
                                    <img src={img03} width="100%" alt="" />
                                </div>
                                <div className='footerCrd'>
                                    <h3 className='titleText'>
                                        Step: 1
                                    </h3>
                                    <span>Download the <Link to='/'>ScreenItOn</Link> App</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid >
    );
};

export default Dashboard;