import React, { useState } from 'react';
import { createUniqueId } from '../utils/helpers';

export default function InvoiceForm(props) {
  // User input states
  const [clientInput, setClientInput] = useState('');
  const [moneyInput, setMoneyInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  
  // Error message states
  const [errClient, setErrClient] = useState('');
  const [errMoney, setErrMoney] = useState('');
  const [errDate, setErrDate] = useState('');

  function saveInvoice(event) {
    event.preventDefault(); // Stop page reload
    
    // Clear old errors
    setErrClient('');
    setErrMoney('');
    setErrDate('');

    let foundProblem = false;

    // Validate client
    if (clientInput === '') {
      setErrClient('Please type a client name.');
      foundProblem = true;
    }
    
    // Validate money
    if (moneyInput === '' || Number(moneyInput) <= 0) {
      setErrMoney('Please enter a valid amount greater than 0.');
      foundProblem = true;
    }
    
    // Validate date
    if (dateInput === '') {
      setErrDate('Please pick a deadline.');
      foundProblem = true;
    }

    // Stop if there is any problem
    if (foundProblem) {
      return;
    }

    // Pass data up
    props.onAddInvoice({
      id: createUniqueId(),
      clientName: clientInput,
      money: Number(moneyInput),
      deadlineDate: dateInput,
      paymentStatus: 'unpaid'
    });
    
    // Clear boxes
    setClientInput('');
    setMoneyInput('');
    setDateInput('');
  }

  return (
    <div className="bg-white p-5 rounded-lg mb-6 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Create New Bill</h2>
      
      <form onSubmit={saveInvoice} className="flex flex-col md:flex-row gap-4">
        
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">Client Name</label>
          <input
            type="text"
            value={clientInput}
            onChange={(e) => setClientInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
          />
          {errClient !== '' && <span className="text-red-500 text-sm">{errClient}</span>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">Amount</label>
          <input
            type="number"
            step="0.01"
            value={moneyInput}
            onChange={(e) => setMoneyInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
          />
          {errMoney !== '' && <span className="text-red-500 text-sm">{errMoney}</span>}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold mb-1">Deadline</label>
          <input
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
          />
          {errDate !== '' && <span className="text-red-500 text-sm">{errDate}</span>}
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-2 rounded font-bold hover:bg-blue-800"
          >
            Add Bill
          </button>
        </div>

      </form>
    </div>
  );
}
