<template>
  <div class="flex flex-col lg:flex-row items-center gap-4 mb-6">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search..."
      @input="debouncedSearch"
      class="w-full lg:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { debounce } from 'lodash'

export default defineComponent({
  props: {
    onSearch: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const searchTerm = ref('')

    const debouncedSearch = debounce(() => {
      props.onSearch(searchTerm.value)
    }, 300)

    return { searchTerm, debouncedSearch }
  },
})
</script>
