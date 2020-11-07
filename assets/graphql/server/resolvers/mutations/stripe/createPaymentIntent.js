const stripe = require("stripe")("sk_test_51HWE5lIhMPM1myvFhEOi5z7ooy6FPKfKwx5CCdD6NkEgHZ6QAL3OUi890vyqK3TAhknEcxjJZwOIJcZuNzYwDRlP007DXUxsa9")


const createPaymentIntent = (parent, { }, { req, res }, info) => {
  return stripe.paymentIntents.create({
    amount: 124,
    currency: 'usd'
  }).then(paymentIntent => {
    return paymentIntent.client_secret
  }).catch(err => { throw err })
}


export default createPaymentIntent