import React from 'react';
import { Box, Button } from '@mui/material';
import './main-button.scss';
const MainButton = ({ btnText, icon, clickHandler = () => { }, wdt, variant, disabled ,type}) => {


    return (
        <Box className={`${disabled ? 'not_allowed' : ''}`} sx={{ width: wdt }}>
            <Button
                disabled={disabled}
                className={`custom-main-btn ${variant}`}
                sx={{ width: wdt, opacity: disabled ? 0.6 : 1 }}
                onClick={(e) => clickHandler(e)}
                type={type}
            >
                {icon ? icon : ''} {btnText}
            </Button>
        </Box >

    );
};

export default MainButton;