import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material';
import SubCard from '../../component/ui-components/cards/sub-card';
import MainButton from '../../component/ui-components/main-buttons/main-button';
import { minus_v1 } from '../../services/svg/svg-icon';

const HelpModal = ({ children, setOpen, open, titleText }) => {
    const theme = useTheme();
    const style = {
        position: 'absolute',
        top: '50px',
        left: 'auto',
        right: '50px',
        // transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '700px',
        overflow: 'auto',
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        [theme.breakpoints.only('xs')]: {
            width: '98%',
            right: '3px'
        },
        [theme.breakpoints.only('sm')]: {
            width: '90%',
            right: '3px'
        },
        [theme.breakpoints.only('md')]: {
            width: '450px',
        },
        [theme.breakpoints.only('lg')]: {
            width: '450px',
        }
        // p: 4
    };

    const handleClose = () => setOpen(false);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
            sx={{ zIndex: 1300 }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <SubCard
                        className="helpModalCard"
                        // sx={{ overflow: 'scroll' }}
                        sx={{ border: 'none' }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
                            <h1>{titleText ? titleText : 'HELP'}</h1>
                            <MainButton clickHandler={handleClose} wdt="auto" icon={minus_v1} btnText="" variant="btnTransparent colorWhite" />
                        </Box>
                       
                        {children}
                    </SubCard>
                </Box>
            </Fade>
        </Modal>
    );
};

export default HelpModal;
