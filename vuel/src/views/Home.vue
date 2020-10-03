<template>
  <div class="home">
    <v-main>
      <Nav class='nav-bar'/>
      <Monitor class='Monitor' />
    </v-main>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Monitor from '@/components/Monitor'

export default {
  name: 'Home',
  components: {
    Nav,
    Monitor
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  width: 20px;
}
</style>
