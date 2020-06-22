import React, { useContext } from "react";
import { AppCtx } from "../context/GlobalState";

const TransactionList = ({ transactions }) => {
  const { deleteTransaction } = useContext(AppCtx);
  return (
    <div>
      {transactions.map((transaction) => (
        <div className={`box `} key={transaction.id}>
          <div className="columns">
            <div className="column is-one-third-mobile is-one-third-tablet">
              {transaction.name}
            </div>
            <div className="column is-one-third-mobile is-one-third-tablet">
              {Math.abs(transaction.amount)}$
            </div>
            <div className="column is-one-third-mobile is-one-third-tablet">
              <button
                className="button is-danger"
                onClick={() => deleteTransaction(transaction.id)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
