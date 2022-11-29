import { Box, Grid } from '@mui/material';
import './devices.scss';
import React from 'react';
import MainCard from '../../component/ui-components/cards/main-card';
import img01 from '../../services/images/New folder/01.png';
import img02 from '../../services/images/New folder/02.png';
import img03 from '../../services/images/New folder/03.png';
import { IconCirclePlus, IconMinus, IconPlus } from '@tabler/icons';
import MainButton from '../../component/ui-components/main-buttons/main-button';
import InputComponent from '../../component/ui-components/formComponents/input';
import CheckboxComponent from '../../component/ui-components/formComponents/checkbox';
import { edit_v1 } from '../../services/svg/svg-icon';

const Devices = () => {
    const [counter, setCounter] = React.useState(7);
    const [currAct, setCurrAct] = React.useState({ choose: true, delivery: false, buy: false })

    return (
        <MainCard className="cardPadding5" sx={{ boxShadow: 0, border: 0, borderRadius: '20px', padding: '20px' }}>
            <Box className='deviceHeader'>
                <div className='tabs'>
                    <p>
                        <span className={`${currAct?.choose ? 'active' : ''}`}>1</span> Choose Device
                    </p>
                    <p>
                        <span className={`${currAct?.delivery ? 'active' : ''}`}>2</span> Delivery Details
                    </p>
                    <p>
                        <span className={`${currAct?.buy ? 'active' : ''}`}>3</span> Buy
                    </p>
                </div>
                <h4>Total Payment <span>$779.99</span></h4>
            </Box>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: '30px 0' }} className={`${currAct?.choose ? 'd-block' : 'd-none'}`}>
                <Grid item xs={12} md={6} lg={6} xl={3} className="cardProWrapper">
                    <Box className='productCard activeCard'>
                        <div className='header'>
                            <div>
                                <h4>Data Player</h4>
                                <p>by <span>ScreenItOn</span></p>
                            </div>
                            <div className='checkParent'>
                                <label className="chkContainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <img src={img01} width="150px" alt="" />
                        <span>$ 79.99</span>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={3} className="cardProWrapper">
                    <Box className='productCard'>
                        <div className='header'>
                            <div>
                                <h4>Data Player</h4>
                                <p>by <span>ScreenItOn</span></p>
                            </div>
                            <div className='checkParent'>
                                <label className="chkContainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <img src={img02} width="150px" alt="" />
                        <span>$ 79.99</span>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={6} className="cardProWrapper">
                    <Box className='productCard'>
                        <h1>Select Device</h1>
                        <div className="sidebarWrapper">
                            <div className="sidebarImg">
                                <div className="parent">
                                    <img src={img03} width="200px" alt="" />
                                </div>
                                <div className='childParent'>
                                    <div className="parent">
                                        <img src={img03} width="70px" alt="" />
                                    </div>
                                    <div className="parent">
                                        <img src={img03} width="70px" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='sidebarContent'>
                                <p className='title'>
                                    <b>Android Stick Player</b>
                                    &nbsp;by&nbsp;
                                    <a href="/" rel="noopener noreferrer">ScreenItOn</a>
                                    <span className='fontMedium'>$79.99</span>
                                </p>
                                <p>A label with device name will be put on each device. This can be useful for person who receive it to know where to put the player. i.e. Lobby.</p>
                                <p>
                                    Come with ScreenItOn preconfigured, just connect to the internet and ready to go.
                                    <span>- Small form factor, fit behind your TV,</span>
                                    <span>- no mounting required.</span>
                                    <span>- Play 4K UHD Content</span>
                                    <span>- WiFi (Ethernet possible via adapter)</span>
                                    <span>- Passive cooling (no fan, noise)</span>
                                    <span>- 16GB of Storage</span>
                                </p>
                                <div className='counter'>
                                    <IconMinus onClick={() => setCounter(counter < 1 ? 0 : counter - 1)} />
                                    <input type="number" value={counter} onChange={() => setCounter(counter)} />
                                    <IconPlus onClick={() => setCounter(counter + 1)} />
                                </div>
                                <div className='btnGrp'>
                                    <MainButton btnText="Back" variant="outlinedDark" disabled />
                                    <MainButton btnText="Next" variant="" clickHandler={() => setCurrAct({ choose: false, delivery: true, buy: false })} />
                                </div>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <div className={`deliveryDetails ${currAct?.delivery ? 'd-block' : 'd-none'}`}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>
                    <Grid item xs={12} md={6} lg={4} xl={4} className="marginBtm">
                        <InputComponent
                            label="Contact Name"
                            required
                            placeholder="Admin"
                        />
                        <br />
                        <InputComponent
                            label="Country"
                            required
                            placeholder="Bangladesh"
                        />
                        <br />
                        <InputComponent
                            label="Postal Code"
                            required
                            placeholder="5840"
                        />
                        <br /> <br />
                        <CheckboxComponent label="Same as Billing Address" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} xl={4} className="marginBtm">
                        <InputComponent
                            label="Mobile Number"
                            required
                            placeholder="638152654"
                        />
                        <br />
                        <InputComponent
                            label="State"
                            required
                            placeholder="Bogura"
                        />
                        <br />
                        <InputComponent
                            label="Address 1"
                            required
                            placeholder="Address"
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} xl={4} className="marginBtm">
                        <InputComponent
                            label="Company Name"
                            required
                            placeholder="Screeniton"
                        />
                        <br />
                        <InputComponent
                            label="City"
                            required
                            placeholder="Bogura"
                        />
                        <br />
                        <InputComponent
                            label="Address 2"
                            required
                            placeholder="Address"
                        />
                    </Grid>
                </Grid>
                <div className='btnGrp'>
                    <MainButton btnText="Back" variant="outlinedDark" clickHandler={() => setCurrAct({ choose: true, delivery: false, buy: false })} />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <MainButton btnText="Next" variant="" clickHandler={() => setCurrAct({ choose: false, delivery: false, buy: true })} />
                </div>
            </div>

            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={`buyDetailsWrp ${currAct?.buy ? 'd-block' : 'd-none'}`}>
                <Grid item xs={12} md={6} lg={8} xl={9} className="marginBtm">
                    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={12} md={12} lg={6} xl={4} className="">
                            <div className="buyDetails">
                                <h2>
                                    <b>Subscription Details</b>
                                    {/* {edit_v1} */}
                                </h2>
                                <span>$7.99 per month,<br />billed annually ($95.88)</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4} className="">
                            <div className="buyDetails">
                                <h2>
                                    <b>Subscription Details</b>
                                    {/* {edit_v1} */}
                                </h2>
                                <span>You will get 1 ScreenItOn<br />Players with 1GB RAM,<br />for free (you save $79.00)</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4} className="">
                            <div className="buyDetails">
                                <h2>
                                    <b>Other Information</b>
                                    {/* {edit_v1} */}
                                </h2>
                                <span></span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4} className="">
                            <div className="buyDetails">
                                <h2>
                                    <b>Delivery Details</b>
                                    {edit_v1}
                                </h2>
                                <span>
                                    To be billed to:<br />yuva<br />mobility<br />india 641025<br />tamilnadu, India.
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4} className="">
                            <div className="buyDetails">
                                <h2>
                                    <b>Delivery Details</b>
                                    {edit_v1}
                                </h2>
                                <span>
                                    To be shipped to:<br />yuva<br />mobility<br />india 641025<br />tamilnadu, India.
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} xl={4} className="">
                            <div className="buyDetails">
                                <h2>
                                    <b>Payment Details</b>
                                    {edit_v1}
                                </h2>
                                <div className='btnBtm'>
                                    <span>Credit Card Payment</span>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <h3><IconCirclePlus />&nbsp;Add Card</h3>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3} className=" marginBtm">
                    <div className="buyDetails minHeightA">
                        <div className="contentGrp">
                            <h2><b>Total Payment</b></h2>
                            <span>Credited amount: $0</span>
                            <br />
                            <br />
                            <br />
                            <h2><b>Total Payment <b className='active'>$779.99</b></b></h2>
                        </div>
                        <div className='btnGrp'>
                            <MainButton btnText="Back" variant="outlinedDark" clickHandler={() => setCurrAct({ choose: false, delivery: true, buy: false })} />
                            <MainButton btnText="Buy" variant="" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Devices;