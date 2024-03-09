import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTransaction = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense'); // Default type is expense
  const apiUrl = "https://finance-backend-ri8l.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(apiUrl+'/transactions', {
        amount,
        category,
        date,
        type
      });

      console.log('Transaction added successfully');
      console.log(response.data); // Handle response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Add Transaction</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" id="amount" required />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Type</label>
            <select className="form-select" value={type} onChange={(e) => setType(e.target.value)} id="type">
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" id="category" required />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control" id="date" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Transaction</button>
        </form>
      </div>

    </div>
  );
};

export default AddTransaction;
