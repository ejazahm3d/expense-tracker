import React, { useContext } from "react";
import "./App.scss";
import ExpenseTracker from "./components/ExpenseTracker";
import Balance from "./components/Balance";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="has-background-primary">
        <div style={{ height: "100vh" }} className="section container">
          <section className="columns">
            <div className="column">
              <ExpenseTracker />
            </div>
            <div className="column">
              <Balance />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default App;
