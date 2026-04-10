export type Season = 'spring' | 'summer' | 'fall' | 'winter'

export interface Crop {
  id: string
  name: string
  season: Season[]
  growthDays: number
  sellPrice: number
  regrowthDays: number | null
}

export interface Fish {
  id: string
  name: string
  season: Season[]
  location: string
  time: string
  weather: string | null
}

export interface Villager {
  id: string
  name: string
  birthday: string
  favoriteGifts: string[]
}

export type FavoriteType = 'crop' | 'fish' | 'villager'

export interface Favorite {
  id: string
  itemId: string
  type: FavoriteType
}

export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
}

export interface PlannerItem {
  id: string
  title: string
  season: Season
  completed: boolean
}