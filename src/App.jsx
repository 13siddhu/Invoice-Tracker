import React, { useState, useEffect } from 'react';
import SummaryBar from './components/SummaryBar';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import { starterData } from './utils/helpers';

export default function App() {
  const [records, setRecords] = useState(function() {
    // Try to load from browser storage first
    const savedString = localStorage.getItem('my-billing-data');
    if (savedString) {
      return JSON.parse(savedString);
    }
    // If empty, return starter data
    return starterData;
  });

  // Whenever records change, save to storage
  useEffect(function() {
    localStorage.setItem('my-billing-data', JSON.stringify(records));
  }, [records]);

  // Function to add a new record
  function addNewRecord(newRecord) {
    setRecords([newRecord, ...records]);
  }

  // Function to change status to paid
  function markRecordPaid(recordId) {
    const updatedRecords = records.map(function(item) {
      if (item.id === recordId) {
        return { ...item, paymentStatus: 'paid' };
      }
      return item;
    });
    setRecords(updatedRecords);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-blue-600 pb-2 inline-block">
          Simple Billing Tracker
        </h1>
        
        <SummaryBar records={records} />
        <InvoiceForm onAddInvoice={addNewRecord} />
        <InvoiceList records={records} onMarkPaid={markRecordPaid} />
      </div>
    </div>
  );
}
