// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "./components/FinanceDashboard.vue";
import ExpenseList from "./components/ExpenseList.vue";
import IncomeList from "./components/IncomeList.vue";
import Settings from "./components/AccountSettings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "FinanceDashboard",
    component: Dashboard,
  },
  {
    path: "/expenses",
    name: "Expenses",
    component: ExpenseList,
  },
  {
    path: "/income",
    name: "Income",
    component: IncomeList,
  },
  {
    path: "/settings",
    name: "AccountSettings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
