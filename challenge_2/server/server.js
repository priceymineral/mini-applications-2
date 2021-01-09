const express = require('express')
const app = express()
const port = 3000
const api = require('../api/coindesk.js')

app.use(express.static(__dirname + '/../client/dist'))
// console.log('__dirname: ', __dirname) // /home/octavio/hrsf131-mini-apps-2/challenge_2/server

app.get('/prices', (req, res) => {
  console.log('in get')
  api.getBitcoinPrices((err, prices) => {
    if (err) {
      console.log('in err')
      res.send(err)
    } else {
      console.log('in else: ', prices.data)
      res.send(prices.data)
    }
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})