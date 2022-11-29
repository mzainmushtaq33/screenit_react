import { Col, Row } from "antd";
import React, { useState } from "react";
import InputComponent from "../../component/ui-components/formComponents/input";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import MainModal from "../../component/ui-components/main-modals/main-modal";
import VideoGuideImage from "../../services/images/videoGuide.JPG";
export default function Help(props) {
    return (
        <div>
            <Row gutter={[24, 24]}>
                <Col md={6}>
                    <Row gutter={[24, 24]}>
                        <Col md={24}>
                            <TicketCard />
                        </Col>
                        <Col md={24}>
                            <OptionCard text={"Book a Demo"} className="w-100" />
                        </Col>
                        <Col md={24}>
                            <OptionCard text={"Chat With Us"} className="w-100" />
                        </Col>
                        <Col md={24}>
                            <OptionCard text={"Share Feedback"} className="w-100" />
                        </Col>
                    </Row>
                </Col>
                <Col md={18}>
                    <Row gutter={[24, 24]}>
                        <Col md={8} style={{ paddingLeft: 0 }}>
                            <ViewCard
                                name="SetUp Guide"
                                description="Digital sigange setup instructions and usage guide."
                            />
                        </Col>
                        <Col md={8}>
                            <ViewCard
                                name="SetUp Guide"
                                description="Digital sigange setup instructions and usage guide."
                            />
                        </Col>
                        <Col md={8} style={{ paddingRight: 0 }}>
                            <ViewCard
                                name="SetUp Guide"
                                description="Digital sigange setup instructions and usage guide."
                            />
                        </Col>
                        <Col md={24}>
                            <Row style={cardStyle} gutter={[24, 24]}>
                                <Col md={24} style={nameStyleBold}>
                                    Video Guide
                                </Col>
                                <Col md={8}>
                                    <VideoCard
                                        name="Quick Walkthrough"
                                        imgSrc={VideoGuideImage}
                                    />
                                </Col>
                                <Col md={8}>
                                    <VideoCard
                                        name="Quick Walkthrough"
                                        imgSrc={VideoGuideImage}
                                    />
                                </Col>
                                <Col md={8}>
                                    <VideoCard
                                        name="Quick Walkthrough"
                                        imgSrc={VideoGuideImage}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

function ViewCard({ name = "", description = "", onClick = () => { } }) {
    let descriptionStyle = {
        font: "normal normal normal 18px/22px helveticaNeue",
        color: "#333333",
    };
    return (
        <div style={cardStyle}>
            <Row gutter={[0, 24]}>
                <Col md={24} style={nameStyleBold}>
                    {name}
                </Col>
                <Col md={24} style={descriptionStyle}>
                    {description}
                </Col>
                <Col md={24}>
                    <MainButton
                        onClick={onClick}
                        btnText="View All"
                        variant={"outlinedBtn"}
                    />
                </Col>
            </Row>
        </div>
    );
}

function VideoCard({ imgSrc = "", name = "", onClick = () => { } }) {
    let imgStyle = {
        boxShadow: "0px 1px 3px #00000029",
        borderRadius: "20px",
    };
    let nameStyle = {
        font: "normal normal bold 19px/24px helveticaNeue",
        color: "#333333",
        marginTop: "20px",
    };
    return (
        <div>
            <img width={"100%"} src={imgSrc} alt="" style={imgStyle} />
            <div style={nameStyle}>{name}</div>
        </div>
    );
}

function TicketCard() {
    let [showModal, setShowModal] = useState(false);

    let ticketStyle = {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 1px 3px #00000029",
        borderRadius: "20px",
        padding: "40px",
        textAlign: "left",
        color: "#333333",
    };
    return (
        <div style={ticketStyle}>
            <div style={{ font: "normal normal bold 20px/49px helveticaNeue" }}>
                Didn’t find what{" "}
            </div>
            <div style={{ font: "normal normal bold 40px/49px helveticaNeue" }}>
                you’re looking for?
            </div>

            <MainButton
                btnText={"Submit Ticket"}
                clickHandler={() => setShowModal(true)}
            />

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
        </div>
    );
}
function OptionCard({ text }) {
    let optionStyle = {
        background: "#F4364C 0% 0% no-repeat padding-box",
        boxShadow: "0px 1px 3px #00000029",
        borderRadius: "20px",
        padding: "30px",
        textAlign: "center",
        font: "normal normal bold 24px/29px helveticaNeue",
        color: "#FFF",
    };
    return <div style={optionStyle}>{text}</div>;
}

let cardStyle = {
    background: "#FFFFFF 0% 0% no-repeat",
    boxShadow: "0px 1px 3px #00000029",
    borderRadius: "20px",
    padding: "40px",
};
let nameStyleBold = {
    font: "normal normal bold 24px/29px helveticaNeue",
    color: "#333333",
};
