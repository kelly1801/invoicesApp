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
  const {req} = useContext(CrudContext)

  return (
    <Label>
      {labelTag}
      <Input value={value} name={nameTag} onChange={onChange}
             onInvalid={(e) => e.target.setCustomValidity(customMessage)}
             onInput={e => e.target.setCustomValidity('')}

             required={req}{...inputProps} />
    </Label>
  );
}
