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
    availableTo: [2]
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: 'users',
    availableTo: [2]
  },
  {
    name: 'Debug',
    href: '/debug',
    icon: 'magic',
    availableTo: [1, 2]
  },
  {
    name: 'Account Settings',
    href: '/account-settings',
    icon: 'cog',
    availableTo: [1, 2]
  },
  {
    name: 'Log Out',
    href: '/sign-out',
    icon: 'sign-out-alt',
    availableTo: [1, 2]
  }
]