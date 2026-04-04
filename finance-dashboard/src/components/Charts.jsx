"use client";

import dynamic from "next/dynamic";
import { useFinanceStore } from "../store/useFinanceStore";

const LineChart = dynamic(() =>
  import("recharts").then((mod) => mod.LineChart),
  { ssr: false }
);
const Line = dynamic(() =>
  import("recharts").then((mod) => mod.Line),
  { ssr: false }
);
const XAxis = dynamic(() =>
  import("recharts").then((mod) => mod.XAxis),
  { ssr: false }
);
const YAxis = dynamic(() =>
  import("recharts").then((mod) => mod.YAxis),
  { ssr: false }
);
const Tooltip = dynamic(() =>
  import("recharts").then((mod) => mod.Tooltip),
  { ssr: false }
);

export default function Charts() {
  const { transactions } = useFinanceStore();

  return (
    <div className="bg-white text-black p-5 rounded-2xl shadow">
      <h3>Trend</h3>
      <LineChart width={400} height={200} data={transactions}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="amount" />
      </LineChart>
    </div>
  );
}