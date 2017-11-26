<template>
  <div id="app">
    <nav>
      <nav-bar />
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  components: {
    "nav-bar": NavBar
  },
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

</style>
