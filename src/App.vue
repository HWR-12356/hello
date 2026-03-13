<script setup lang="ts">
import Left from './pages/left/Left.vue'
import Right from './pages/right/Right.vue'
import {useRoute} from 'vue-router'
import {watch, ref} from 'vue'

const route = useRoute()


</script>

<template>
    <div class="app">
        <div class='left'>
          <Left></Left>
        </div>
        <div class='right'>
            <!-- <Right></Right> -->
            <router-view></router-view>
            <router-view name='namedView'></router-view>
        </div>
    </div>
</template>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .left {
    width: 200px;
  }

  .right {
    flex: 1;
  }

</style>
