import { Button, Grid } from '@mui/material';
import './help.scss';
import React from 'react';
import MainButton from '../../component/ui-components/main-buttons/main-button';
import MainModal from '../../component/ui-components/main-modals/main-modal';
import { Col, Row } from 'antd';
import InputComponent from '../../component/ui-components/formComponents/input';
import { help_v1 } from '../../services/svg/svg-icon';
import VideoGuideImage from "../../services/images/videoGuide.JPG";

const Help = () => {
  let [showModal, setShowModal] = React.useState(false);


  function ViewCard({ name = "", description = "", onClick = () => { } }) {
    return (
      <div className='viewCard'>
        <h1>{name}</h1>
        <div>
          {description}
        </div>
        <br />
        <br />
        <MainButton
          onClick={onClick}
          btnText="View All"
          variant={"outlinedBtn"}
          wdt="170px"
        />
      </div>
    );
  };
  function VideoCard({ imgSrc = "", name = "", onClick = () => { } }) {
    return (
      <div>
        <img width={"100%"} src={imgSrc} alt="" style={{ borderRadius: '20px' }} />
        <br />
        <br />
        <h2>{name}</h2>
      </div>
    );
  };


  return (
    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: '0' }} id="helpMain">
      <Grid item xs={12} md={4} lg={4} xl={3} className="helpCrdWrp">
        <Grid item xs={12} md={12} lg={12} xl={12} className="helpCrdWrp">
          <div className='cmnBox submitTicket'>
            <div style={{ font: "normal normal bold 20px/49px helveticaNeueMedium" }}>
              Didn’t find what{" "}
            </div>
            <div style={{ font: "normal normal bold 40px/49px helveticaNeueMedium" }}>
              you’re looking for?
            </div>
            {help_v1}
            <MainButton
              btnText={"Submit Ticket"}
              variant="outlinedBtn"
              clickHandler={() => setShowModal(true)}
              wdt="170px"
            />
          </div>
          <div className='btnGrp'>
            <Button>Book A Demo</Button>
            <Button>Book A Demo</Button>
            <Button>Book A Demo</Button>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} lg={8} xl={9} className="helpCrdWrp">
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} lg={6} xl={4} className="helpCrdWrp">
            <div className='cmnBox'>
              <ViewCard
                name="SetUp Guide"
                description="Digital sigange setup instructions and usage guide."
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className="helpCrdWrp">
            <div className='cmnBox'>
              <ViewCard
                name="SetUp Guide"
                description="Digital sigange setup instructions and usage guide."
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className="helpCrdWrp">
            <div className='cmnBox'>
              <ViewCard
                name="SetUp Guide"
                description="Digital sigange setup instructions and usage guide."
              />
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={12} className="helpCrdWrp">
            <div className='cmnBox'>
              <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} lg={6} xl={4} className="helpCrdWrp">
                  <div className='cmnBox subCard'>
                    <VideoCard
                      name="Quick Walkthrough"
                      imgSrc={VideoGuideImage}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={4} className="helpCrdWrp">
                  <div className='cmnBox subCard'>
                    <VideoCard
                      name="Quick Walkthrough"
                      imgSrc={VideoGuideImage}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={4} className="helpCrdWrp">
                  <div className='cmnBox subCard'>
                    <VideoCard
                      name="Quick Walkthrough"
                      imgSrc={VideoGuideImage}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <MainModal
        open={showModal}
        onCloseHandler={() => setShowModal(false)}
        titleText={"Submit a Ticket"}
      >
        <Row gutter={[24, 24]}>
          <Col md={12}>
            <Row gutter={[24, 24]}>
              <Col md={24}>
                <InputComponent label={"Name"} placeholder="admin" />
              </Col>
              <Col md={24}>
                <InputComponent
                  label={"Email"}
                  placeholder="admin@screeniton.com"
                />
              </Col>
              <Col md={24}>
                <InputComponent label={"Subject"} placeholder="Ticket" />
              </Col>
            </Row>
          </Col>
          <Col md={12}>
            <InputComponent
              fieldType="textarea"
              label={"Subject"}
              placeholder="How can we help you"
              autoSize={{ minRows: 9 }}
            />
          </Col>
        </Row>
      </MainModal>
    </Grid>
  );
};

export default Help;