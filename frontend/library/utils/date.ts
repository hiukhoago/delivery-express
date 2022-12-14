export function formatDate(dateString : string) {
    const date = new Date(dateString)
    const month = date.toLocaleString('default', { month: 'long' })
    return `${month} ${date.getDate()}, ${date.getFullYear()}`
  }