import React from 'react';
import './style.css';

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

export default InputText
