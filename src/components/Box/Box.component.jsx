import { useContext } from "react";
import { CrudContext } from "../../context/Crud.context";
import InvoiceSummary from "./InvoiceSummary.jsx";
import EmptyState from "../Shared/EmptyState.jsx";
import MenuDropdown from "../Shared/MenuDropdown.jsx";
import { Section, HeaderSection, Group } from "../Styles/boxStyles.js";
import { Button } from "../Styles/GlobalStyledComponents.js";
import add from "../../assets/icon-plus.svg";

function Box() {
  const { invoicesCollection, setShow } = useContext(CrudContext);

  return (
    <Section>
      <HeaderSection>
        <div>
          <h1>Invoices</h1>
          <span>There are in total {invoicesCollection.length} invoices</span>
        </div>

        <Group>
          <MenuDropdown />

          <Button onClick={() => setShow(true)}>
            <div>
              <img src={add} alt="" />
            </div>
            new invoice
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
