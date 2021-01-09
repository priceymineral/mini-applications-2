const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/../client/dist'))
// console.log('__dirname: ', __dirname) // /home/octavio/hrsf131-mini-apps-2/challenge_2/server

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})