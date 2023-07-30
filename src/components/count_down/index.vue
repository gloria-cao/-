<template>
  <div class="countDown">
    <span>获取验证码（{{time}}）s</span>
  </div>
</template>

<script setup lang="ts">
import {defineProps, watch, ref, defineEmits} from 'vue'

const props = defineProps(['flag'])
// 监听父组件flag变化
let time = ref(3)
watch(
    () => props.flag,
    () => {
          let timer = setInterval(() => {
            console.log("time.value", time.value)
            time.value--;
            //  清除定时器
            if(time.value === 0) {
              clearInterval(timer)
              getFlag()
            }
          }, 1000)
    },
    {
      // immediate: true
    })
// 倒计时结束后通知父组件
const getFlag = () => {
  props.flag = false
  $emit('getFlag', false)

}
const $emit = defineEmits(['getFlag'])
</script>

<style lang="less" scoped>
</style>
