import Login from '../components/form/Login'
import Layout from '../components/Layout'
import Modal from 'react-modal'

export default () => {








  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)'
  //   }
  // }
  // const [modalIsOpen, setIsOpen] = React.useState(false)
  // function openModal() {
  //   setIsOpen(true)
  // }
  // function closeModal() {
  //   setIsOpen(false)
  // }
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#__next')
  return (
    <Layout title='NextJS - Express Authentication Starter'>
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
              </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </Layout>
  )
}