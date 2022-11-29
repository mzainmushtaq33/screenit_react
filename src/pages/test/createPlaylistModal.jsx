import { Box, Grid } from '@mui/material';
import { IconCirclePlus } from '@tabler/icons';
import { Row } from 'antd';
import React from 'react';
import InputComponent from '../../component/ui-components/formComponents/input';
import SelectComponent from '../../component/ui-components/formComponents/select';
import MainButton from '../../component/ui-components/main-buttons/main-button';
import FullScreenModal from '../../component/ui-components/main-modals/full-screen-modal';
import CustomTab from '../../component/ui-components/tab/tab';
import { next_v1, prev_v1 } from '../../services/svg/svg-icon';
import img01 from '../../services/images/New folder/Screenshot_1.png';

const CreatePlaylistModal = () => {
    const [open, setOpen] = React.useState(false);
    const createHandler = (e) => {
        setOpen(true);
    };

    const nextPrevHandler = (e) => {
        console.log(e);
    };
    const changeHandler = (e) => {
        console.log(e);
    };
    let countries = [
        "Bangladesh",
        "Bhutan",
        "India",
        "Maldive",
        "Nepal",
        "Pakistan",
        "Sri Lanka",
    ];

    let tabArray = [
        {
            name: "Images",
            key: "images",
            component:
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='createPlayListImgParent'>
                    <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
                        <img src={img01} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
                        <img src={img01} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
                        <img src={img01} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
                        <img src={img01} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
                        <img src={img01} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
                        <img src={img01} alt="" />
                    </Grid>
                </Grid>
            ,
        },
        {
            name: "Videos",
            key: "videos",
            component: null,
        },
        {
            name: "Audio",
            key: "audio",
            component: null,
        },
        {
            name: "Documents",
            key: "documents",
            component: null,
        },
        {
            name: "Web Pages",
            key: "webpages",
            component: null,
        },

    ];

    return (
        <div>
            <MainButton clickHandler={createHandler} wdt="170px" icon={<IconCirclePlus />} btnText="Add Playlist" variant="" />

            <FullScreenModal
                clickHandler={createHandler}
                open={open}
                setOpen={setOpen}
                titleText="Create Playlist"
            >
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: '30px 0' }}>
                    <Grid item xs={12} md={5} lg={5} xl={5} className="">
                        <InputComponent label="Playlist Name" placeholder="Admin" required className='marginBtm' />
                        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} md={6} lg={6} xl={6} className="">
                                <SelectComponent items={countries} onChange={changeHandler} label="Total Size" />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} xl={6} className="">
                                <SelectComponent items={countries} onChange={changeHandler} label="Total time" />
                            </Grid>
                        </Grid>
                        <Row>
                            <CustomTab tabArray={tabArray} defaultActiveKey="images" />
                        </Row>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7} xl={7} className="">
                        <Box className="fullWidthGrayBox">
                            <p>Drag and Drop asset from the right or playlist from the left to here!</p>
                        </Box>
                    </Grid>
                </Grid>
                <div className='modalFooter'>
                    <div className='pagination'>
                        <span className="cmn_prev_next prev_btn">
                            {prev_v1} <b>Prev</b>
                        </span>
                        <b className='curPage'>1</b>
                        <span className="cmn_prev_next next_btn">
                            <b>Next</b> {next_v1}
                        </span>
                    </div>
                    <div className='btnGrp'>
                        <MainButton clickHandler={() => nextPrevHandler('cancel')} wdt="100px" icon="" btnText="Cancel" variant="outlinedDark" disabled />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <MainButton clickHandler={() => nextPrevHandler('next')} wdt="100px" icon="" btnText="Next" variant="" />
                    </div>
                </div>
            </FullScreenModal>
        </div>
    );
};

export default CreatePlaylistModal;