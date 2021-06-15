import React from "react";
import { FruitCounterContext} from "../App";
import { useContext } from "react";

export default function Home() {

  // zet de state uit context in de useContext
  const { apples, bananas, pears } = useContext(FruitCounterContext);
  return <div>{ apples + bananas + pears } stuks fruit besteld </div>;
}
