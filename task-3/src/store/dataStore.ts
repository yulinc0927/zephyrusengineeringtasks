import { defineStore } from 'pinia'

interface DataItem {
  id: number
  title: string
  body: string
}

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    items: [] as DataItem[],
    searchQuery: '',
  }),
  getters: {
    filteredItems(state) {
      return state.items?.filter(
        (item) =>
          item.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          item.body.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          item.id.toString().includes(state.searchQuery.toLowerCase()),
      )
    },
  },
  actions: {
    setItems(data: DataItem[]) {
      this.items = data
    },
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
  },
})
