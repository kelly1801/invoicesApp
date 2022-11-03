import { Label, Input } from "../Styles/invoiceStyles.js";
import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context.jsx";
export default function FormInput({
  labelTag,
  onChange,
  nameTag,
  value,
  ...inputProps
}) {
  const { requiredInput } = useContext(CrudContext);


  return (
    <Label>
      {labelTag}
      <Input
        value={value}
        name={nameTag}
        onChange={onChange}
        required={requiredInput}
        {...inputProps}

      />
    </Label>
  );
}
