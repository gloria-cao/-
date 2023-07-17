<template>
  <div class="ghost">
    <div class="ghost_eyes">
      <div class="ghost_eye"></div>
      <div class="ghost_eye"></div>
    </div>
    <div class="ghost_leg-box">
      <div class="ghost_leg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loader"
}
</script>
<!--TODO: 网络请求加载动画-->

<style scoped>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
}

.ghost {
  position: relative;
  width: 300px;
  height: 450px;
  background: linear-gradient(#68cbf4 90%, #121212 90%);
  border-top-right-radius: 200px;
  border-top-left-radius: 200px;
  overflow: hidden;
  animation: ghost 4s infinite alternate;
}

.ghost_eyes {
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.ghost_eye {
  width: 70px;
  height: 90px;
  border-radius: 50%;
  background-color: #121212;
}

.ghost_leg-box {
  position: absolute;
  bottom: 0;
  width: 400%;
  height: 100px;
  animation: ghost-legs 2s linear infinite;
}
.ghost_leg {
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: #121212;
  box-shadow: 160px 0 0 #121212,
  -160px 0 0 #121212,
  320px 0 0 #121212,
  480px 0 0 #121212,
  640px 0 0 #121212,
  800px 0 0 #121212,
  960px 0 0 #121212;
}
.ghost_leg:after {
  content: '';
  position: absolute;
  top: -120px;
  left: 160px;
  height: 200px;
  width: 200px;
  background-color: #68cbf4;
  border-radius: 50%;
  box-shadow: 320px 0 0 #68cbf4,
  -320px 0 0 #68cbf4,
  640px 0 0 #68cbf4;
}

@keyframes ghost-legs {
  100% {
    transform: translateX(-640px);
  }
}

@keyframes ghost {
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(50px);
  }
}
</style>
