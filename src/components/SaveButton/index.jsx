import React from 'react'
import { RiSendPlane2Line } from "react-icons/ri";
import './style.css';

const SaveButton = ({ color, title, acction }) => {
  return (
    <button
      type="button"
      className={`btn btn-${color} btn-lg`}
      onClick={(e) => acction(e)}
    >
      {title} <RiSendPlane2Line className="send"/>
    </button>
  )
}

export default SaveButton
