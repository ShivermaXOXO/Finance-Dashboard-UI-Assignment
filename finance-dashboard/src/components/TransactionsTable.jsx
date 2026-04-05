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
    <div className="bg-white text-gray-700 p-4 sm:p-5 rounded-2xl shadow">
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm sm:text-base text-center">

          <thead>
            <tr className="border-b">
              <th className="py-2 px-2">Date</th>
              <th className="py-2 px-2">Category</th>
              <th className="py-2 px-2">Amount</th>
              <th className="py-2 px-2">Type</th>
              {role === "admin" && <th className="py-2 px-2">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50 transition">

                <td className="py-2 px-2 whitespace-nowrap">{t.date}</td>
                <td className="py-2 px-2">{t.category}</td>
                <td className="py-2 px-2">₹{t.amount}</td>
                <td className="py-2 px-2 capitalize">{t.type}</td>

                {role === "admin" && (
                  <td className="py-2 px-2 space-x-2">
                    <button
                      onClick={() => startEdit(t)}
                      className="bg-yellow-400 px-2 py-1 rounded hover:scale-105 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:scale-105 transition"
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
    </div>
  );
}