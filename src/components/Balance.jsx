import React from "react";
import { Transaction } from "../context/GlobalState";

const Balance = ({ transactions }) => {
  return (
    <>
      <div className="box">
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
