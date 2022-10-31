import { useContext} from 'react'
import { CrudContext } from '../../context/Crud.context'
import DropInvoice from './DropInvoice'
import styled from 'styled-components'
import Button from "../Button.jsx";
function Box() {
const { invoicesCollection } = useContext(CrudContext)
    
    return (
   <Section>
<HeaderSection>
<div>
<h1>Invoices</h1>
<span>There are 7 total invoices</span>
</div>

<div>
<select name="" id="">
    <option selected disabled>Filter by status</option>
<option value="DRAFT">Draft</option>
<option value="PENDING">Pending</option>
<option value="PAID">Paid</option>

</select>

<Button>
    new invoice
</Button>
</div>
</HeaderSection>
   
   {
invoicesCollection.map(invo => <DropInvoice key={invo.id} invoiceData={invo}/>)

   }
   </Section>
  )
}

export default Box
const Section = styled.section`
width: 100%;
height: 100vh;
padding: 0 5rem;
  overflow-y: scroll ;
span {
    color: var(--grayPurple);
    font-size: 0.7rem;
    line-height: 0.9rem;
    letter-spacing: 0.25px;
}


`
const HeaderSection = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 3rem 0;
`