<template>
  <v-card
    width="200"
  >
    <v-card-title class="justify-center" v-text="hostname"></v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-row>
      <v-col> CPU: </v-col>
      <v-col> <Bar :percent="cpu_usage" /> </v-col>
    </v-row>

    <v-row>
      <v-col> GPU: </v-col>
      <v-col> <Bar :percent="gpu_usage" /> </v-col>
    </v-row>
    <v-row>
      <v-col> MEM: </v-col>
      <v-col> <Bar :percent="mem_usage" /> </v-col>
    </v-row>

    <v-card-actions>
      <v-btn>
        ping
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
import Bar from '@/components/Bar'

export default {
  name: 'NodeCard',
  components: {
    Bar
  },
  props: {
    hostname: String,
    cpu_usage: Number,
    gpu_usage: Number,
    mem_usage: Number,
    storage_usage: Number
  }
}
</script>
