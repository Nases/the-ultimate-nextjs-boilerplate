import Button from '../Button/Button'

const CTAJustified = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Ready to dive in?
          <br />
            <span className="text-primary-600">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <Button className='mr-3' color='gamifyPrimary' size='lg'>Get started</Button>
            <Button color='gamifySecondary' size='lg'>Learn more</Button>
          </div>
        </div>
      </div>
    </>

  )
}

export default CTAJustified