<template>
  <div>
    <v-container class="d-flex">
      <NodeCard
        v-for="(node, idx) in nodes"
        :key="idx"
        :id="idx"
        :node="node"
        :group="group"
        class="node ma-4"
      />

      <NewNodeCard
        class="ma-4"
        :group="group"
      />
    </v-container>
  </div>
</template>

<script>
import NodeCard from '@/components/NodeCard'
import NewNodeCard from '@/components/NewNodeCard'

export default {
  name: 'Monitor',

  props: {
    nodes: Array,
    group: String
  },

  components: {
    NodeCard,
    NewNodeCard
  }
}
</script>

<style>

</style>
