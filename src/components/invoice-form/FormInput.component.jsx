import styled from "styled-components";
export default function FormInput({
  labelTag,
  onChange,
  nameTag,
  value,
  ...inputProps
}) {
  return (
   
      <Label>
        {labelTag}
        <Input
          value={value}
          name={nameTag}
          onChange={onChange}
          {...inputProps}
        />
      </Label>
   
  );
}

const Input = styled.input`

  outline: none;
  border: 1px solid var(--lightPurple);
  padding: 0.5rem;

`
const Label = styled.label`

  display: flex;
  flex-direction: column;
  text-align: left;
  color: var(--blue);
  padding: 0.5rem;

`