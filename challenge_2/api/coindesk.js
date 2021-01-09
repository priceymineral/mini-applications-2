const axios  = require('axios')

getBitcoinPrices = (callback) => {
console.log('in getBitPrices')

// let options = {
//   url: 'https://api.coindesk.com/v1/bpi/historical/close.json'
// }

  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then(res => {
      console.log('in then')
      callback(null, res)
    })
    .catch(err => {
      console.log('in catch: ', err)
      callback(err, null)
    })
}

module.exports.getBitcoinPrices = getBitcoinPrices