const axios  = require('axios')

module.exports.getBitcoinPrices = (callback) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(res => {
      callback(null, res)
    })
    .catch(err => {
      callback(err, null)
    })
}
