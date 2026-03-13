<template>
  <div class="person">
    <!-- <div style="height: 100%;width: 100%;">
            <h1>宇宙</h1>
            <h2 ref='title2'>日本</h2>
            <h3>世田谷</h3>
            <button @click='showLog'>展示2</button>
        </div> -->
    <Table />
    <!-- <button @click="toggleForm">切换表单显示</button>
        <keep-alive>
            <Form v-if='showForm'/>
        </keep-alive> -->
    <img v-lazy="roomData.room_src" alt="" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
};
</script>

<script lang="ts" setup>
import { ref, reactive, defineExpose, defineProps, withDefaults } from "vue";
import { type PerSonInter, type Persons } from "@/types";
import Form from "./Form.vue";
import Table from "./table/index.vue";
const roomData = ref({
  room_src: "../../assets/holder.webp",
});
const showForm = ref(true);
const toggleForm = () => {
  showForm.value = !showForm.value;
};

let perso: PerSonInter = { id: "asfg01", name: "张三", age: 25 };

// let personList: Persons = [
//     {id: 'asdewf001', name: '张三', age: 26},
//     {id: 'asdewf002', name: '李四', age: 16},
//     {id: 'asdewf003', name: '王五', age: 6},
// ]

let personList = reactive<Persons>([
  { id: "asdewf001", name: "张三", age: 26 },
  { id: "asdewf002", name: "李四", age: 16 },
  { id: "asdewf003", name: "王五", age: 6 },
]);

// 只接收list
// defineProps(['list'])
// 接收list + 限制类型
// defineProps<{list: Persons}>()
//  接收list + 限制类型 + 限制必要性 + 指定默认值
// withDefaults(defineProps<{list: Persons}>(),{
//     list: () => [ {id: 'ausydfyu01', name: '康师傅', age: 19}]
// })

// 接收list，同时将props保存起来
let props = defineProps(["list"]);

// 创建一个title2,用于存储ref标记的内容
let title2 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
  console.log(title2.value);
  console.log("defineProps", props);
}
defineExpose({ a, b, c });
</script>

<style></style>
