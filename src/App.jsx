import React, { useState, useContext } from "react";
import "./App.scss";
import ExpenseTracker from "./components/ExpenseTracker";
import Balance from "./components/Balance";
import Layout from "./components/Layout";
import { AppCtx } from "./context/GlobalState";

function App() {
  const { transactions } = useContext(AppCtx);

  return (
    <Layout>
      <div className="hero is-primary is-fullheight">
        <div className="section">
          <section className="columns">
            <div className="column">
              <ExpenseTracker />
            </div>
            <div className="column">
              <Balance transactions={transactions} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default App;
