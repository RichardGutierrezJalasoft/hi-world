import React from 'react'
import { RiSendPlane2Line } from "react-icons/ri";
import PropTypes from 'prop-types';
import './style.css';
/**
 * Bootrap UI element Button to Save
 * @param  {string} title title button to save
 * @param  {function} acction function called when change  save object
 * @param  {string} color to change color button
*/
const SaveButton = ({ color, title, acction }) => {
  return (
    <button
      type="button"
      className={`btn btn-${color} btn-lg`}
      onClick={(e) => acction(e)}
    >
      {title} <RiSendPlane2Line className="send" />
    </button>
  )
}
SaveButton.prototype = {
  title: PropTypes.string,
  changeLanguage: PropTypes.func,
  color: PropTypes.string,
};

SaveButton.propDefaults = {
  title: '',
  changeLanguage: () => { },
  color: '',
};

export default SaveButton;
