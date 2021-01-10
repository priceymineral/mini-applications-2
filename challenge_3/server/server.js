const express = require('express')
const path = require('path')
const app = express()
const port = 6000

app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

console.log(__dirname)