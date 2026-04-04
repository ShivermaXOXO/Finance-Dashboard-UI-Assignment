"use client";
import { useFinanceStore } from "../store/useFinanceStore";

export default function RoleSwitcher() {
  const { role, setRole } = useFinanceStore();

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border p-2"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}