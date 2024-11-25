<template>
  <div>
    <div v-if="loading" class="text-center text-blue-500 py-4">Loading...</div>

    <div v-else-if="error" class="text-center text-red-500 py-4">
      {{ error }}
    </div>

    <div v-else-if="data.length > 0" class="overflow-x-auto">
      <table
        class="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg"
      >
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">ID</th>
            <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
              Title
            </th>
            <th class="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">
              Body
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id" class="hover:bg-gray-50 even:bg-gray-100">
            <td class="border border-gray-300 px-4 py-2">{{ item.id }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ item.title }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ item.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-center py-4 text-gray-500">No data available.</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
    error: {
      type: String,
      required: false,
    },
  },
})
</script>
