"use client";
import SummaryCards from "../src/components/SummaryCards";
import Charts from "../src/components/Charts";
import TransactionsTable from "../src/components/TransactionsTable";
import RoleSwitcher from "../src/components/RoleSwitcher";
import AddTransaction from "../src/components/AddTransaction";
import { useFinanceStore } from "../src/store/useFinanceStore";

export default function Home() {
  const role = useFinanceStore((state) => state.role);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      <SummaryCards />
      <Charts />

      {role === "admin" && <AddTransaction />}

      <TransactionsTable />
    </div>
  );
}