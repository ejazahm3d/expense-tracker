import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const [bool, setBool] = useState(true);

  setBool(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ExpenseTracker />
      </header>
    </div>
  );
}

export default App;
