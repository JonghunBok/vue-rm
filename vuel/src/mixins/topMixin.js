import { ipcRenderer } from 'electron'

export const topMixin = {
  data: () => ({
    cpu_usage: 0,
    gpu_usage: 0,
    mem_usage: 0,
    storage_usage: 0,
    connected: false
  }),

  methods: {
    ping () {
      console.log(this.node)
      let cmd = ''
      if (this.node.ip === '127.0.0.1') {
        cmd = 'top -b -n 1 | head -n5'
      } else {
        cmd = `ansible all -i ${this.node.ip}, \
                -e "ansible_user=${this.node.user} \
                ansible_ssh_pass=${this.node.password}" \
                -m shell -a 'top -b -n 1 | head -n5 | tail -n4'`
      }

      ipcRenderer.send('cmd', {
        addr: this.addr,
        cmd
      })
    },
    parseTop (top) {
      const lines = top.split('\n')
      const cpuLine = lines[2]
      const memLine = lines[3]

      const userspaceCpuUsage = +/\d+\.\d+/.exec(cpuLine)[0]
      const memUsage = memLine.split(':')[1].split(',').map(s => s.trim())

      const totalMem = +memUsage.filter(mem => /total/.test(mem))[0].split(' ')[0]
      const usedMem = +memUsage.filter(mem => /used/.test(mem))[0].split(' ')[0]

      this.cpu_usage = userspaceCpuUsage
      this.mem_usage = usedMem / totalMem * 100

      // TODO: Refine calculation of mem_usage.
    },

    parseNividiaSmi (smi) {
      // TODO: Implement it.
    }
  },

  mounted () {
    ipcRenderer.on(this.addr, (event, arg) => {
      // console.log(arg)
      this.connected = true
      this.parseTop(arg)
    })
  }
}
