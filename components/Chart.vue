<template>
    <ClientOnly>
      <div class="p-8 bg-gray-50 min-h-screen space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-xl font-semibold mb-4">Revenue Trend</h2>
            <DxChart :data-source="store.revenueChart" class="w-full">
              <DxSeries argument-field="month" value-field="value" name="Revenue" type="line" color="#3b82f6" />
            </DxChart>
          </div> 
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-xl font-semibold mb-4">Orders by Category</h2>
          <DxPieChart :data-source="store.pieData" class="w-full h-64">
            <DxSeries argument-field="category" value-field="orders" />
          </DxPieChart>
        </div> 
        </div>
      </div>
    </ClientOnly>
  </template>
  
  <script setup>
  import { useDashboardStore } from '@/stores/dashboard'
  import { DxChart, DxSeries } from 'devextreme-vue/chart'
  import DxPieChart from 'devextreme-vue/pie-chart'
 
  const store = useDashboardStore()
  </script>
  