import { ipcRenderer } from 'electron'

export const usersMixin = {
  data: () => ({
    users: []
  }),

  methods: {
    issueUsers () {
      ipcRenderer.send('cmd' {
        addr: this.addr,
        cmd: `ansible -i inventory ${this.hostname} \
                ${this.user ? '-u ' + this.user : ''} \
                -a users`
      })
    }
  },

  mounted () {
    ipcRenderer.on(this.addr, (event, arg) => {
      this.users = arg
    })
  }
}
