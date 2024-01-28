import { useState } from "react";
import "./App.css";
import Header from "../component/header";
import Result from "../component/result";
import Limitation from "../component/limitation";
import Benefits from "../component/benefits";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Result />
      <Benefits />
      <Limitation />
    </>
  );
}

export default App;
