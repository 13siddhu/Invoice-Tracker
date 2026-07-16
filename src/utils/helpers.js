export function createUniqueId() {
  // A simple way to generate an ID
  return Date.now().toString() + Math.floor(Math.random() * 100).toString();
}

export function checkIfLate(dateString, currentStatus) {
  if (currentStatus === 'paid') {
    return false;
  }
  
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  
  const targetDate = new Date(dateString);
  targetDate.setHours(0, 0, 0, 0);
  
  return targetDate < todayDate;
}

export const starterData = [
  { id: '11111', clientName: 'Google', money: 500, deadlineDate: '2026-10-10', paymentStatus: 'unpaid' },
  { id: '22222', clientName: 'Amazon', money: 250, deadlineDate: '2026-05-15', paymentStatus: 'paid' },
  { id: '33333', clientName: 'Netflix', money: 1000, deadlineDate: '2026-06-01', paymentStatus: 'unpaid' },
];
