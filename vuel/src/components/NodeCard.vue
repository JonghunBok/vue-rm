<template>
  <v-card
    width="200"
  >
    <v-card-title class="justify-center" v-text="node.hostname"></v-card-title>

    <v-divider class="mx-4"></v-divider>

    <div v-if="connected" class="card-content pa-4 pb-0">
      <v-row>
        <v-col> CPU: </v-col>
        <v-col> <Bar :percent="cpu_usage" /> </v-col>
      </v-row>

      <!--
        TODO: implement 'parseNvidiaSmi'
        <v-row>
          <v-col> GPU: </v-col>
          <v-col> <Bar :percent="gpu_usage" /> </v-col>
        </v-row>
      -->
      <v-row>
        <v-col> MEM: </v-col>
        <v-col> <Bar :percent="mem_usage" /> </v-col>
      </v-row>
    </div>
    <div v-else class="card-content">
      not connected yet
    </div>

    <v-card-actions class="d-flex justify-end">
      <v-btn @click="ping">
        ping
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
import Bar from '@/components/Bar'
import { topMixin } from '@/mixins/topMixin.js'

export default {
  name: 'NodeCard',
  mixins: [topMixin],
  components: {
    Bar
  },
  data: () => ({
    user: '',
    hostname: ''
  }),

  computed: {
    addr () {
      return `nodecard-${this.id}`
    }
  },

  props: {
    id: Number,
    group: String,
    node: Object
  },

  mounted () {
    console.log(this.node)
    this.user = this.node.user
    this.hostname = this.node.hostname
  }
}
</script>

<style scoped>
.card-content {
  min-height: 160px;
}
</style>
