
export const mainMenuItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Pricing',
    href: '/pricing'
  }
]

export const profileMenuItems = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'chart-line',
    roleRequired: ['ADMIN']
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: 'users',
    roleRequired: ['ADMIN']
  },
  {
    name: 'Components',
    href: '/admin/components',
    icon: 'th',
    roleRequired: ['ADMIN']
  },
  {
    name: 'Account Settings',
    href: '/user/account-settings',
    icon: 'cog',
    roleRequired: ['CUSTOMER', 'ADMIN']
  },
  {
    name: 'Log Out',
    href: '/log-out',
    icon: 'sign-out-alt',
    roleRequired: ['CUSTOMER', 'ADMIN']
  }
]