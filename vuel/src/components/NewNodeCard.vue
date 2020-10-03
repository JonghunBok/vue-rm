<template>
  <v-card
    width="200"
    class="pa-4 text-center"
    justify="center"
  >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          x-large
        > mdi-plus-box </v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline"> 새로운 노드의 정보를 적어주세요.  </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="호스트명"
                  v-model="hostname"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="IP 주소"
                  v-model="ip_addr"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="접속할 username"
                  v-model="username"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="password"
                  type="password"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveNode(); dialog = false;">
            save
          </v-btn>
          <v-btn @click="dialog = false">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewNameCard',
  data: () => ({
    dialog: false,
    hostname: '',
    ip_addr: '',
    username: '',
    password: ''
  }),
  methods: {
    ...mapActions(['addNode']),
    saveNode () {
      console.log(this.hostname)
      console.log(this.ip_addr)
      console.log(this.username)
      console.log(this.password)
    }
  }
}
</script>
