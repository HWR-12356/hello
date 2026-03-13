<template>
    <div 
        class='virtual-list' 
        ref='listRef' 
        @scroll="handleScroll"
    >
       <div 
        class='list-content' 
        :style="{
            height: totalHeight + 'px',
            transfrom: `translateY(${scrollTop}px)`}"
       >
        <div v-for="item in visibleData" :key="item.id" class="list-item">
            {{item.name}}
        </div>
        <Pagination/>
       </div>
    </div>
</template>
 <script lang='ts'>
export default {
    name: 'VTable',
}
</script>
<script setup lang="ts">
import {ref, reactive, onMounted, computed} from 'vue'
import Pagination from './Pagination.vue'

const data = Array.from({length: 1000}).map((_,i)=> {
    return {name: `Item${i}`, id: i}
})
const listRef = ref(null);
const itemHeight = 30;
const visibleCount = 10;

//滚动高度
const scrollTop = ref(0);
//总高度
const totalHeight = data.length * itemHeight;

// 计算可见数据
const visibleData = computed(() => {
    const startIndex = Math.floor(scrollTop.value / itemHeight)
    const endIndex = startIndex + visibleCount;
    return data.slice(startIndex, endIndex)
})

// 处理滚动事件
const handleScroll = () => {
    scrollTop.value = listRef.value.scrollTop;
}



</script>
<style scoped>
    .virtual-list {
        height: 300px;
        overflow-y: auto;
        position: relative;
    }

    .list-content {
        position: absolute;
        width: 100%;
    }

    .list-item {
        height: 30px;
        border-bottom: 1px solid #ccc;
    }
</style>