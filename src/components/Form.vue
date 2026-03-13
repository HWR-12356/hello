<template>
  <el-dialog
    v-model="model1"
    title="Shipping address"
    width="500"
    @close="handleClose"
  >
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="分类名称">
        <el-select v-model="form.categories" placeholder="请选择分类">
          <el-option label="生鲜食品" value="001" />
          <el-option label="酒水冲饮" value="002" />
          <el-option label="美容护理" value="003" />
          <el-option label="厨卫清洁" value="004" />
          <el-option label="手机数码" value="005" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price" />
      </el-form-item>
      <el-form-item label="商品图片">
        <Upload @selectImage="selectImageUrl" />
      </el-form-item>
      <el-form-item label="图片相册">
        <FileList @fileListChange="fileListData" />
      </el-form-item>
      <el-form-item label="商品库存">
        <el-input v-model="form.stock" />
      </el-form-item>
      <el-form-item label="商品规格">
        <el-input v-model="form.specifications" />
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input v-model="form.introduction" type="textarea" />
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item> -->
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleClose"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts">
export default {
  name: "Form",
};
</script>
<script lang="ts" setup>
import { reactive, ref, watch, onActivated, onMounted } from "vue";
import Upload from "./upload/index.vue";
import FileList from "./upload/FileList.vue";

// do not use same name with ref
let form = reactive({
  name: "", //商品名称
  categories: "", //商品分类
  price: "", // 商品价格
  images: "", // 商品图片
  album: "", // 图片相册
  stock: "", // 库存
  specifications: "", // 商品规格
  introduction: "", //商品简介
});

// const props = defineProps({
//   visible: Boolean,
//   rowdata: Object,
// });

// 定义emits，用于触发更新事件
// const emits = defineEmits(["update:modelValue"]);
const model1 = defineModel("visible");
const model2 = defineModel("rowsdata");

// 创建一个响应式变量来存储对话框的显示状态
// const dialogVisible = ref(props.modelValue);

// 监听props中modelValue的变化
// watch(
//   () => props.modelValue,
//   (newValue) => {
//     dialogVisible.value = newValue;
//   },
// );

// 处理关闭对话框的方法
const handleClose = () => {
  // dialogVisible.value = false;
  // console.log(model1, "model1---");
  // emits("update:modelValue", false);
  model1.value = false;
  model2.value = Object.assign(model2.value, form);
  console.log(model2.value, "model2.value---");
};

watch(
  () => model2.value,
  (newValue) => {
    form = Object.assign(form, newValue);
  },
  { deep: true },
);

const onSubmit = () => {
  console.log("submit!", form);
};

const selectImageUrl = (imageUrl) => {
  form.images = imageUrl;
};

const fileListData = (list) => {
  form.album = list;
  console.log(form.album, "album");
};

function throttle(fn, wait) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(args);
        timer = null;
      }, wait);
    }
  };
}

// const onClosed = throttle(handleClose, 3000);
</script>
