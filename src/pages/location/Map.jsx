/* eslint-disable no-unused-vars */
import React from "react";
import GoogleMapReact from "google-map-react";
import pin from "./download.png";
import { Link } from "react-router-dom";

const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
};


const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    const defData = [
        {
            id: 123,
            title: "Think Company",
            website: "www.google.com",
            image: "http://thinkcompany.fi/wp-content/uploads/2014/05/hkithinkco04-1024x702.jpg",
            address: [
                {
                    id: 1234,
                    country: "Finland",
                    city: "Helsinki",
                    street: "Yliopistonkatu 4",
                    postcode: "00101",
                    lat: "60.169787",
                    lng: "24.948776",
                },
                {
                    id: 1235,
                    country: "Finland",
                    city: "Helsinki",
                    street: "Ladugordsbogen 3",
                    postcode: "00790",
                    lat: "60.228029",
                    lng: "25.015569"
                },
                {
                    id: 1236,
                    country: "Finland",
                    city: "Helsinki",
                    street: "Ladugordsbogen 3",
                    postcode: "00790",
                    lat: "60.228029",
                    lng: "25.015569"
                }
            ]

        },
    ]
    return (
        <div style={{ height: '670px', width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {/* <Link to={"/" + `title`} lat={60.169787} lng={24.948776}>
                    <img style={markerStyle} src={pin} alt="pin" />
                </Link> */}

            </GoogleMapReact>
        </div>
    );
};

export default Map;
