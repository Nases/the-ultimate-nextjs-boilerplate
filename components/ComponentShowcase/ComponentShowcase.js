import Buttons from './Buttons'
import FormElements from './FormElements'


const Divider = () => {
  return (
    <hr className='my-8' />
  )
}

const ComponentShowcase = () => {
  return (
    <>
      <Buttons />
      <Divider />
      <FormElements />
    </>
  )
}


export default ComponentShowcase