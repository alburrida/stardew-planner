function LoadingState() {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <p style={{ color: 'var(--color-text-muted)' }}>Cargando datos...</p>
    </div>
  )
}

export default LoadingState