import PricingCard from './PricingCard'


const PricingSimpleTiers = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-3xl font-extrabold text-gray-800 leading-10 text-center">Download Your Attention-Grabbing <br /> Resume Now!</h1>
          <p className="mt-5 md:px-32 text-xl leading-7 text-gray-400 text-center">To download your resume simply sign up for your Premium Membership. As an added bonus, you’ll gain instant access to our Premium Templates and Color Pallete.</p>
        </div>
        <div className="mt-20 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          <div className='absolute -mt-12 text-sm text-gray-700'>
            <div className='flex'>
              <div className='blink mr-3 text-green-400 text-xl'>●</div>
              <div>
                6554 people have taken
                <br />
                the 7 Day Trial today
              </div>
            </div>
          </div>
          <PricingCard
            price={2.95}
            description='7-day trial subscription'
            includes={['Unlimited PDF Downloads', 'Unlimited Resumes', 'Unlimited Cover Letters', 'After 7 days, auto-renews to $24.95 billed every 4 weeks', 'Cancel any time', '7-day money back guarantee']}
            buttonColor='primary'
          />
          <PricingCard
            price={44.95}
            description='6 months'
            includes={['Unlimited PDF Downloads', 'Unlimited Resumes', 'Unlimited Cover Letters', 'Non-recurring payment. Pay once', '7-day money back guarantee']}
            buttonColor='secondary'
          />
          <PricingCard
            price={74.95}
            description='12 months'
            includes={['Unlimited PDF Downloads', 'Unlimited Resumes', 'Unlimited Cover Letters', 'Non-recurring payment. Pay once', '7-day money back guarantee']}
            buttonColor='secondary'
          />
        </div>
        <div className='mt-6 flex justify-center items-center'>
          <span className='mr-2'>We accept:</span>
          <img className='h-5 mr-3' src="/img/payment/visa.svg" alt="visa" />
          <img className='h-5 mr-3' src="/img/payment/mastercard.svg" alt="mastercard" />
          <img className='h-5 mr-3' src="/img/payment/amex.svg" alt="amex" />
          <img className='h-5' src="/img/payment/paypal.svg" alt="paypal" />
        </div>
      </div>
    </div>
  )
}


export default PricingSimpleTiers