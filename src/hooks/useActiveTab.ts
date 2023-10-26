"use client";
import { useSearchParams } from "next/navigation";

export default function useActiveTab() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("activeTab") || "assembly";
  return activeTab;
}
