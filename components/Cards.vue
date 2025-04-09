<template>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-md">
            <p class="text-sm">Total Revenue</p>
            <h2 class="text-3xl font-bold mt-1">${{ store.kpis.revenue }}</h2>
          </div>
          <div class="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-xl shadow-md">
            <p class="text-sm">New Users</p>
            <h2 class="text-3xl font-bold mt-1">{{ store.kpis.users }}</h2>
          </div>
          <div class="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-md">
            <p class="text-sm">Total Orders</p>
            <h2 class="text-3xl font-bold mt-1">{{ store.kpis.orders }}</h2>
          </div>
          <div class="bg-gradient-to-r from-orange-500 to-orange-700 text-white p-6 rounded-xl shadow-md">
            <p class="text-sm">Total Expense</p>
            <h2 class="text-3xl font-bold mt-1">{{ store.kpis.expense }}</h2>
          </div>
        </div>
</template>
<script setup>
  import { useDashboardStore } from '@/stores/dashboard'
  const store = useDashboardStore()

</script>
<style scoped></style>