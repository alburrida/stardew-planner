import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold text-red-400">404</h1>
      <p className="text-stone-300">La página que intentas abrir no existe.</p>
      <Link
        to="/"
        className="inline-flex rounded-md bg-emerald-500 px-4 py-2 font-medium text-stone-950 transition hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage