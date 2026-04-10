import { Link } from 'react-router'

const sections = [
  {
    title: 'Cultivos',
    description: 'Consulta estaciones, crecimiento y precios de venta.',
    to: '/crops',
    color: 'var(--color-crop)',
  },
  {
    title: 'Peces',
    description: 'Filtra por estación, lugar y horario.',
    to: '/fish',
    color: 'var(--color-fish)',
  },
  {
    title: 'Aldeanos',
    description: 'Revisa cumpleaños y regalos favoritos.',
    to: '/villagers',
    color: 'var(--color-villager)',
  },
  {
    title: 'Favoritos',
    description: 'Guarda lo más importante de tu partida.',
    to: '/favorites',
    color: 'var(--color-earth)',
  },
  {
    title: 'Notas',
    description: 'Apunta ideas, recordatorios y objetivos.',
    to: '/notes',
    color: 'var(--color-villager)',
  },
  {
    title: 'Planner',
    description: 'Organiza tareas y metas por estación.',
    to: '/planner',
    color: 'var(--color-crop)',
  },
]

function HomePage() {
  return (
    <section className="space-y-8">
      <div
        className="rounded-3xl border p-8 shadow-sm"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-secondary), var(--color-surface))',
          borderColor: 'var(--color-border)',
        }}
      >
        <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--color-villager)' }}>
          Stardew Planner
        </p>
        <h1 className="mt-3 text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
          Organiza tu partida de Stardew Valley sin abrir mil pestañas
        </h1>
        <p className="mt-4 max-w-3xl text-lg" style={{ color: 'var(--color-text-muted)' }}>
          Consulta cultivos, peces y aldeanos. Guarda favoritos, crea notas y
          planifica tareas por estación en una sola aplicación.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/crops"
            className="rounded-lg px-5 py-3 font-semibold transition hover:opacity-90"
            style={{ backgroundColor: 'var(--color-crop)', color: 'var(--color-bg)' }}
          >
            Ver cultivos
          </Link>

          <Link
            to="/planner"
            className="rounded-lg px-5 py-3 font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
            }}
          >
            Abrir planner
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.to}
            to={section.to}
            className="rounded-2xl border p-5 transition hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h2 className="text-xl font-semibold" style={{ color: section.color }}>
              {section.title}
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage