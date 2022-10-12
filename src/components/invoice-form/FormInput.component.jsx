import React from 'react'

function FormInput({labelTag, inputProps}) {
  return (
    <>
    <label>
      {labelTag}
      <input {...inputProps}/>
    </label>
    </>
  )
}

export default FormInput