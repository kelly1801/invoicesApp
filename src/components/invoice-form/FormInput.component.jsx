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
  border: 1px solid ${(props) => props.theme.borderColor};;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.fontColor};

`
const Label = styled.label`

  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${(props) => props.theme.subsColor};;
  padding: 0.5rem;

`