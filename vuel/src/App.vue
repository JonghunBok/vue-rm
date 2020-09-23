<template>
  <v-app>
    <v-main>
      <Nav class='nav-bar'/>
      <Monitor class='Monitor' />
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import Monitor from './components/Monitor'
export default {
  name: 'App',

  components: {
    Nav,
    Monitor
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  width: 20px;
}
</style>
