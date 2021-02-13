import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/**
 * Bootrap UI element for a text input
 * @param  {string} title component identifier title 
 * @param  {string} description the input text
 * @param  {function} handleChange function called when the text field value changes
 * @param  {string} text the text that value input
 * @param  {string} textKey key of the object
 */

const InputText = ({ title, description, handleChange, text, textKey }) => {
  return (
    <div className="form-group">
      <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">{title}</label>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder={description}
        id="inputText"
        onChange={(e) => handleChange(textKey, e.target.value)}
        value={text}
      />
    </div>
  )
}

InputText.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  textKey: PropTypes.string,
  handleChange: PropTypes.func,
  text: PropTypes.bool,
};

InputText.propDefaults = {
  title: '',
  description: '',
  textKey: '',
  text: '',
  handleChange: () => { },
};

export default InputText;
