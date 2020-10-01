import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Link from 'next/link'

const UserDetails = ({ id }) => {
  return (
    <>
      <div className="mb-1">
        <Button className='pt-0 pb-0' color='link'>
          <Link href='/admin/users'>
            <a>
              <i aria-hidden class="fas fa-long-arrow-alt-left"></i>
              {' '}
              Back
            </a>
          </Link>
        </Button>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Details
          {' '}
            <Badge color='green'>
              Customer
          </Badge>
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            User ID: {id}
          </p>
        </div>
        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Full name
            </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster
            </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Email address
            </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                margotfoster@example.com
            </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}

export default UserDetails