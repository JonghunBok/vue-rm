import { exec } from 'child_process'
import { readFile, writeFile } from 'fs'

export function command (cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.warn(err)
      }

      if (stderr) {
        console.warn(stderr)
        resolve(stderr)
      }

      resolve(stdout)
    })
  })
}

export function ping () {
  return new Promise((resolve, reject) => {
    exec('ansible -i src/assets/inventory all -m ping -u cilab', (err, stdout, stderr) => {
      if (err) {
        console.warn(err)
      }
      if (stderr) {
        console.warn(stderr)
        resolve(stderr)
      }

      resolve(stdout)
    })
  })
}

export function pwd () {
  return new Promise((resolve, reject) => {
    exec('pwd', (err, stdout, stderr) => {
      if (err) {
        console.warn(err)
      }

      if (stderr) {
        console.warn(stderr)
        resolve(stderr)
      }

      resolve(stdout)
    })
  })
}

export function readNodes () {
  return new Promise((resolve, reject) => {
    readFile('nodes.json', 'utf8', (err, desc) => {
      if (err) reject(err)
      resolve(desc)
    })
  })
}

export function writeNodes (nodesStr) {
  return new Promise((resolve, reject) => {
    writeFile('nodes.json', nodesStr, 'utf8', (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}
