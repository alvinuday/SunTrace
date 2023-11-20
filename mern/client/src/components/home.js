import React, { useState } from "react";
import QrReader from "./QrScanner";
// import { useNavigate } from "react-router";

export default function home() {
    return (
        <div className="homeWrapper">
            {/* <h3>Scan QR Code present on your Solar Panel</h3> */}
            <QrReader></QrReader>
        </div>
        
    );
}