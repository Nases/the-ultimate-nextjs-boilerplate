import { useState } from 'react'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import Link from 'next/link'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import { gql, useQuery } from '@apollo/client'
import UserFragment from '../../assets/graphql/client/fragments/UserFragment'


const UserDetails = ({ id }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const UserQuery = gql`
    query UserQuery($id: String) {
      user(id: $id) {
        ...userFields
      }
    }
    ${UserFragment}
  `
  useQuery(UserQuery, {
    variables: {
      id
    },
    onCompleted: data => {
      setUser(data.user)
      setIsLoading(false)
    },
    onError: err => {
      setIsLoading(false)
    }
  })

  const UserDetailsRow = ({ title, value }) => {
    return (
      <div className="px-4 py-5 sm:p-0 border-b border-gray-200">
        <dl>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500">
              {title}
            </dt>
            <dd className={`mt-1 text-sm leading-5 ${value ? 'text-gray-900' : 'text-gray-400'} sm:mt-0 sm:col-span-2`}>
              {value || 'Unknown'}
            </dd>
          </div>
        </dl>
      </div>
    )
  }


  return (
    <>
      <div className="mb-1">
        <Button className='pt-0 pb-0' color='link'>
          <Link href='/admin/users'>
            <a>
              <i aria-hidden className="fas fa-long-arrow-alt-left"></i>
              {' '}
                  Back
                </a>
          </Link>
        </Button>
      </div>
      {
        !isLoading ? (user ?
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="flex justify-between text-lg leading-6 font-medium text-gray-900">
                {user.email}
                <Badge color={(user.role === 'ADMIN') ? 'blue' : 'green'} size='small'>
                  {(user.role === 'ADMIN') ? 'Admin' : 'Customer'}
                </Badge>
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                User ID: {user._id}
              </p>
            </div>
            <UserDetailsRow title={'First name'} value={user.firstName} />
            <UserDetailsRow title={'Last name'} value={user.lastName} />
            <UserDetailsRow title={'Registration date'} value={moment(user.registrationDate).format('DD MMM YYYY')} />
          </div>
          : 'Something went wrong, please try again later.')
          :
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="flex justify-between text-lg leading-6 font-medium text-gray-900">
                <Skeleton height={24} width={400} />
                <Skeleton height={20} width={80} />
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                User ID: <Skeleton height={16} width={300} />
              </p>
            </div>
            <Skeleton className="mx-4 my-5" height={24} width={400} />
            <Skeleton className="mx-4 my-5" height={24} width={400} />
            <Skeleton className="mx-4 my-5" height={24} width={400} />
            <Skeleton className="mx-4 my-5" height={24} width={400} />
          </div>
      }
    </>
  )
}


export default UserDetails