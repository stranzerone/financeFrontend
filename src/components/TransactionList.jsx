import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [datePeriod, setDatePeriod] = useState('all'); // Default to 'all'
  const apiUrl = "https://finance-backend-ri8l.onrender.com";
  const handleDeleteTransaction = async (id) => {
    try {
      await axios.delete(apiUrl+`/transactions/${id}`);
      setTransactions(transactions.filter(transaction => transaction.transactionId !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDatePeriodChange = (event) => {
    setDatePeriod(event.target.value);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        console.log(apiUrl)
        let url = apiUrl+'/transactions';
        if (datePeriod !== 'all') {
          url += `?datePeriod=${datePeriod}`;
        }
        const response = await axios.get(url);
        setTransactions(response.data);
       
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTransactions();
  }, [datePeriod]);

  return (
    <div className="container">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Transaction List</h2>
        <div className="mb-3">
          <label htmlFor="datePeriodSelect" className="form-label">Select Date Period:</label>
          <select className="form-select" id="datePeriodSelect" value={datePeriod} onChange={handleDatePeriodChange}>
            <option value="all">All</option>
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="thisMonth">This Month</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <ul className="list-group">
          {transactions.map(transaction => (
            <li key={transaction.transactionId} className="list-group-item">
              <div>Transaction id : {transaction.transactionId}</div>
              <div>Amount: {transaction.amount}</div>
              <div>Category: {transaction.category}</div>
              <div>Date: {transaction.date}</div>
              <div>Type: {transaction.type}</div>
              <button
                className="btn btn-danger mt-2"
                onClick={() => handleDeleteTransaction(transaction.transactionId)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
