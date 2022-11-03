import React from "react";
import empty from "../../assets/illustration-empty.svg";
import {Figure} from "../Styles/emptyState.js";
function EmptyState() {
  return (
    <Figure>
      <img src={empty} alt="" />
      <figcaption>
        <h2>There is nothing here</h2>
        <p>
          Create an invoice by clicking the New Invoice button and get started
        </p>
      </figcaption>

    </Figure>
  );
}

export default EmptyState;

