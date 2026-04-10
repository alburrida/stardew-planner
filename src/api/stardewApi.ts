import type {
  ApiResponse,
  Crop,
  Favorite,
  FavoriteType,
  Fish,
  Note,
  PlannerItem,
  Season,
  Villager,
} from '../types/stardew'

import { API_BASE_URL, fetchJson } from './client'

export async function getCrops(): Promise<Crop[]> {
  const response = await fetchJson<ApiResponse<Crop[]>>('/crops')
  return response.data
}

export async function getFish(): Promise<Fish[]> {
  const response = await fetchJson<ApiResponse<Fish[]>>('/fish')
  return response.data
}

export async function getVillagers(): Promise<Villager[]> {
  const response = await fetchJson<ApiResponse<Villager[]>>('/villagers')
  return response.data
}

export async function getFavorites(): Promise<Favorite[]> {
  const response = await fetchJson<ApiResponse<Favorite[]>>('/favorites')
  return response.data
}

export async function createFavorite(itemId: string, type: FavoriteType): Promise<Favorite> {
  const response = await fetch(`${API_BASE_URL}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ itemId, type }),
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data: ApiResponse<Favorite> = await response.json()
  return data.data
}

export async function deleteFavorite(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/favorites/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }
}

export async function getNotes(): Promise<Note[]> {
  const response = await fetchJson<ApiResponse<Note[]>>('/notes')
  return response.data
}

export async function createNote(title: string, content: string): Promise<Note> {
  const response = await fetch(`${API_BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data: ApiResponse<Note> = await response.json()
  return data.data
}

export async function updateNote(
  id: string,
  title: string,
  content: string,
): Promise<Note> {
  const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data: ApiResponse<Note> = await response.json()
  return data.data
}

export async function deleteNote(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }
}

export async function getPlannerItems(): Promise<PlannerItem[]> {
  const response = await fetchJson<ApiResponse<PlannerItem[]>>('/planner')
  return response.data
}

export async function createPlannerItem(
  title: string,
  season: Season,
): Promise<PlannerItem> {
  const response = await fetch(`${API_BASE_URL}/planner`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, season }),
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data: ApiResponse<PlannerItem> = await response.json()
  return data.data
}

export async function updatePlannerItem(
  id: string,
  title: string,
  season: Season,
  completed: boolean,
): Promise<PlannerItem> {
  const response = await fetch(`${API_BASE_URL}/planner/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, season, completed }),
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  const data: ApiResponse<PlannerItem> = await response.json()
  return data.data
}

export async function deletePlannerItem(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/planner/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }
}