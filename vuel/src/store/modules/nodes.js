import { ipcRenderer } from 'electron'

const state = {
  nodes: { }
}

const getters = {
  getAllNodes: state => state.nodes,
  getGroups: state => Object.keys(state.nodes),
  getNodes: state => group => state.nodes[group],
  getNodeById: state => (group, id) => state.nodes[group].find(node => node.id === id)
}

const actions = {
  async readNodes ({ commit }) {
    console.log('read nodes')
    const nodes = await ipcRenderer.invoke('readNodes', {
      addr: 'readNodes'
    })

    console.log('read nodes')
    console.log(nodes)

    commit('setNodes', nodes)
  },

  async setNodes ({ commit }, nodes) {
    await ipcRenderer.invoke('writeNodes', {
      addr: 'writeNodes',
      nodes: nodes
    })

    commit('setNodes', nodes)
  },

  async addNode ({ state, commit, dispatch }, { group, node }) {
    // await api.writeNodes([...state.nodes, node])
    console.log('adding ', node)
    console.log('to ', group)
    const nodes = { ...state.nodes }
    nodes[group] = nodes[group] ? [...nodes[group], node] : [node]

    await dispatch('setNodes', nodes).catch(e => {
      console.log(e)
      return false
    })

    return true
  },

  async fetchNodes ({ commit }) {
    // console.log(api)
  }
}

const mutations = {
  setNodes: (state, nodes) => { state.nodes = nodes }
}

export default {
  state,
  getters,
  actions,
  mutations
}
