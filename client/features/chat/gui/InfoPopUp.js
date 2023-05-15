import React from 'react';
import Popup from 'reactjs-popup';

const InfoPopUp = () => (
  <Popup trigger={<div id="guiButtons"> INFO </div>} contentStyle={{
    backgroundColor: "black",
    borderRadius: "5px",
    padding: "20px",
    border: "solid #dadada 10px"
   }}
   position="top right">
    <div className="popUpContainer">
    <h1>GAME INFO</h1>
    <div>Popup content here !!</div>
    </div>
  </Popup>
);

export default InfoPopUp
