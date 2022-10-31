import {useContext} from 'react'
import InvoiceForm from '../components/invoice-form/InvoiceForm.component'
import SideBar from '../components/slider/SideBar.component'
import styled from 'styled-components'
import Box from '../components/Box/Box.component'
import { CrudContext } from '../context/Crud.context'
function Home() {
  
 const {show} = useContext(CrudContext)  
  
    return (
    <Page>

        <SideBar/>
        {show && <InvoiceForm/>}
        <Box/>
        
    </Page>
  )
}

export default Home

export const Page = styled.main`
display: flex;

`