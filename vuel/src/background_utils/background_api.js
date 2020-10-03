import { exec } from 'child_process'

const BackgroundApiService = {
  pwd () {
    return new Promise((resolve, reject) => {
      exec('pwd', (err, stdout, stderr) => {
        if (err) {
          console.warn(err)
        }

        resolve (stdout ? stdout : stderr)
      })
    })
  }
}

export default BackgroundApiService
