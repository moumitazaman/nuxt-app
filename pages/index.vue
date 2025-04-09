<template>
  <div>
    <h1>Here is your playground</h1>
    <Cards/>
    <Chart/>
    <DataTable/>
  </div>
</template>

<script setup lang="ts">
import Chart from '~/components/Chart.vue';
import Cards from '../components/Cards.vue';
import DataTable from '~/components/DataTable.vue';
</script>

<style scoped></style>
