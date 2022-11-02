import React, { useContext } from "react";
import InvoiceDetails from "../components/Box/InvoiceDetails.jsx";
import InvoiceForm from "../components/invoice-form/InvoiceForm.component.jsx";
import SideBar from "../components/slider/SideBar.component.jsx";
import { CrudContext } from "../context/Crud.context";
import {Overlay, PageContainer, MainContent} from "../components/Styles/GlobalStyledComponents.js";
function DetailsPage() {
  const { show, toggleAlert } = useContext(CrudContext);
  return (
    <PageContainer>
        {toggleAlert || show ? <Overlay/> : null}
      <SideBar />
      {show && <InvoiceForm edit='edit ' />}

      <MainContent >
          <InvoiceDetails/>
      </MainContent>
    </PageContainer>
  );
}

export default DetailsPage;


