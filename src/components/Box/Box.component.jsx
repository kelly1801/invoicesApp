import { useContext} from 'react'
import { CrudContext } from '../../context/Crud.context'
import InvoiceSummary from './InvoiceSummary.jsx'
import EmptyState from "../EmptyState.jsx";
import MenuDropdown from "../MenuDropdown.jsx";
import styled from 'styled-components'

import {ButtonContainer}from "../Button.jsx";

function Box() {
const { invoicesCollection} = useContext(CrudContext)


    return (
   <Section>
<HeaderSection>
<div>
<h1>Invoices</h1>
<span>There are in total {invoicesCollection.length} invoices</span>
</div>

<Group>

    <MenuDropdown/>


<ButtonContainer plus>
    new invoice
</ButtonContainer>
</Group>
</HeaderSection>


   {invoicesCollection.length?
       invoicesCollection.map(invo => <InvoiceSummary key={invo.id} invoiceData={invo}/>)
       :

       <EmptyState/>

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
const Group = styled.div``
const HeaderSection = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 3rem 0;

  ${Group} {
   
    display: flex;
  justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    position: relative;
  
    width: 50%;
  }
`
