import React, { useContext } from "react";
import InvoiceDetails from "../components/Box/InvoiceDetails.jsx";
import InvoiceForm from "../components/invoice-form/InvoiceForm.component.jsx";

import styled from "styled-components";
import SideBar from "../components/slider/SideBar.component.jsx";
import { CrudContext } from "../context/Crud.context";
function DetailsPage() {
  const { show, toggleAlert } = useContext(CrudContext);
  return (
    <PageContainer>
        {toggleAlert || show ? <Overlay/> : null}
      <SideBar />
      {show && <InvoiceForm />}

      <MainContent >
          <InvoiceDetails/>
      </MainContent>
    </PageContainer>
  );
}

export default DetailsPage;

const PageContainer = styled.main`
  background-color: #f2f2f2;
  display: flex;
  
`;
export const Overlay = styled.div`
  
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0c0e16;
    z-index: 4;
    opacity: 0.5;
  
`

const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  padding: 0 5rem;

  align-items: center;
  justify-content: center;
`;
