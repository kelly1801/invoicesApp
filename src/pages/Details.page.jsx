import React, { useContext } from "react";
import InvoiceDetails from "../components/Box/InvoiceDetails.jsx";
import InvoiceForm from "../components/invoice-form/InvoiceForm.component.jsx";
import { Page } from "./Home.page.jsx";
import styled from "styled-components";
import SideBar from "../components/slider/SideBar.component.jsx";
import { CrudContext } from "../context/Crud.context";
function DetailsPage() {
  const { show } = useContext(CrudContext);
  return (
    <PageContainer>
      <SideBar />
      {show && <InvoiceForm />}

      <MainContent show={show}>
          {!show && <InvoiceDetails/>}
      </MainContent>
    </PageContainer>
  );
}

export default DetailsPage;

const PageContainer = styled(Page)`
  background-color: #f2f2f2;
`;
const MainContent = styled.main`
  opacity: ${(props) => (props.show ? `0.5` : "1")};
  background-color: ${(props) => (props.show ? `#000` : "#F2F2F2")};
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 0 15rem;
`;
