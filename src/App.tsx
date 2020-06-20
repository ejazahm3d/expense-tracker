import React, { useState } from "react";
import "./App.scss";
import ExpenseTracker from "./components/ExpenseTracker";
import Balance from "./components/Balance";
import Layout from "./components/Layout";

export interface Transaction {
  id: string;
  name: string;
  amount: number;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", name: "hello", amount: 123 },
  ]);
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
