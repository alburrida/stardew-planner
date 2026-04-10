import { plannerItems } from '../data/planner'
import type { PlannerItem, Season } from '../types/stardew'

export function getAllPlannerItems() {
  return plannerItems
}

export function createPlannerItem(title: string, season: Season): PlannerItem {
  const item: PlannerItem = {
    id: crypto.randomUUID(),
    title,
    season,
    completed: false,
  }

  plannerItems.unshift(item)
  return item
}

export function updatePlannerItemById(
  id: string,
  title: string,
  season: Season,
  completed: boolean,
): PlannerItem | null {
  const item = plannerItems.find((plannerItem) => plannerItem.id === id)

  if (!item) {
    return null
  }

  item.title = title
  item.season = season
  item.completed = completed

  return item
}

export function deletePlannerItemById(id: string): boolean {
  const index = plannerItems.findIndex((plannerItem) => plannerItem.id === id)

  if (index === -1) {
    return false
  }

  plannerItems.splice(index, 1)
  return true
}