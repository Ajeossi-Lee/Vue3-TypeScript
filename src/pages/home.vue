<template>
  <div class="bg-green-700 text-light-400">
    <el-icon><HomeFilled /></el-icon>home
  </div>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
  <div>
    <div>{{ counterStore.count }}</div>
    <el-button type="success" @click="counterStore.increment">+1</el-button>
  </div>
  <div>
    <el-button type="error" @click="showError"> error </el-button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/modules/counter'

const counterStore = useCounterStore()

const showError = () => ElMessage.error('something error ~')
</script>

<style lang="scss" scoped></style>
