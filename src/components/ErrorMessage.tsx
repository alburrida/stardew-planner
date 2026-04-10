interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="rounded-xl border border-red-900 bg-red-950/40 p-4">
      <p className="text-red-300">Error: {message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 rounded-md bg-red-400 px-4 py-2 font-medium text-stone-950 transition hover:opacity-90"
        >
          Reintentar
        </button>
      )}
    </div>
  )
}

export default ErrorMessage