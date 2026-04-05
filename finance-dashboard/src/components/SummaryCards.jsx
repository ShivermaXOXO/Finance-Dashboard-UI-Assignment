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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 sm:p-5 bg-white text-black rounded-2xl shadow hover:shadow-md transition">
        <p className="text-sm sm:text-base text-gray-500">Balance</p>
        <h2 className="text-lg sm:text-xl font-semibold text-blue-500">
          ₹{balance}
        </h2>
      </div>

      <div className="p-4 sm:p-5 bg-white text-black rounded-2xl shadow hover:shadow-md transition">
        <p className="text-sm sm:text-base text-gray-500">Income</p>
        <h2 className="text-lg sm:text-xl font-semibold text-green-500">
          ₹{income}
        </h2>
      </div>

      <div className="p-4 sm:p-5 bg-white text-black rounded-2xl shadow hover:shadow-md transition">
        <p className="text-sm sm:text-base text-gray-500">Expense</p>
        <h2 className="text-lg sm:text-xl font-semibold text-red-500">
          ₹{expense}
        </h2>
      </div>
    </div>
  );
}