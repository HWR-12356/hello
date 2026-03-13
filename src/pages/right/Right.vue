<template>
<div>
     <!-- <el-button type='primary' @click="exportBtn">导出Excel表格</el-button>
     <input type="file"> -->
       <!-- <el-table-v2
         ref="exportTableRef"
         :columns="columns"
         :data="data"
         :width="700"
         :height="400"
         fixed
        /> -->
     <VTable/>
</div>

</template>
<script lang="ts" setup>
    import axios from 'axios'
    import {onMounted, ref, reactive} from 'vue'
    import * as XLSX from 'xlsx'
    import VTable from '../../components/VTable.vue'
        let columns = reactive([]);
        let data = reactive([]);
        // const exportTableRef = ref()
        async function myRequest() {
            const {data: {data: column}} = await axios.get('/table/column')
            columns = Object.assign(columns,column);
        }

        async function myGetData() {
            const {data: {data: dataList}} = await axios.get('/table/data') 
            data = Object.assign(data,dataList)
        }

        // function exportBtn() {
        //     const tableDom = exportTableRef.value.$el;
        //     console.log(exportTableRef.value?.$el, 'tableDom')
        //     console.log(exportTableRef.value)
        //     if(!tableDom) {
        //         return
        //     }
        //       const wb = XLSX.utils.table_to_book(tableDom);
        //     XLSX.writeFile(wb, 'table.xlsx');
        // }

        onMounted(()=> {
            myRequest()
            myGetData()
        })
</script>

