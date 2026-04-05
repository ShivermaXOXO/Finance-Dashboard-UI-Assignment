"use client";
import { useFinanceStore } from "../store/useFinanceStore";

export default function Insights() {
  const { transactions } = useFinanceStore();

  if (!transactions.length) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow">
        <p>No data available</p>
      </div>
    );
  }

  //  Expenses only
  const expenses = transactions.filter((t) => t.type === "expense");

  //  Highest spending category
  const categoryTotals = {};
  expenses.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const highest = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  )[0];

  //  Monthly comparison
  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const savings = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
      {/* Highest Spending */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="font-semibold text-gray-600">
          Highest Spending
        </h3>
        <p className="text-lg text-gray-500 font-bold mt-2">
          {highest ? highest[0] : "N/A"}
        </p>
        <p className="text-red-500">₹{highest ? highest[1] : 0}</p>
      </div>

      {/* Total Savings */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="font-semibold text-gray-600">
          Net Savings
        </h3>
        <p className="text-lg text-gray-500 font-bold mt-2">
          ₹{savings}
        </p>
        <p className={savings >= 0 ? "text-green-500" : "text-red-500"}>
          {savings >= 0 ? "Positive" : "Negative"}
        </p>
      </div>

      {/* Total Expense */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="font-semibold text-gray-600">
          Total Expenses
        </h3>
        <p className="text-lg text-gray-500 font-bold mt-2">
          ₹{totalExpense}
        </p>
        <p className="text-gray-500">This month</p>
      </div>

    </div>
  );
}