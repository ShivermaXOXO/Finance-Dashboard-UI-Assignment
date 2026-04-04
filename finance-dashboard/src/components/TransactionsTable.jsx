"use client";
import { useFinanceStore } from "../store/useFinanceStore";

export default function TransactionsTable() {
  const {
    transactions,
    search,
    setSearch,
    role,
    deleteTransaction,
    startEdit,
  } = useFinanceStore();

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white text-gray-700 p-5 rounded-2xl shadow">
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-center">
        <thead>
          <tr className="border-b">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id} className="border-b">
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td>{t.type}</td>

              {role === "admin" && (
                <td className="space-x-2">
                  <button
                    onClick={() => startEdit(t)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTransaction(t.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}