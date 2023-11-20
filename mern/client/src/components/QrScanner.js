import React, { Component } from "react";
import { useState } from "react";
import QrReader from "react-qr-scanner";
import "../styles/styles.css";
import { useNavigate } from "react-router";
export default function QrScanner() {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const [dataObject, setDataObject] = useState({});
  const navigate = useNavigate();

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      let obj = JSON.parse(scanData.text);
      setDataObject(obj);
      console.log(obj);
      localStorage.setItem("PanelObject", scanData.text);
      navigate(`SolarPanel/${obj.id}`);
      handlePanel(obj);
      // setPrecScan(scanData);
    }
  };
  const handlePanel = async (scanData) => {};
  const handleError = (err) => {
    console.error(err);
  };
  // return (
  //   <div className="App">
  //     <h3>Scan QR Code present on your Solar Panel</h3>
  //     <button
  //       onClick={() => {
  //         setStartScan(!startScan);
  //       }}
  //     >
  //       {startScan ? "Stop Scan" : "Start Scan"}
  //     </button>
  //     {startScan && (
  //       <>
  //         <select onChange={(e) => setSelected(e.target.value)}>
  //           <option value={"environment"}>Back Camera</option>
  //           <option value={"user"}>Front Camera</option>
  //         </select>
  //         <QrReader
  //           facingMode={selected}
  //           delay={1000}
  //           onError={handleError}
  //           onScan={handleScan}
  //           // chooseDeviceId={()=>selected}
  //           style={{ width: "300px" }}
  //         />
  //       </>
  //     )}
  //     {data !== "" && <p>{data.text}</p>}
  //   </div>
  // );
  return (
    <div className="App container mt-4 mb-3">
      <h3>Scan QR Code present on your Solar Panel</h3>
      <button
        className="btn btn-primary m-3"
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select
            className="form-select mt-2"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "300px", marginTop: "10px" }}
          />
        </>
      )}
      {data !== "" && <p>{data.text}</p>}
    </div>
  );
}
