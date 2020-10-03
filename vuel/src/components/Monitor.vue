<template>
  <div>
    <v-container class="d-flex">
      <NodeCard
        v-for="node in allNodes"
        :key="node.id"
        v-bind="node"
        class="node"
      />

      <NewNodeCard />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NodeCard from '@/components/NodeCard'
import NewNodeCard from '@/components/NewNodeCard'

export default {
  name: 'monitor',
  components: {
    NodeCard,
    NewNodeCard
  },
  computed: mapGetters(['allNodes'])
}
</script>

<style>

</style>
