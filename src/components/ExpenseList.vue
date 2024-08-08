// src/components/ExpenseList.vue
<template>
  <div>
    <h2>Expenses</h2>
    <ul>
      <li v-for="expense in expenses" :key="expense.id">
        {{ expense.category }}: ${{ expense.amount }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Expense {
  id: number;
  category: string;
  amount: number;
}

export default defineComponent({
  name: "ExpenseList",
  setup() {
    const expenses = ref<Expense[]>([
      { id: 1, category: "Food", amount: 200 },
      { id: 2, category: "Transport", amount: 100 },
    ]);

    return {
      expenses,
    };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
