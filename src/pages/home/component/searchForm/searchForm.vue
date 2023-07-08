<template>
  <div class="autocomplete">
    <el-autocomplete
        clearable
        placeholder="请输入查询医院"
    >
      <template #suffix>
        <el-button  :icon="Microphone" />
        <el-button :icon="Search" />
      </template>
    </el-autocomplete>

  </div>
</template>

<script setup lang="ts">
import { Search, Microphone } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.autocomplete {
  width: 100%;
  height: 50px;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 修改element-plus输入框样式 */

  :deep(.el-input__wrapper) {
    width: 600px;
    height: 50px;
    border-radius: 25px;
  }

  :deep(.el-input__suffix-inner>:first-child) {
    border: 0;
    margin-right: -7px;
  }
  :deep(.el-button+.el-button) {
    height: 100%;
    margin-left: 0;
    margin-right: -10px;
    border-radius: 25px;
    border: 0;
  }

  :deep(.el-icon) {
    color: rgb(85, 166, 255);
    font-size: 30px;
  }
}
</style>
