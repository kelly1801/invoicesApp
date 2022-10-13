import React from 'react'
import InvoiceForm from '../components/invoice-form/InvoiceForm.component'
import SideBar from '../components/slider/SideBar.component'
import styled from 'styled-components'
import Box from '../components/Box/Box.component'
function Home() {
  
   
  
    return (
    <HomePage>

        <SideBar/>
        <Box/>
        
    </HomePage>
  )
}

export default Home

const HomePage = styled.main`
display: flex;
`