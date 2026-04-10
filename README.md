# Stardew Planner

Aplicación fullstack inspirada en Stardew Valley para consultar información útil del juego y organizar mejor la partida del usuario.

La aplicación permite:

- consultar cultivos
- consultar peces
- consultar aldeanos
- guardar favoritos
- crear y editar notas
- gestionar tareas en un planner por estación

## Tecnologías utilizadas

### Frontend
- React
- TypeScript
- Tailwind CSS
- Vite
- React Router

### Backend
- Node.js
- Express
- TypeScript

### Otras herramientas
- Git y GitHub
- Trello
- Vercel
- Render

## Descripción del proyecto

Stardew Planner es una aplicación web fullstack diseñada para centralizar información útil de Stardew Valley y añadir herramientas sencillas de organización para el usuario.

El proyecto combina una parte informativa y una parte interactiva:

### Parte informativa
- listado de cultivos
- listado de peces
- listado de aldeanos

### Parte interactiva
- sistema de favoritos
- sistema de notas
- planner de tareas por estación

La idea del proyecto no ha sido crear una wiki enorme, sino una herramienta práctica, clara y útil para consultar datos rápidos y organizar la partida desde una sola aplicación.

## Funcionalidades principales

La aplicación incluye las siguientes funcionalidades:

- consulta de cultivos con búsqueda y filtro por estación
- consulta de peces con búsqueda y filtro por estación
- consulta de aldeanos con búsqueda y filtro por estación
- sistema de favoritos compartido mediante Context API
- creación, edición y borrado de notas
- creación, edición, borrado y marcado de tareas del planner
- navegación entre páginas con React Router
- página 404 para rutas no válidas
- cliente de API tipado en el frontend
- backend con arquitectura por capas

## Estructura del proyecto

```txt
stardew-planner/
  docs/
  public/
  src/
    api/
    components/
    context/
    hooks/
    pages/
    types/
    utils/
  server/
    src/
      config/
      controllers/
      data/
      routes/
      services/
      types/
  README.md
  ```

### Organización general

- src/ contiene el frontend
- server/ contiene el backend
- docs/ contiene la documentación técnica del proyecto

## Instalación y ejecución en local

### Requisitos previos

- Node.js instalado
- npm disponible
- Git opcional para clonar el repositorio

### 1. Clonar el repositorio

```bash
git clone https://github.com/alburrida/stardew-planner
cd stardew-planner
```

### 2. Instalar dependencias del frontend

```bash
npm install
```

### 3. Instalar dependencias del backend

```bash
cd server
npm install
cd ..
```

### 4. Ejecutar el frontend

```bash
npm run dev
```

### 5. Ejecutar el backend

```bash
cd server
npm run dev
```

## Despliegue y enlaces del proyecto

El proyecto se ha desplegado separando frontend y backend:

- **Frontend** desplegado en **Vercel**
- **Backend** desplegado en **Render**

### Enlaces del proyecto

- **Frontend**: `https://stardew-planner-phi.vercel.app`
- **Backend / API**: `https://stardew-planner.onrender.com`

### Nota importante

La aplicación usa una variable de entorno en el frontend para apuntar a la URL de la API en producción:

```env
VITE_API_BASE_URL=AQUI_URL_BACKEND/api/v1
```
Además, los datos de favoritos, notas y planner se almacenan actualmente en memoria en el backend, por lo que no existe persistencia real si el servicio se reinicia.

## Documentación incluida

La carpeta `docs/` incluye la documentación desarrollada durante el proyecto:

- `agile.md`
- `idea.md`
- `project-management.md`
- `design.md`
- `componentes.md`
- `hooks.md`
- `contexto.md`
- `routing.md`
- `forms.md`
- `api.md`
- `testing.md`
- `deployment.md`
- `retrospective.md`

Estos documentos recogen tanto la planificación inicial como las decisiones técnicas, la arquitectura, la API, las pruebas y la reflexión final del proyecto.

## Fuente de datos e inspiración

La aplicación está inspirada en Stardew Valley y utiliza datos del juego con finalidad académica y demostrativa.

La información mostrada en la aplicación se ha organizado y adaptado al formato del proyecto para construir una herramienta práctica de consulta y organización.

## Estado del proyecto

El proyecto se encuentra funcional y cubre los requisitos principales de la práctica:

- frontend con React, TypeScript y Tailwind CSS
- backend con Express y TypeScript
- arquitectura por capas en el backend
- cliente API tipado en el frontend
- rutas, contexto, hooks y formularios
- documentación técnica en `docs/`
- despliegue del frontend y del backend