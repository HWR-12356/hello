<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
            <el-icon><location /></el-icon>
            <span  @click="pushTable">table</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span @click="pushModal">modal</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script lang='ts'>
export default {
    name: 'Left'
}
</script>
<script lang="ts" setup>
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'

import {useRouter, useRoute} from 'vue-router'

const router = useRouter()

function pushTable() {
    router.push({
        path: '/table'
    })
    console.log('table')
}

function pushModal() {
    router.push({
        path: '/modal'
    })
    console.log('modal')
}

</script>
