import Button from '../Button/Button'

const Divider = () => {
  return (
    <hr className='my-8' />
  )
}

const ComponentShowcase = () => {
  return (
    <>
      <Divider />
      <div>
        <h2>Buttons</h2>
        <div className='grid grid-cols-6 gap-4'>
          <Button>Primary</Button>
          <Button color='secondary'>Secondary</Button>
          <Button color='link'>Link</Button>
          <Button color='gamifyPrimary'>Gamify Primary</Button>
        </div>
        <Divider />
      </div>
    </>
  )
}

export default ComponentShowcase