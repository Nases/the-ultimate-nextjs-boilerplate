
export const mainMenuItems = [
  {
    name: 'Home',
    href: '/'
  }
]

export const profileMenuItems = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'chart-line',
    roleIdRequired: [2]
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: 'users',
    roleIdRequired: [2]
  },
  {
    name: 'Components',
    href: '/admin/components',
    icon: 'th',
    roleIdRequired: [2]
  },
  {
    name: 'Account Settings',
    href: '/user/account-settings',
    icon: 'cog',
    roleIdRequired: [1, 2]
  },
  {
    name: 'Log Out',
    href: '/log-out',
    icon: 'sign-out-alt',
    roleIdRequired: [1, 2]
  }
]