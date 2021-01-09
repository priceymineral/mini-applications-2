const express = require('express')
const app = express()
const port = 3000

const api = require('../api/coindesk.js')

app.use(express.static(__dirname + '/../client/dist'))

app.get('/prices', (req, res) => {
  console.log('in get')
  api.getBitcoinPrices((err, prices) => {
    if (err) {
      res.send(err)
    } else {
      res.send(prices.data)
    }
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})