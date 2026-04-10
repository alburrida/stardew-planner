import { NavLink } from 'react-router'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/crops', label: 'Cultivos' },
  { to: '/fish', label: 'Peces' },
  { to: '/villagers', label: 'Aldeanos' },
  { to: '/favorites', label: 'Favoritos' },
  { to: '/notes', label: 'Notas' },
  { to: '/planner', label: 'Planner' },
]

function Navbar() {
  return (
    <header
      className="border-b shadow-sm"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
      }}
    >
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-4">
        <NavLink
          to="/"
          className="mr-4 text-lg font-bold"
          style={{ color: 'var(--color-villager)' }}
        >
          Stardew Planner
        </NavLink>

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'rounded-md px-3 py-2 text-sm font-medium transition',
                isActive ? '' : 'hover:opacity-90',
              ].join(' ')
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'var(--color-villager)' : 'transparent',
              color: isActive ? '#1F2A44' : 'var(--color-text)',
              border: isActive ? 'none' : '1px solid var(--color-border)',
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar