import { ref } from 'vue'
import axios from 'axios'

export function useFetchData(url: string) {
  const data = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch data. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return { data, loading, error, fetchData }
}
