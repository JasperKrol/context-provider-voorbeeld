import React from "react";
import { useContext } from "react";
import { FruitCounterContext } from "../App"

export default function Counters() {
    //importeer FruitCounterContext en stop deze in de useContext
  const { apples, setApples, bananas, setBananas, pears, setPears } = useContext(FruitCounterContext);

  return (
    <div>
      <div>
        <h3>🍎: {apples}</h3>
        <button onClick={() => setApples(apples + 1)}>+</button>
        <button onClick={() => setApples(apples - 1)}>-</button>
      </div>
      <div>
        <h3>🍌: {bananas}</h3>
        <button onClick={() => setBananas(bananas + 1)}>+</button>
        <button onClick={() => setBananas(bananas - 1)}>-</button>
      </div>
      <div>
        <h3>🍐: {pears}</h3>
        <button onClick={() => setPears(pears + 1)}>+</button>
        <button onClick={() => setPears(pears - 1)}>-</button>
      </div>
    </div>
  );
}
