import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './components/SignUp';
import TransactionList from './components/TransactionList';
import TransactionSummary from './components/TransactionSummery';
import Login from './components/Login';
import AddTransaction from './components/AddTransaction';


const App = () => {

  const navigate = useNavigate()
  return (
    <div>
    <div className='d-flex '>
    <button className='btn btn-primary mx-5' onClick={()=>navigate('/transactionList')} >LIST</button>
    <button className='btn btn-success mx-5' onClick={()=>navigate('/summary')} >summary</button>
    <button className='btn btn-warning mx-5' onClick={()=>navigate('/add-transaction')} >Add</button>
    </div>
    
   
 
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/transactionList" element={<TransactionList />} />
        <Route path="/summary" element={<TransactionSummary />} />
    </Routes>
    </div>
  );

};

export default App;
