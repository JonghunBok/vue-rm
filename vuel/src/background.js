import { init, command, readNodes, writeNodes } from './background_utils'
import { ipcMain } from 'electron'

init()

ipcMain.on('cmd', (event, arg) => {
  console.log(`"${ arg.addr }" issued "${ arg.cmd }"`)
  command(arg.cmd).then(res => {
    console.log(res)
    event.reply(arg.addr, res)
  })
})

ipcMain.handle('readNodes', async (event, arg) => {
  const nodesJSON = await readNodes()

  return JSON.parse(nodesJSON)
})

ipcMain.handle('writeNodes', (event, arg) => {
  const nodesStr = JSON.stringify(arg.nodes)
  return writeNodes(nodesStr)
})
