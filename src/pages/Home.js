import React from "react";
import { FruitCounterContext} from "../App";
import { useContext } from "react";

export default function Home(props) {

  // zet de state uit context in de useContext
  const { totalFruit } = props;
  return <div>{totalFruit} stuks fruit besteld </div>;
}
