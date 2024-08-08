// src/components/IncomeList.vue
<template>
  <div>
    <h2>Income</h2>
    <ul>
      <li v-for="income in incomes" :key="income.id">
        {{ income.source }}: ${{ income.amount }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Income {
  id: number;
  source: string;
  amount: number;
}

export default defineComponent({
  name: "IncomeList",
  setup() {
    const incomes = ref<Income[]>([
      { id: 1, source: "Job", amount: 1000 },
      { id: 2, source: "Freelance", amount: 500 },
    ]);

    return {
      incomes,
    };
  },
});
</script>

<style scoped>
/* Your styles here */
</style>
