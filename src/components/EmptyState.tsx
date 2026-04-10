interface EmptyStateProps {
  message: string
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-stone-800 bg-stone-900 p-4">
      <p className="text-stone-400">{message}</p>
    </div>
  )
}

export default EmptyState