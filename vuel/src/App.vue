<template>
  <v-app>
    <v-btn @click="ls"> test </v-btn>
  </v-app>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),

  methods: {
    ls () {
      console.log('issuing ls')
      ipcRenderer.send('cmd', 'ls')
    }
  },

  mounted () {
    ipcRenderer.on('cmd-reply', (event, arg) => {
      console.log('got a reply', arg)
    })
  }
}
</script>
