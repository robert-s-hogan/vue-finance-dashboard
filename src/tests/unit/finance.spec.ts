// tests/unit/finance.spec.ts
import { useFinanceStore } from "@/stores/finance";
import { createPinia, setActivePinia } from "pinia";

describe("Finance Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("adds income correctly", () => {
    const store = useFinanceStore();
    store.addIncome({ amount: 1000, source: "Job" });
    expect(store.income.length).toBe(1);
    expect(store.income[0]).toEqual({ amount: 1000, source: "Job" });
  });

  it("adds expense correctly", () => {
    const store = useFinanceStore();
    store.addExpense({ amount: 200, category: "Food" });
    expect(store.expenses.length).toBe(1);
    expect(store.expenses[0]).toEqual({ amount: 200, category: "Food" });
  });
});
