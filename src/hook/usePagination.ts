import {ref} from 'vue'
import axios from 'axios'
export function usePagination (totalItems = 0, initCurrentPage= 1, initPerPage = 10, url) {
    const currentPage = ref(initCurrentPage)
    const itemsPerPage = ref(initPerPage)
    const totalPages = ref(Math.ceil(totalItems / itemsPerPage.value))
    const data = ref([])

    const nextPage = () => {
        if(currentPage.value < totalPages.value) {
            currentPage.value++
        }
    }

    const prevPage = () => {
        if(currentPage.value > 1) {
            currentPage.value--
        }
    }

    const setCurrentPage = (page: number) => {
        if(page > 1 && page <= totalPages.value) {
            currentPage.value = page
        }
    }

    const setItemsPerPage = (perPage: number) => {
        if(perPage > 1 && perPage <= totalItems) {
            itemsPerPage.value = perPage
        }
    }

    const requestData = async () => {
        try {
            const res = await axios.get(`${url}`)
            data.value = res.data
            totalPages.value = res?.totalPages;
            console.log(res, 'res----')
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return {
        currentPage,
        itemsPerPage,
        totalPages,
        nextPage,
        prevPage,
        setCurrentPage,
        setItemsPerPage,
        requestData
    }

}