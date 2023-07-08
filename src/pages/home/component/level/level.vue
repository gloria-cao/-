<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级</div>
      <ul class="hospital">
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>二级甲等</li>
        <li>二级乙等</li>
        <li>一级</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.level {
  color: rgb(149, 154, 153);
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin-left: 10px;

        &.active {
          color: rgb(85, 166, 255);
        }
      }
      li:hover {
        color: rgb(85, 166, 255);
        cursor: pointer;
      }
    }
  }
}
</style>
