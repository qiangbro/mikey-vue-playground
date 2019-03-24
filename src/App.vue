<template>
  <div id="app" style="height: 100%" class="flex flex-v">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/books" :class="{'router-link-exact-active': $route.name==='BookList'}">Books</router-link> |
      <router-link to="/examples/chart">Chart</router-link> |
      <router-link to="/examples/waterfall">waterfall-easy</router-link> |
      <router-link to="/examples/waterfall-css3">waterfall-css3</router-link> |
      <router-link to="/examples/waterfall-masonry">waterfall-masonry</router-link> |
      <router-link to="/examples/sass">SASS</router-link>
    </div>
    <router-view class="flex-1" style="overflow: auto"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
