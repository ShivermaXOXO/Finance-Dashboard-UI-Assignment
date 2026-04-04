"use client";
import { useFinanceStore } from "../store/useFinanceStore";

export default function SummaryCards() {
  const { transactions } = useFinanceStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-5 bg-white text-black rounded-2xl shadow">
        <p>Balance</p>
        <h2 className="text-blue-500 text-xl">₹{balance}</h2>
      </div>

      <div className="p-5 bg-white text-black rounded-2xl shadow">
        <p>Income</p>
        <h2 className="text-green-500 text-xl">₹{income}</h2>
      </div>

      <div className="p-5 bg-white text-black rounded-2xl shadow">
        <p>Expense</p>
        <h2 className="text-red-500 text-xl">₹{expense}</h2>
      </div>
    </div>
  );
}