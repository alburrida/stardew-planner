import { useMemo, useState } from 'react'
import {
  createPlannerItem,
  deletePlannerItem,
  getPlannerItems,
  updatePlannerItem,
} from '../api/stardewApi'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import LoadingState from '../components/LoadingState'
import PlannerCard from '../components/PlannerCard'
import PlannerForm from '../components/PlannerForm'
import SeasonFilter from '../components/SeasonFilter'
import { useFetchState } from '../hooks/useFetchState'
import type { PlannerItem, Season } from '../types/stardew'

function PlannerPage() {
  const { data, loading, error, refetch } = useFetchState(getPlannerItems)
  const [editingItem, setEditingItem] = useState<PlannerItem | null>(null)
  const [seasonFilter, setSeasonFilter] = useState<Season | ''>('')

  async function handleCreatePlannerItem(
    title: string,
    season: Season,
    _completed: boolean,
  ) {
    await createPlannerItem(title, season)
    await refetch()
  }

  async function handleUpdatePlannerItem(
    title: string,
    season: Season,
    completed: boolean,
  ) {
    if (!editingItem) return

    await updatePlannerItem(editingItem.id, title, season, completed)
    setEditingItem(null)
    await refetch()
  }

  async function handleDeletePlannerItem(id: string) {
    await deletePlannerItem(id)

    if (editingItem?.id === id) {
      setEditingItem(null)
    }

    await refetch()
  }

  async function handleToggleCompleted(item: PlannerItem) {
    await updatePlannerItem(
      item.id,
      item.title,
      item.season,
      !item.completed,
    )
    await refetch()
  }

  const filteredItems = useMemo(() => {
    if (!data) return []

    return data.filter((item) => {
      return seasonFilter === '' || item.season === seasonFilter
    })
  }, [data, seasonFilter])

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Planner</h1>
        <p className="mt-2 text-stone-300">
          Aquí puedes organizar tareas y objetivos por estación.
        </p>
      </div>

      <PlannerForm
        initialItem={editingItem}
        onSubmit={editingItem ? handleUpdatePlannerItem : handleCreatePlannerItem}
        onCancelEdit={() => setEditingItem(null)}
      />

      <SeasonFilter value={seasonFilter} onChange={setSeasonFilter} />

      {loading && <LoadingState />}
      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && filteredItems.length === 0 && (
        <EmptyState message="No hay tareas del planner con ese filtro." />
      )}

      {!loading && !error && filteredItems.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredItems.map((item) => (
            <PlannerCard
              key={item.id}
              item={item}
              onEdit={setEditingItem}
              onDelete={handleDeletePlannerItem}
              onToggleCompleted={handleToggleCompleted}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PlannerPage