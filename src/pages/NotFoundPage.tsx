import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div
        className="max-w-xl rounded-3xl border p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-surface))',
          borderColor: 'var(--color-border)',
        }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-wide"
          style={{ color: 'var(--color-danger)' }}
        >
          Error de navegación
        </p>
        <h1 className="mt-3 text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
          404
        </h1>
        <p className="mt-4" style={{ color: 'var(--color-text-muted)' }}>
          La página que intentas abrir no existe o ya no está disponible.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg px-5 py-3 font-semibold transition hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-crop)',
            color: 'var(--color-bg)',
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage