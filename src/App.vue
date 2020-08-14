<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <home>
     <router-link to="/home">Home</router-link>
        <router-link to="/test">Test</router-link>
      <router-view></router-view>
    </home>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
