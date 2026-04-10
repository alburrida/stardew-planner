import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CropsPage from './pages/CropsPage'
import FishPage from './pages/FishPage'
import VillagersPage from './pages/VillagersPage'
import FavoritesPage from './pages/FavoritesPage'
import NotesPage from './pages/NotesPage'
import PlannerPage from './pages/PlannerPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crops" element={<CropsPage />} />
          <Route path="/fish" element={<FishPage />} />
          <Route path="/villagers" element={<VillagersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App