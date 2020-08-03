import Button from '../Button/Button'

const Buttons = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <div className='grid grid-cols-4 gap-4'>
        <Button size='sm'>Small</Button>
        <Button size='md'>Medium</Button>
        <Button size='lg'>Large</Button>
        <Button size='xl'>X-Large</Button>
      </div>
      <br />
      <div className='grid grid-cols-4 gap-4'>
        <Button>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='link'>Link</Button>
        <Button disabled>Disabled Loading</Button>
      </div>
      <br />
      <div className='grid grid-cols-4 gap-4'>
        <Button color='gamifyPrimary'>Gamify Primary</Button>
        <Button color='gamifySecondary'>Gamify Secondary</Button>
      </div>
    </div>
  )
}

export default Buttons