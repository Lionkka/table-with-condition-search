export const statuses = [
  'Screen',
  'Scheduled',
  'Explored',
  'Hire'
]

export const roles = [
  'Engineer',
  'Sales',
  'Customer',
  'Support',
  'Manager'
]

export const userTableRows = [
  {
    label: 'Id',
    name: 'id',
    type: 'String'
  },
  {
    label: 'Full name',
    name: 'fullName',
    type: 'String'
  },
  {
    label: 'Role',
    name: 'role',
    type: 'string',
  },
  {
    label: 'Connected On',
    name: 'connected',
    transform: (date)=> date.toISOString().split('T')[0]
  },
  {
    label: 'Status',
    name: 'status',
    type: 'dropdown',
    options: statuses
  },
]
