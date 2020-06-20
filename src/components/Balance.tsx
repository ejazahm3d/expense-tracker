import React from "react";
import { Transaction } from "../App";

interface Props {
  transactions: Transaction[];
}

const Balance: React.FC<Props> = ({ transactions }) => {
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
