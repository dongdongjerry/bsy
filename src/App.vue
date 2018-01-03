<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/active">active</router-link>
      <router-link to="/compose">compose</router-link>
      <router-link to="/index">index</router-link>
      <router-link to="/search">search</router-link>
      <router-link to="/strategy">strategy</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.nav{
  position: fixed;
  bottom: 0;
  font-size: .34rem;
  color: aqua;
}
</style>
