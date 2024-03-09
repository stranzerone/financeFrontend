import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionSummary = () => {
  const [summary, setSummary] = useState([]);
  const [timePeriod, setTimePeriod] = useState('all'); // Default to 'all'
  const apiUrl = "https://finance-backend-ri8l.onrender.com";

  const fetchSummary = async (timePeriod) => {
    try {
      const response = await axios.get(apiUrl+`/transactions/summary?timePeriod=${timePeriod}`);
      setSummary(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchSummary(timePeriod);
  }, [timePeriod]);

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div className="container">
      <h2>Transaction Summary</h2>
      <div>
        <label htmlFor="timePeriodSelect">Select Time Period:</label>
        <select id="timePeriodSelect" value={timePeriod} onChange={handleTimePeriodChange}>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth">This Month</option>
        </select>
      </div>
      <div className="container mt-4">
  <h3 className="text-center mb-4">Financial Summary</h3>
  <div className="row justify-content-around">
    <div className="col-md-4 mb-3">
      <div className="card bg-success text-white">
        <div className="card-body">
          <h5 className="card-title">Total Income</h5>
          <p className="card-text">{summary.totalIncome}</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card bg-info text-white">
        <div className="card-body">
          <h5 className="card-title">Total Savings</h5>
          <p className="card-text">{summary.totalSavings}</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card bg-danger text-white">
        <div className="card-body">
          <h5 className="card-title">Total Expenses</h5>
          <p className="card-text">{summary.totalExpenses}</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default TransactionSummary;
