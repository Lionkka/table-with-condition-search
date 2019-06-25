import { statuses, roles } from '../config/userConfig'

const dumnInfo = {
  names: ['John', 'James', 'Robert', 'William', 'Michael'],
  surnames: ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown']
}

const startDate = new Date(2014, 12).valueOf()

export const searchByCriteria = (data, searchString) => {
  if (!searchString || !searchString.trim()) return data

  searchString = searchString.replace(/\s+/g, ' ')

  const isConditionSearch = /\s*(OR|AND)\s*/.test(searchString)
  if (isConditionSearch) {
    return conditionSearch(data, searchString)
  }
  return data.filter((item) =>
    isObjectContainString(item, searchString)
  )
}

const isObjectContainString = (item, searchString) => {
  const properties = Object.values(item)

  for (let i = 0; i < properties.length; i++) {
    const property = properties[i].toString().toLowerCase()
    const containSearchString = property.indexOf(searchString.toLowerCase()) !== -1
    if (containSearchString) {
      return true
    }
  }
  return false
}

const conditionSearch = (data, searchString) => {
  const criteria = searchString.split(/\s*(OR|AND)\s*/)
  if (criteria[1] === 'AND') {
    return data.filter((item) =>
      isObjectContainString(item, criteria[0]) && isObjectContainString(item, criteria[2])
    )
  }

  if (criteria[1] === 'OR') {
    return data.filter((item) =>
      isObjectContainString(item, criteria[0]) || isObjectContainString(item, criteria[2])
    )
  }

}

export const generateUsers = (count) => {
  const users = []

  for (let i = 0; i < count; i++) {
    const role = roles[getRandomInt(0, roles.length)]
    const status = statuses[getRandomInt(0, statuses.length)]

    const user = {
      id: i + 1,
      fullName: generateFullName(),
      connected: generateDate(),
      role,
      status
    }

    users.push(user)
  }

  return users
}

function generateFullName () {
  return `${dumnInfo.names[getRandomInt(0, dumnInfo.names.length)]} ${dumnInfo.surnames[getRandomInt(0, dumnInfo.surnames.length)]}`
}

function generateDate () {
  return new Date(getRandomInt(startDate, Date.now()))
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
