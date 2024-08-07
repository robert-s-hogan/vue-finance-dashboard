// stores/finance.ts
import { defineStore } from "pinia";

interface Income {
  amount: number;
  source: string;
}

interface Expense {
  amount: number;
  category: string;
}

export const useFinanceStore = defineStore("finance", {
  state: () => ({
    income: [] as Income[],
    expenses: [] as Expense[],
  }),
  actions: {
    addIncome(income: Income) {
      this.income.push(income);
    },
    addExpense(expense: Expense) {
      this.expenses.push(expense);
    },
  },
});
