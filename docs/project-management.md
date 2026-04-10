# Organización y gestión del proyecto

## Introducción

Para organizar el desarrollo del proyecto he decidido utilizar un tablero de **Trello**. Esta herramienta me permite dividir el trabajo en tareas pequeñas, visualizar el estado de cada una y llevar un control más claro del progreso del proyecto.

Aunque se trata de un proyecto individual, usar un tablero me ayuda a trabajar de forma más ordenada, evitar olvidos y tener una visión general de lo que ya está hecho y de lo que todavía queda por desarrollar.

---

## Herramienta elegida

La herramienta elegida para la organización del proyecto es **Trello**.

Trello funciona mediante tableros, columnas y tarjetas. Cada tarjeta representa una tarea o funcionalidad, y se puede mover entre distintas columnas según el estado en el que se encuentre.

Esta forma de trabajo es sencilla, visual y muy útil para controlar el avance de un proyecto.

---

## Estructura del tablero

Para este proyecto se ha creado un tablero con las siguientes columnas:

### Backlog
En esta columna se colocan todas las ideas, tareas y funcionalidades pendientes de hacer, aunque todavía no estén preparadas para comenzar.

### Todo
Aquí se colocan las tareas que ya están definidas y listas para empezar a desarrollarse.

### In Progress
En esta columna se sitúan las tareas en las que se está trabajando en ese momento.

### Review
Aquí se mueven las tareas que ya están terminadas a nivel de desarrollo, pero que todavía necesitan revisión, prueba o pequeños ajustes.

### Done
En esta columna se colocan las tareas completadas y revisadas.

---

## Forma de organizar el trabajo

Cada funcionalidad principal del proyecto se ha convertido en una tarjeta dentro del tablero. Después, cada tarjeta se ha dividido en subtareas técnicas más pequeñas para que el trabajo sea más fácil de controlar.

Por ejemplo, en lugar de poner una sola tarea como “hacer la página de cultivos”, resulta más útil dividirla en pasos como:

- crear ruta de la página
- crear componente de tarjeta
- mostrar listado
- añadir búsqueda
- añadir filtro por estación
- conectar con la API

De esta forma el trabajo queda mejor estructurado y es más sencillo saber qué falta exactamente por hacer.

---

## Tareas principales del proyecto

Las tareas principales que se organizarán en Trello son las siguientes:

- investigación sobre Agile, Scrum y Kanban
- definición de la idea del proyecto
- creación de la estructura base del proyecto
- configuración de React, TypeScript y Tailwind
- configuración de React Router
- creación del backend con Express
- definición de tipos y contrato de datos
- desarrollo de la API REST
- creación del cliente de API tipado
- desarrollo de páginas principales
- creación de componentes reutilizables
- implementación de estado y hooks
- implementación del contexto global
- desarrollo de formularios
- pruebas y corrección de errores
- documentación técnica
- despliegue del proyecto

---

## Ejemplo de subtareas técnicas

Algunas tarjetas incluirán subtareas como estas:

### Backend
- crear estructura de carpetas
- crear rutas
- crear controladores
- crear servicios
- añadir datos mock
- implementar endpoints REST
- validar datos de entrada
- probar respuestas HTTP

### Frontend
- crear layout general
- crear navbar
- definir rutas
- crear páginas
- crear componentes reutilizables
- conectar frontend con backend
- mostrar estados de carga, éxito y error

### Documentación
- redactar docs/agile.md
- redactar docs/idea.md
- redactar docs/design.md
- redactar docs/components.md
- redactar docs/hooks.md
- redactar docs/context.md
- redactar docs/routing.md
- redactar docs/forms.md
- redactar docs/api.md
- redactar docs/testing.md
- redactar docs/deployment.md
- redactar docs/retrospective.md

---

## Metodología de trabajo aplicada

Para este proyecto se utilizará una forma de organización inspirada sobre todo en **Kanban**.

La razón principal es que Kanban encaja muy bien en proyectos individuales o pequeños, porque permite trabajar con flexibilidad y mover tareas según el progreso real del desarrollo.

No se van a usar sprints estrictos como en Scrum, pero sí se aplicarán algunas ideas útiles del enfoque ágil, como:

- dividir el trabajo en partes pequeñas
- revisar el avance con frecuencia
- corregir errores conforme aparezcan
- adaptar la planificación si es necesario
- priorizar primero las funcionalidades principales

Por tanto, aunque el proyecto no seguirá Scrum de forma estricta, sí tendrá una organización visual y progresiva propia de Kanban dentro de un enfoque general Agile.

---

## Prioridades del proyecto

El desarrollo seguirá este orden de prioridades:

### Prioridad alta
- estructura base del proyecto
- backend y API
- cliente API tipado
- páginas principales
- favoritos, notas y planner
- navegación
- formularios
- documentación mínima obligatoria

### Prioridad media
- mejoras visuales
- filtros avanzados
- mejoras de experiencia de usuario
- optimización de componentes

### Prioridad baja
- animaciones
- bonus
- mejoras extra no obligatorias

Este orden permite asegurar primero el funcionamiento del proyecto antes de dedicar tiempo a detalles secundarios.

---

## Seguimiento del progreso

A medida que el proyecto avance, las tarjetas se irán moviendo entre las columnas del tablero. Esto permitirá:

- ver fácilmente qué tareas están pendientes
- saber en qué se está trabajando
- detectar bloqueos
- comprobar qué partes ya están terminadas

También ayudará a mantener una visión clara del proyecto completo, algo especialmente útil cuando hay varias partes diferentes, como frontend, backend, API y documentación.

---

## Relación entre Trello y el repositorio

El tablero de Trello servirá como herramienta de organización, mientras que GitHub se utilizará para almacenar el código y registrar los cambios del proyecto mediante commits.

Además, el enlace al tablero se añadirá al archivo `README.md` del repositorio, tal como se pide en el enunciado, para que quede constancia de cómo se ha gestionado el trabajo.

