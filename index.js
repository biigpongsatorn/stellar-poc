const axios = require('axios')
const http = axios.create({
  baseURL: 'https://horizon-testnet.stellar.org'
})
const keys = require('./keys')

function getAccount (publickey) {
  return http.get(`/accounts/${publickey}`)
}

;(async () => {
  const { data } = await getAccount(keys.PUBLIC_KEY_1)
  const balance = data.balances.find(b => b.asset_type === 'native').balance
  console.log('balance 1: ', balance)
})()
