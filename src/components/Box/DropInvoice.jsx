import React from 'react'

function DropInvoice({invoiceData}) {
  const {clientName} = invoiceData
  return (
    <details>
    <summary>
      
     
      <span>{clientName}</span>
    
      </summary>
    <p class="faq__section--par">Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </details>
  )
}

export default DropInvoice