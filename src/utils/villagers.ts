import type { Season } from '../types/stardew'

export function getBirthdaySeason(birthday: string): Season | null {
  const normalizedBirthday = birthday.toLowerCase()

  if (normalizedBirthday.startsWith('spring')) return 'spring'
  if (normalizedBirthday.startsWith('summer')) return 'summer'
  if (normalizedBirthday.startsWith('fall')) return 'fall'
  if (normalizedBirthday.startsWith('winter')) return 'winter'

  return null
}