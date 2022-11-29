import { Box, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { menu_v1 } from '../../services/svg/svg-icon';
import Footer from '../ui-components/footer/footer';
import './layouts.scss';
import NotificationSection from './NotifixationSection/NotifizationSection';
import ProfileSection from './ProfileSection/ProfileSection';
import SideNav, { navItem } from './side-nav';

const Layouts = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <Box id="mainLayout">
            <Box className='layout_sidebar'>
                <SideNav />
            </Box>
            <Box className='layout_content_wrapper'>
                <header className="layout_header">
                    <div className='menu_wrapper'>
                        <div className='menu_drawer d-none'>
                            <button onClick={() => setOpen(true)}>{menu_v1}</button>
                            <Drawer
                                anchor='left'
                                open={open}
                                onClose={() => setOpen(false)}
                            >
                                <SideNav />
                            </Drawer>
                        </div>
                        {
                            navItem?.map((d, i) =>
                                <h2 className='margin0' key={i}>{pathname === d.url ? d.name : ''}</h2>
                            )
                        }

                    </div>

                    <div className='useActionPages'>
                        <NotificationSection />
                        <ProfileSection />
                    </div>
                </header>
                <Outlet />
                <Footer />
            </Box>
        </Box>
    );
};

export default Layouts;