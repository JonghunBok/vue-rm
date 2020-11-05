<template>
  <div class="home">
    <v-main class="d-flex">
      <Monitor
        v-for="group in getGroups"
        :key="group"
        :group="group"
        :nodes="getNodes(group)"
        class='monitor' />
    </v-main>

    <div class="fab-wrapper d-flex justify-space-around">
      <v-btn fab>
        <v-icon>
          mdi-fullscreen
        </v-icon>
      </v-btn>
      <v-btn fab @click="console.log('getNodes')">
        divide
      </v-btn>
      <v-btn fab>
        pb
      </v-btn>
      <v-btn fab>
        refresh
      </v-btn>
      <v-btn fab>
        about
      </v-btn>
    </div>
  </div>
</template>

<script>
import Monitor from '@/components/Monitor'
// import { ipcRenderer } from 'electron'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Monitor
  },
  computed: {
    ...mapGetters(['getGroups', 'getNodes'])
  },
  methods: {
    ...mapActions(['readNodes'])
    /*
    readNodes () {
      console.log('issue readnoes')
      ipcRenderer.send('readNodes', {})
    }
    */
  },
  mounted () {
    this.readNodes()

    console.log(this.getNodes)
  }
}
</script>

<style scoped>
.fab-wrapper {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 360px;
}
</style>
