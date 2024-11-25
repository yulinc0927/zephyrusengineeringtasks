<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Task Manager</h1>
    <SearchFilter :onSearch="updateSearch" />
    <DataDisplay :data="filteredItems" :loading="loading" :error="error" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useDataStore } from '../store/dataStore'
import { useFetchData } from '../composables/useFetchData'
import SearchFilter from '../components/SearchFilter.vue'
import DataDisplay from '../components/DataDisplay.vue'

export default defineComponent({
  components: { SearchFilter, DataDisplay },
  setup() {
    const dataStore = useDataStore()
    const { data, loading, error, fetchData } = useFetchData(
      'https://jsonplaceholder.typicode.com/posts',
    )

    onMounted(async () => {
      await fetchData()
      dataStore.setItems(data.value)
    })

    const filteredItems = computed(() => dataStore.filteredItems)

    const updateSearch = (query: string) => {
      dataStore.setSearchQuery(query)
    }

    return {
      filteredItems,
      loading,
      error,
      updateSearch,
    }
  },
})
</script>
