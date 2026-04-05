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
const ResponsiveContainer = dynamic(() =>
  import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

export default function Charts() {
  const { transactions } = useFinanceStore();

  return (
    <div className="bg-white text-black p-4 sm:p-5 rounded-2xl shadow">
      <h3 className="text-base sm:text-lg font-semibold mb-4">
        Trend
      </h3>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={transactions}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="amount" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}