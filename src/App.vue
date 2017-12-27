<template>
  <div id="app">
    <common-header></common-header>
    <div class="container-fluid">
      <common-footer></common-footer>
      <router-view/>
    </div>
  </div>
</template>

<script>
import head from './components/header'
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
