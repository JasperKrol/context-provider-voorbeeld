
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Counters from "./pages/Counters";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

// 1 import createContext from react
import { useState, createContext } from "react";
// 2 export de context, zodat je hem elders kan importeren
export const FruitCounterContext = createContext(null)

function App() {
  const [apples, setApples] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [pears, setPears] = useState(0);

  // 3 zet de context met de provider context om de app
  return (
      <FruitCounterContext.Provider
      // 4 zet de keys en values door in de value
          value={{
            apples: apples,
            setApples: setApples,
            bananas: bananas,
            setBananas: setBananas,
            pears: pears,
            setPears: setPears,
          }}
      >
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counters">Bestellen</Link>
            </li>
            <li>
              <Link to="/checkout">Betalen</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/counters">
            <Counters
                // deze mogen weg, state is opgeslagen in de context
              // apples={apples}
              // setApples={setApples}
              // bananas={bananas}
              // setBananas={setBananas}
              // pears={pears}
              // setPears={setPears}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
                //  deze mogen weg, state is opgeslagen in de context
                pears={pears} apples={apples} bananas={bananas}
            />
          </Route>
          <Route path="/">
            <Home totalFruit={pears + apples + bananas} />
          </Route>
        </Switch>
      </header>
    </div>
      </FruitCounterContext.Provider>
  );
}

export default App;
