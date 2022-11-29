import { Grid, Popover } from "@mui/material";
import React from "react";
import "./add-template.scss";
import MainCard from "../../component/ui-components/cards/main-card";
import InputComponent from "../../component/ui-components/formComponents/input";
// image import
import img_3 from "./images/Screenshot_3.png";
import { useNavigate } from "react-router-dom";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import { IconCirclePlus, IconEye, IconVideo } from "@tabler/icons";
import { document_v1, edit_extra_v1, explore_v1, img_v1_2, music_v1, player_v1, playlist_v1, plus_extra_v1, rotate_v1, rotate_v2, trash_v2, widgets_v1 } from "../../services/svg/svg-icon";
import SelectComponent from "../../component/ui-components/formComponents/select";

const AddTemplate = () => {
    const navigate = useNavigate();

    const screenHandler = e => {
        navigate(-1)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <MainCard
            sx={{ boxShadow: 0, border: 0, borderRadius: "20px", padding: "20px", minHeight: '85vh' }}
        >
            <div className="topInsertHeader scroller">
                <MainButton aria-describedby={id} clickHandler={handleClick} btnText="Insert" icon={<IconCirclePlus />} variant="outlinedBtn" />
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div className="insertDesign">
                        <p className="">{img_v1_2} Image</p>
                        <p className="">{music_v1} Audio</p>
                        <p className="paddingLeft"><IconVideo /> Video</p>
                        <p className="">{document_v1} Document</p>
                        <p className="paddingLeft smSvg">{widgets_v1} Widget</p>
                        <p className="paddingLeft smSvg">{playlist_v1} Playlist</p>
                    </div>
                </Popover>
                <div className="extraBtnGrp">
                    <MainButton icon={rotate_v1} variant="btnTransparent" />
                    <MainButton icon={rotate_v2} variant="btnTransparent" />
                    <MainButton icon={plus_extra_v1} variant="btnTransparent" />
                    <MainButton icon={edit_extra_v1} variant="btnTransparent" />
                    <MainButton icon={trash_v2} variant="btnTransparent" />
                    <MainButton icon={explore_v1} variant="btnTransparent" />
                    <MainButton icon={player_v1} variant="btnTransparent" />
                </div>
            </div>

            <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                className="screenParentCrdWrp"
            >
                <Grid item xs={12} md={6} lg={4} xl={4} className="screenCrdWrp">
                    <div className='cmnBox'>
                        <div className="previewImg">
                            <img src={img_3} width="100%" alt="" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={4} className="screenCrdWrp">
                    <div className='cmnBox'>
                        <InputComponent
                            label={"Template Name"}
                            required
                            placeholder={"Social Distance"}
                        />
                        <br />
                        <SelectComponent
                            label={"Ratio"}
                            placeholder={"16:9 (4k)"}
                        />
                        <br />
                        <SelectComponent
                            label={"Background Audio"}
                            placeholder={"None"}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={4} xl={4} className="screenCrdWrp" sx={{ height: '100%' }}>
                    <div className='cmnBox contentArea'>
                        <div className="content_wrp">
                            <p>003-avoid crowds.png <IconEye /></p>
                            <p className="active">003-avoid crowds.png <IconEye /></p>
                            <p>003-avoid crowds.png <IconEye /></p>
                            <p>003-avoid crowds.png <IconEye /></p>
                            <p>003-avoid crowds.png <IconEye /></p>
                            <p>003-avoid crowds.png <IconEye /></p>
                        </div>
                    </div>
                </Grid>
                <div className="btnGrp">
                    <MainButton variant="outlinedDark" btnText="Cancel" wdt="150px" clickHandler={screenHandler} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <MainButton variant="" btnText="Save" wdt="150px" />
                </div>
            </Grid>
        </MainCard>
    );
};

export default AddTemplate;
