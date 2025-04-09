<template>
    <div class="bg-white p-6 rounded-xl shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Customer Purchases</h2>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name..."
          class="border p-2 rounded-md text-sm"
        />
      </div>
  
      <ClientOnly>
        <DxDataGrid
          :data-source="filteredData"
          :show-borders="true"
          key-expr="id"
          height="auto"
        >
          <DxColumn data-field="id" caption="ID" width="60" />
          <DxColumn data-field="name" caption="Customer Name" />
          <DxColumn data-field="purchase" caption="Purchase ($)" />
        </DxDataGrid>
      </ClientOnly>
    </div>
  </template>
  
  <script setup>
  import DxDataGrid, { DxColumn } from 'devextreme-vue/data-grid'
  import { useDashboardStore } from '@/stores/dashboard'
  import { storeToRefs } from 'pinia'
  
  const store = useDashboardStore()
  const { searchQuery, filteredData } = storeToRefs(store)
  </script>
  