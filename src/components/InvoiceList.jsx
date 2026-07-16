import React, { useState } from 'react';
import InvoiceRow from './InvoiceRow';

export default function InvoiceList(props) {
  const [currentFilter, setCurrentFilter] = useState('all');

  // Simple filtering using standard arrays
  const filteredArray = [];
  for (let i = 0; i < props.records.length; i++) {
    const item = props.records[i];
    if (currentFilter === 'all') {
      filteredArray.push(item);
    } else if (currentFilter === 'unpaid' && item.paymentStatus === 'unpaid') {
      filteredArray.push(item);
    } else if (currentFilter === 'paid' && item.paymentStatus === 'paid') {
      filteredArray.push(item);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      
      {/* Top Bar */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <h2 className="text-lg font-bold">All Bills</h2>
        <div>
          <span className="text-sm font-semibold mr-2">Show:</span>
          <select
            value={currentFilter}
            onChange={function(e) { setCurrentFilter(e.target.value); }}
            className="border border-gray-300 p-1 rounded"
          >
            <option value="all">Everything</option>
            <option value="unpaid">Unpaid Only</option>
            <option value="paid">Paid Only</option>
          </select>
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="p-2 text-gray-500">Client</th>
              <th className="p-2 text-gray-500">Amount</th>
              <th className="p-2 text-gray-500">Deadline</th>
              <th className="p-2 text-gray-500">State</th>
              <th className="p-2 text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-10 text-center text-gray-400">
                  No bills match this filter.
                </td>
              </tr>
            ) : (
              filteredArray.map(function(item) {
                return <InvoiceRow key={item.id} record={item} onMarkPaid={props.onMarkPaid} />;
              })
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
