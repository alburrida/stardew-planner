import express from 'express'
import cors from 'cors'
import cropsRoutes from './routes/cropsRoutes'
import fishRoutes from './routes/fishRoutes'
import villagersRoutes from './routes/villagersRoutes'
import favoritesRoutes from './routes/favoritesRoutes'
import notesRoutes from './routes/notesRoutes'
import plannerRoutes from './routes/plannerRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'API funcionando correctamente',
  })
})

app.use('/api/v1/crops', cropsRoutes)
app.use('/api/v1/fish', fishRoutes)
app.use('/api/v1/villagers', villagersRoutes)
app.use('/api/v1/favorites', favoritesRoutes)
app.use('/api/v1/notes', notesRoutes)
app.use('/api/v1/planner', plannerRoutes)

export default app