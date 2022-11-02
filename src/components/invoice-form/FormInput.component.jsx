import { Label, Input } from "../Styles/invoiceStyles.js";
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
