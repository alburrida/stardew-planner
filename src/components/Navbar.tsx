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
    <header className="border-b border-stone-800 bg-stone-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-4">
        <NavLink
          to="/"
          className="mr-4 text-lg font-bold text-emerald-400"
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
                isActive
                  ? 'bg-emerald-500 text-stone-950'
                  : 'text-stone-300 hover:bg-stone-800 hover:text-white',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar