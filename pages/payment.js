import Layout from '../components/Layout/Layout'
import LayoutIndent from '../components/Layout/LayoutIndent'
import { companyInfo } from '../assets/config/settings'

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from '../components/Form/CheckoutForm'

const promise = loadStripe("pk_test_51HWE5lIhMPM1myvFG8yNSjJTgqON5ziABlwxSFLxoWiNugFb25BOUurU7ZqYWno7NmHAfo9BvuXz2Wwau6YN7SVm00n6PNPDns")


const Payment = () => {
  var title = `Payment details | ${companyInfo.name}`
  var description = 'Payment details.'

  return (
    <Layout title={title} description={description}>
      <LayoutIndent>
        <div className='lg:mt-4 md:grid md:grid-cols-3 lg:px-24'>
          <div className='col-span-2 max-w-lg'>
            <h1 className="text-2xl font-extrabold text-gray-800 leading-10">Get your dream job</h1>
            <ul className="mt-2 space-y-4">
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm leading-5 text-gray-500">Payment through a trusted payment service</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm leading-5 text-gray-500">SSL Secure / 256-bit SSL secure checkout</span>
              </li>
              <li className="flex space-x-3">
                <svg className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm leading-5 text-gray-500">7-day money back guarantee</span>
              </li>
            </ul>
            <h2 className="mt-4 text-lg font-extrabold text-gray-800 leading-8">How can I cancel?</h2>
            <p className="text-sm leading-5 text-gray-500">You can easily cancel your subscription by simply contacting our support team via email or telephone, or by doing it yourself on the “Account Settings” page</p>
            <h2 className="mt-4 text-lg font-extrabold text-gray-800 leading-8">Money-Back Guarantee!</h2>
            <p className="text-sm leading-5 text-gray-500">If you are not fully satisfied and still within the 7 day trial period, simply let us know and we will happily process a full refund</p>
            <h2 className="mt-4 text-lg font-extrabold text-gray-800 leading-8">Your payment is protected by</h2>
            <img src="/img/payment/ssl-encryption.svg" />
          </div>
          <div className='col-span-1 bg-white rounded-md px-8 py-6'>
            <Elements stripe={promise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </LayoutIndent>
    </Layout>
  )
}


export default Payment
