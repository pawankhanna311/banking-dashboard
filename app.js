// ── SPENDING CHART ──────────────────────────────────────────

const ctx = document.getElementById('spendingChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [{
      label: 'Monthly Spend (USD)',
      data: [3800, 5200, 4100, 4600, 3950, 4280],
      backgroundColor: 'rgba(201, 168, 76, 0.3)',
      borderColor: '#c9a84c',
      borderWidth: 2,
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#a0b0c8', font: { size: 12 } }
      }
    },
    scales: {
      x: {
        ticks: { color: '#6b7f99' },
        grid:  { color: '#1a2640' }
      },
      y: {
        ticks: { color: '#6b7f99' },
        grid:  { color: '#1a2640' }
      }
    }
  }
});


// ── TRANSACTIONS DATA ───────────────────────────────────────

const transactions = [
  { date: '22 Apr', description: 'Amazon Singapore',      category: 'Shopping',   amount: -142.50 },
  { date: '21 Apr', description: 'Salary Credit',         category: 'Income',     amount: +8500.00 },
  { date: '20 Apr', description: 'Grab Food',             category: 'Dining',     amount: -38.90 },
  { date: '19 Apr', description: 'SMRT Top-Up',           category: 'Transport',  amount: -30.00 },
  { date: '18 Apr', description: 'Netflix Subscription',  category: 'Utilities',  amount: -18.98 },
  { date: '17 Apr', description: 'Cold Storage',          category: 'Groceries',  amount: -94.30 },
  { date: '16 Apr', description: 'UOB Investment Credit', category: 'Investment', amount: +500.00 },
  { date: '15 Apr', description: 'Dental Clinic',         category: 'Health',     amount: -210.00 },
];


// ── RENDER TRANSACTIONS INTO TABLE ─────────────────────────

const tbody = document.getElementById('txn-body');

transactions.forEach(txn => {
  const row = document.createElement('tr');

  const isCredit = txn.amount > 0;
  const amountClass = isCredit ? 'amount-credit' : 'amount-debit';
  const amountDisplay = isCredit
    ? `+$${txn.amount.toFixed(2)}`
    : `-$${Math.abs(txn.amount).toFixed(2)}`;

  row.innerHTML = `
    <td>${txn.date}</td>
    <td>${txn.description}</td>
    <td>${txn.category}</td>
    <td class="${amountClass}">${amountDisplay}</td>
  `;

  tbody.appendChild(row);
});