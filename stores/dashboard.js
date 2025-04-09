import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    kpis: {
      revenue: 45000,
      users: 318,
      orders: 1204,
      expense:3000,
    },
    revenueChart: [
      { month: 'Jan', value: 10000 },
      { month: 'Feb', value: 14000 },
      { month: 'Mar', value: 12000 },
      { month: 'Apr', value: 17000 },
      { month: 'May', value: 19000 }
    ],
    pieData: [
        { category: 'Electronics', orders: 320 },
        { category: 'Clothing', orders: 210 },
        { category: 'Home & Kitchen', orders: 150 },
        { category: 'Books', orders: 90 }
      ],
   
    tableData: [
        { id: 1, name: 'Yasmin', purchase: 220 },
        { id: 2, name: 'Alice', purchase: 340 },
        { id: 3, name: 'Bella', purchase: 120 },
        { id: 4, name: 'Mulan', purchase: 480 },
        { id: 5, name: 'Aladdin', purchase: 250 },
        
      ],
      searchQuery: '',
      
    }),

    getters: {
        filteredData(state) {
          if (!state.searchQuery) return state.tableData
          return state.tableData.filter(row =>
            row.name.toLowerCase().includes(state.searchQuery.toLowerCase())
          )
        },
    
      
      },
    
      actions: {
        setSearch(query) {
          this.searchQuery = query
          this.currentPage = 1
        },
    
       
      }
    })
