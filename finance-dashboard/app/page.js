"use client";
import SummaryCards from "../src/components/SummaryCards";
import Charts from "../src/components/Charts";
import TransactionsTable from "../src/components/TransactionsTable";
import RoleSwitcher from "../src/components/RoleSwitcher";
import AddTransaction from "../src/components/AddTransaction";
import Insights from "../src/components/Insights";
import { useFinanceStore } from "../src/store/useFinanceStore";

export default function Home() {
  const role = useFinanceStore((state) => state.role);

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto w-full">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>
      <SummaryCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 w-full overflow-hidden">
          <Charts />
        </div>
        <div className="space-y-6 w-full">
          <Insights />
          {role === "admin" && <AddTransaction />}
        </div>
      </div>

      <div className="w-full pt-2">
        <TransactionsTable />
      </div>

    </div>
  );
}