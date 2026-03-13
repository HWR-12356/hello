<template>
  <div>
    <input type="text" v-model="inputValue" @input="debounceValue" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="商品编号" width="180" />
      <el-table-column prop="name" label="商品名称" width="180" />
      <el-table-column prop="price" label="商品价格" width="180" />
      <el-table-column prop="stock" label="商品库存" width="180" />
      <el-table-column prop="introduction" label="商品简介" width="180" />
      <el-table-column prop="images" label="商品图片" width="180">
        <template v-slot:default="scope">
          <el-image :src="scope.row.images" /> </template
      ></el-table-column>
      <el-table-column prop="operate" label="操作" width="180">
        <template #default="scope">
          <el-button color="orange" @click="editRow(scope.row)">编辑</el-button>
          <el-button color="red" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Form v-model:visible="dialogFormVisible" v-model:rowsdata="rowData" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, watch } from "vue";
import { post } from "../../axios";
import Form from "../Form.vue";
let tableData = reactive([]);
let dialogFormVisible = ref(false);
let visible = ref(false);
let rowData = reactive({});
const list = async function () {
  const {
    data: { list },
  } = await post("/api/table", { page: 1, pageSize: 10 });
  console.log(list, "444");
  tableData = Object.assign(tableData, list);
};

function editRow(row) {
  rowData = Object.assign(rowData, row);
  dialogFormVisible.value = true;
}

function deleteRow(row) {
  console.log(row, "row1");
}

onMounted(() => {
  list();
});

watch(
  rowData,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, "1111");
    rowData = Object.assign(rowData, newValue);
    const index = tableData.findIndex((item) => item.id === rowData.id);
    if (index !== -1) {
      tableData[index] = { ...rowData };
    }
  },
  { deep: true },
);

let inputValue = ref("");
function handleInput(e) {
  console.log("Input value:", inputValue.value);
}

function debounce(fn, wait) {
  console.log(wait, "wait---");
  let timer;
  return function (...args) {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      fn(args);
      timer = null;
    }, wait);
  };
}

const debounceValue = debounce(handleInput, 1000);
</script>
