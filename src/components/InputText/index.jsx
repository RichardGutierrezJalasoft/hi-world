import React from 'react'

const InputText = ({ title, description }) => {
  return (
      <div className="form-group">
        <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">{title}</label>
        <input className="form-control form-control-lg" type="text" placeholder={description} id="inputLarge" />
    </div>
  )
}

export default InputText
