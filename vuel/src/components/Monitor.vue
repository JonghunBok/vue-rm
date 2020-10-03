<template>
  <div>
    <div v-for="node in allNodes" :key="node.id" class="node">
      {{ node.hostname }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'monitor',
  computed: mapGetters(['allNodes'])
}
</script>

<style>

</style>
