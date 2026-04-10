interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      className="rounded-xl border p-4"
      style={{
        backgroundColor: 'rgba(217, 123, 102, 0.15)',
        borderColor: 'var(--color-danger)',
      }}
    >
      <p style={{ color: 'var(--color-danger)' }}>Error: {message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 rounded-md px-4 py-2 font-medium transition hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-danger)',
            color: '#1F2A44',
          }}
        >
          Reintentar
        </button>
      )}
    </div>
  )
}

export default ErrorMessage