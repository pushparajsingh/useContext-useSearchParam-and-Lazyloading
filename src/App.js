import "./App.css";
import { createContext } from "react";
import { Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";

export const Global = createContext();

export function App() {
  const Data = lazy(() => import("./check.js"));
  const [state, setState] = useSearchParams();
  const value = state.get("age");
  return (
    <div className="App">
      <Suspense fallback={<>...Loading</>}>
        <Global.Provider value={{ name: "ram", lastName: "singh" }}>
          <h1>Hello World</h1>
          <h1>{value}</h1>
          <Data />
          <button onClick={() => setState({ age: "80" })}>age 80</button>
          <button onClick={() => setState({ age: "90" })}>age 90</button>
        </Global.Provider>
      </Suspense>
    </div>
  );
}
