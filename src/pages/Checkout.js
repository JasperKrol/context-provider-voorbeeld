import React from "react";
import { FruitCounterContext} from "../App";
import { useContext } from "react";

export default function Checkout() {
//props niet meer nodig
    // zet de state uit FRCOUNTER context in de useContext
    // const { apples, bananas, pears } = props;
    const { apples, bananas, pears } = useContext(FruitCounterContext)
  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
      </div>
      <button>Checkout!</button>
    </div>
  );
}
