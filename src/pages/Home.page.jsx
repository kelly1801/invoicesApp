import {useContext} from 'react'
import InvoiceForm from '../components/invoice-form/InvoiceForm.component'
import SideBar from '../components/slider/SideBar.component'
import Box from '../components/Box/Box.component'
import {CrudContext} from "../context/Crud.context.jsx";
import {PageContainer,Overlay} from "../components/Styles/GlobalStyledComponents";
function Home() {
  
 const {show} = useContext(CrudContext)  
  
    return (
    <PageContainer>
        {show && <Overlay/>}
        <SideBar/>

        {show && <InvoiceForm/>}
        <Box/>
        
    </PageContainer>
  )
}

export default Home

