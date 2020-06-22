import React, { useContext } from "react";
import { AppCtx } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(AppCtx);

  const totalBalance = () => {
    return transactions.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  };
  return (
    <>
      <div className="box">
        <div>
          <h3 className="title">Your Balance</h3>
          <p>{totalBalance()}</p>
        </div>
        <h3 className="title">History</h3>
        <div>
          {transactions.map((transaction) => (
            <div key={transaction.id}>{transaction.name}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Balance;
