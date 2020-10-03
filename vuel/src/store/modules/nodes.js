import api from '@/background_utils/background_api'

const state = {
  nodes: [
    {
      id: 1,
      hostname: 'worker01',
      cpu_usage: 30,
      gpu_usage: 1,
      mem_usage: 100,
      storage_usage: 3
    },
    {
      id: 2,
      hostname: 'worker02',
      cpu_usage: 20,
      gpu_usage: 2,
      mem_usage: 3,
      storage_usage: 4
    }
  ]
}

const getters = {
  allNodes: state => state.nodes
}

const actions = {
  async fetchNodes ({ commit }) {
    console.log(api)
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
