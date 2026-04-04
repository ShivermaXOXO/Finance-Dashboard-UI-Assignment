"use client";
import { create } from "zustand";
import { transactionsData } from "../data/mockData";

export const useFinanceStore = create((set) => ({
  transactions: transactionsData,
  role: "viewer",
  search: "",
  editingTxn: null,

  setRole: (role) => set({ role }),
  setSearch: (search) => set({ search }),

  addTransaction: (txn) =>
    set((state) => ({
      transactions: [...state.transactions, { ...txn, id: Date.now() }],
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),

  startEdit: (txn) => set({ editingTxn: txn }),

  updateTransaction: (updatedTxn) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === updatedTxn.id ? updatedTxn : t
      ),
      editingTxn: null,
    })),
}));