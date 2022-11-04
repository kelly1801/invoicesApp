import { Label, Input } from "../Styles/invoiceStyles.js";
import { useContext, useEffect } from "react";
import { CrudContext } from "../../context/Crud.context.jsx";
export default function FormInput({
  labelTag,
  onChange,
  nameTag,
  value,
  customMessage,

  ...inputProps
}) {
  const { req } = useContext(CrudContext);
  console.table(req);
  return (
    <Label>
      {labelTag}
      <Input
        value={value}
        name={nameTag}
        onChange={onChange}
        required={req}
        {...inputProps}
      />
    </Label>
  );
}
