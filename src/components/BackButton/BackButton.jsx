import React from 'react'
import './BackButton.css'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const backArrow =
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g id="call-made">
      <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="white"/>
    </g>
  </svg>

const navigate = useNavigate();

const goBack = () => {
  navigate(-1);
};

  return (
    <button id='buttonBack' onClick={goBack}>
      {backArrow} Back
    </button>
  );
}

export default BackButton;
