import React from 'react';

export default function SummaryBar(props) {
  const allRecords = props.records;
  
  // Calculate counts and sums
  const totalCount = allRecords.length;
  
  let moneyOwed = 0;
  let moneyReceived = 0;

  for (let i = 0; i < allRecords.length; i++) {
    const currentRecord = allRecords[i];
    if (currentRecord.paymentStatus === 'unpaid') {
      moneyOwed = moneyOwed + Number(currentRecord.money);
    } else if (currentRecord.paymentStatus === 'paid') {
      moneyReceived = moneyReceived + Number(currentRecord.money);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex flex-col sm:flex-row justify-around text-center sm:text-left gap-4">
        
        <div>
          <p className="text-gray-500 text-sm font-semibold tracking-wide">Total Bills</p>
          <p className="text-2xl font-bold">{totalCount}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm font-semibold tracking-wide">Owed</p>
          <p className="text-2xl font-bold text-red-600">${moneyOwed.toFixed(2)}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm font-semibold tracking-wide">Received</p>
          <p className="text-2xl font-bold text-green-600">${moneyReceived.toFixed(2)}</p>
        </div>

      </div>
    </div>
  );
}
