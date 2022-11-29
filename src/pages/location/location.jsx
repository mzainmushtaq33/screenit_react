import { Box, Grid } from '@mui/material';
import React from 'react';
import MainCard from '../../component/ui-components/cards/main-card';
import { dots3_v1 } from '../../services/svg/svg-icon';
import Map from './Map';

const Location = () => {

    const fakeLocation = [
        { icon: dots3_v1, title: 'Location 1', details: 'Screen 2 - Inactive' },
        { icon: dots3_v1, title: 'Location 2', details: 'Screen 1 - Inactive' },
        { icon: dots3_v1, title: 'Location 3', details: 'Not Assigned - Inactive' },
        { icon: dots3_v1, title: 'Location 4', details: 'Screen 3 - Inactive' }
    ]

    return (
        <MainCard sx={{ boxShadow: 0, border: 0, borderRadius: '20px', padding: '20px' }}>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{}}>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                    {
                        fakeLocation?.map((d, i) =>
                            <Box sx={{ marginBottom: '20px', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={i} className="borderBtm">
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: '' }}>
                                    <b className="fontTitle">{d.title}</b>
                                    <span>{d.details}</span>
                                </Box>
                                <Box>{d.icon}</Box>
                            </Box>
                        )
                    }
                </Grid>
                <Grid item xs={12} md={8} lg={8} xl={8}>
                    <Box sx={{ borderRadius: '20px', overflow: 'hidden' }}>
                        <Map />
                    </Box>
                </Grid>
            </Grid>

        </MainCard>
    );
};

export default Location;