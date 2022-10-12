import {useState} from 'react'
import FormInput from './FormInput.component'


const defaultForm = {
  street: '',
  city: '',
  postCode:'',
  country: '',
  
}

function InvoiceForm() {
  const [formFields, setFormFields] = useState(defaultForm)
const {street, city, postCode, country } = formFields

function handleChange(event){
   
  const {name,value} = event.target
    setFormFields(
        {
            ...formFields,
            [name] : value
        }
    )    
    
     
     console.log(formFields)
    
    
}
  
  return (
    <form>
      <FormInput labelTag="street" type="text" name="street" value={street} onChange={handleChange}/>
    </form>
  )
}

export default InvoiceForm