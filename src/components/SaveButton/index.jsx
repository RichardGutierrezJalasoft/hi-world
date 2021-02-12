import React from 'react'

const SaveButton = ({ color, title, acction }) => {
  return (
    <button
      type="button"
      className={`btn btn-${color} btn-lg`}
      onClick={() => acction()}
    >
      {title}
    </button>
  )
}

export default SaveButton
