
import styled from 'styled-components'
export default function FormInput({labelTag, onChange, nameTag, value, ...inputProps}) {
  return (
    <div>
    <label>
      {labelTag}
      <input 
     value={value}
      
    name={nameTag}
      onChange={onChange}
    {...inputProps}
      />
    </label>
    </div>
  )
}



