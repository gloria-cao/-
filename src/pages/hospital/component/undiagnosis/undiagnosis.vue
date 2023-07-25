<template>
  <div class="notification">
    <h1 class="hosName">
      {{hospitalDetail.hospital?.hosname}}停诊信息
    </h1>
    <el-empty description="description" />
  </div>
</template>

<script setup lang="ts">
import useHospitalStore from "@/store/hospital/hospital";

const hospitalStore = useHospitalStore()
const { hospitalDetail } = hospitalStore

</script>

<style lang="less" scoped>
.hosName {
  text-align: center;
  font-size:30px;
  margin-bottom: 50px;
}
</style>
