import React from 'react';
import { checkIfLate } from '../utils/helpers';

export default function InvoiceRow(props) {
  const currentRecord = props.record;
  const isLate = checkIfLate(currentRecord.deadlineDate, currentRecord.paymentStatus);

  let rowBg = 'bg-white';
  if (isLate) {
    rowBg = 'bg-red-50';
  }

  return (
    <tr className={`border-b border-gray-100 ${rowBg}`}>
      <td className="p-3 text-gray-800">{currentRecord.clientName}</td>
      <td className="p-3 font-semibold">${Number(currentRecord.money).toFixed(2)}</td>
      <td className="p-3">
        <span className={isLate ? 'text-red-600 font-bold' : 'text-gray-600'}>
          {currentRecord.deadlineDate}
        </span>
        {isLate && <span className="ml-2 text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Late!</span>}
      </td>
      <td className="p-3">
        {currentRecord.paymentStatus === 'paid' ? (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">PAID</span>
        ) : (
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm font-bold">UNPAID</span>
        )}
      </td>
      <td className="p-3">
        {currentRecord.paymentStatus === 'unpaid' ? (
          <button
            onClick={function() { props.onMarkPaid(currentRecord.id); }}
            className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded"
          >
            Mark Paid
          </button>
        ) : (
          <span className="text-sm text-gray-400">Done</span>
        )}
      </td>
    </tr>
  );
}
