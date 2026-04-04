"use client";
import { useState, useEffect } from "react";
import { useFinanceStore } from "../store/useFinanceStore";

export default function AddTransaction() {
  const { addTransaction, editingTxn, updateTransaction } = useFinanceStore();

  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    type: "expense",
  });

  useEffect(() => {
    if (editingTxn) {
      setForm(editingTxn);
    }
  }, [editingTxn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTxn) {
      updateTransaction(form);
    } else {
      addTransaction(form);
    }

    setForm({
      date: "",
      category: "",
      amount: "",
      type: "expense",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white text-gray-700 p-4 rounded shadow">
      <div className="grid md:grid-cols-4 gap-3">
        <input
          type="date"
          className="border p-2"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-2"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: Number(e.target.value) })
          }
        />

        <select
          className="border p-2"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        {editingTxn ? "Update" : "Add"} Transaction
      </button>
    </form>
  );
}