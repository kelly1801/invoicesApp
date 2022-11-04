import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context";
import InvoiceSummary from "./InvoiceSummary.jsx";
import EmptyState from "../Shared/EmptyState.jsx";
import MenuDropdown from "../Shared/MenuDropdown.jsx";
import { Section, HeaderSection, Group, ShortCount, Count } from "../Styles/boxStyles.js";
import { Button, BtnText, BtnShortText } from "../Styles/GlobalStyledComponents.js";
import add from "../../assets/icon-plus.svg";

function Box() {
  const { invoicesCollection, setShow } = useContext(CrudContext);

  return (
    <Section>
      <HeaderSection>
        <div>
          <h1>Invoices</h1>
          <Count>There are in total {invoicesCollection.length} invoices</Count>
          <ShortCount > {invoicesCollection.length} invoices</ShortCount>
        </div>

        <Group>
          <MenuDropdown />

          <Button onClick={() => setShow(true)}>
            <div>
              <img src={add} alt="" />
            </div>
            <BtnText>New invoice</BtnText>
            <BtnShortText>New</BtnShortText>

          </Button>
        </Group>
      </HeaderSection>

      {invoicesCollection.length ? (
        invoicesCollection.map((invo) => (
          <InvoiceSummary key={invo.id} invoiceData={invo} />
        ))
      ) : (
        <EmptyState />
      )}
    </Section>
  );
}

export default Box;
