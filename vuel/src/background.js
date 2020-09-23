import { init } from './background_utils'
import { exec } from 'child_process'
import { app } from 'electron'
import { ipcMain } from 'electron'

init()
console.log('hi')

ipcMain.on('cmd', (event, arg) => {
  console.log('cmd: ', arg)  // "ping" 출력

  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }

    console.log('sending: ', stdout)
    event.sender.send('cmd-reply', stdout)
  })
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // "ping" 출력
  event.returnValue = 'pong'
})
