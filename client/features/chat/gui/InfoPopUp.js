import React from 'react';
import Popup from 'reactjs-popup';

const InfoPopUp = () => (
  <Popup trigger={<button> INFO </button>} position="right center">
    <div id="infoPopUpContainer">
    <h1>GAME INFO</h1>
    <div>Popup content here !!</div>
    </div>
  </Popup>
);

export default InfoPopUp
