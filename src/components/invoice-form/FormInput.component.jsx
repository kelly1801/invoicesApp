import { Label, Input } from "../Styles/invoiceStyles.js";
import { useContext} from "react";
import { CrudContext } from "../../context/Crud.context.jsx";
export default function FormInput({
  labelTag,
  onChange,
  nameTag,
  value,
  customMessage,
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
