<template>
    <div>
        <button @click='prevPage'>上一页</button>
        <button>每页展示{{itemsPerPage}}条</button>
        <span>最多可展示{{currentPage}}~{{totalPages}}页</span>
        <button @click='nextPage'>下一页</button>
    </div>
</template>
<script lang='ts'>
export default {
    name: 'Pagination'
}
</script>

<script setup lang="ts">
import {usePagination} from '../hook/usePagination'
import {ref, onMounted} from 'vue'
    const totalItems = ref(10000);
    const initCurrentPage = ref(1);
    const initPerPage = ref(10);
    const  {
    currentPage, 
    itemsPerPage, 
    totalPages,
    nextPage,
    prevPage,
    setCurrentPage,
    setItemsPerPage,
    requestData
    } = usePagination(totalItems.value, initCurrentPage.value,  initPerPage.value, '/table/data')


    onMounted(() => {
        requestData()
    })
</script>

<style scoped>

</style>