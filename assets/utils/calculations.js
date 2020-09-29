
const calculateEarlierDate = daysBefore => {
  let fromDate = new Date(Date.now() - 60 * 60 * 24 * daysBefore * 1000)
  return fromDate
}

module.exports = { calculateEarlierDate }