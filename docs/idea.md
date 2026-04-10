# Idea del proyecto: Stardew Companion

## Nombre del proyecto

**Stardew Companion**

---

## Descripción general

Stardew Companion será una aplicación web fullstack pensada para ayudar a jugadores de **Stardew Valley** a consultar información útil del juego y organizar mejor su partida.

La aplicación combinará una parte informativa, donde el usuario podrá consultar datos sobre cultivos, peces y aldeanos, con una parte interactiva en la que podrá guardar favoritos, crear notas personales y planificar tareas o cultivos según la estación.

La idea no es crear una wiki enorme, sino una herramienta práctica, sencilla y útil para centralizar información importante y ayudar al jugador a organizarse.

---

## Problema que intenta resolver

Cuando una persona juega a Stardew Valley, muchas veces necesita consultar información concreta mientras juega, por ejemplo:

- qué cultivos son de cada estación
- dónde y cuándo aparece un pez
- qué regalos le gustan a un aldeano
- qué tareas quiere hacer en la temporada actual
- qué información quiere guardar para más tarde

Normalmente esta información está repartida entre distintas páginas web, vídeos, notas sueltas o simplemente la memoria del jugador. Eso hace que consultar datos y organizar la partida sea más incómodo.

Esta aplicación busca resolver ese problema reuniendo en un solo sitio información útil del juego y herramientas básicas de organización personal.

---

## Usuario objetivo

La aplicación está pensada principalmente para:

- jugadores nuevos de Stardew Valley
- jugadores intermedios que quieren organizar mejor su partida
- usuarios que prefieren consultar información rápida sin abrir varias webs
- personas que quieren llevar un pequeño control de tareas, notas o favoritos mientras juegan

---

## Funcionalidades principales

Estas serán las funcionalidades principales del proyecto:

### 1. Consulta de cultivos
El usuario podrá ver un listado de cultivos y consultar datos como:

- nombre
- estación o estaciones
- días de crecimiento
- precio de venta
- si vuelve a producir o no

### 2. Consulta de peces
El usuario podrá consultar peces y ver información como:

- nombre
- estación
- localización
- horario
- clima, si aplica

### 3. Consulta de aldeanos
El usuario podrá ver un listado de aldeanos con datos básicos como:

- nombre
- cumpleaños
- regalos favoritos

### 4. Sistema de favoritos
El usuario podrá marcar cultivos, peces o aldeanos como favoritos para acceder a ellos más fácilmente después.

### 5. Sistema de notas
El usuario podrá crear, editar y borrar notas personales relacionadas con su partida.

### 6. Planner o planificador
El usuario podrá añadir tareas o elementos de planificación, por ejemplo:

- cultivos que quiere plantar
- objetivos de temporada
- tareas pendientes

### 7. Navegación por páginas
La aplicación tendrá varias páginas conectadas mediante React Router para separar bien las secciones.

### 8. Búsqueda y filtros
El usuario podrá buscar y filtrar información para encontrar datos más rápido.

---

## Funcionalidades opcionales

Estas funcionalidades no son obligatorias, pero podrían añadirse si da tiempo:

- modo oscuro
- animaciones suaves entre elementos
- cálculo simple de beneficio por cultivo
- lazy loading de algunas páginas
- segundo custom hook
- drag & drop en el planner
- tests básicos
- documentación de la API con Swagger/OpenAPI

---

## Posibles mejoras futuras

Si en el futuro se quisiera ampliar el proyecto, algunas mejoras interesantes podrían ser:

- añadir más información del juego, como recetas, objetos o bundles
- incorporar base de datos real en lugar de datos en memoria o mock
- permitir cuentas de usuario
- añadir sincronización en la nube
- crear una vista de calendario más completa
- añadir comparadores de cultivos o peces
- incluir mapas o localizaciones más detalladas
- crear una versión móvil más avanzada

---

## Tecnologías previstas

Para este proyecto se utilizarán las siguientes tecnologías:

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- TypeScript

### Organización y despliegue
- Git y GitHub
- Trello
- Vercel

---

## Enfoque fullstack del proyecto

La aplicación seguirá una arquitectura fullstack sencilla:

- el **frontend** se encargará de mostrar la interfaz, navegar entre páginas y consumir la API
- el **backend** expondrá endpoints REST para servir datos y gestionar favoritos, notas y planner
- la comunicación entre ambas partes se hará mediante una **API tipada**

Los datos informativos del juego podrán servirse desde el backend como datos mock.  
Los datos creados por el usuario, como favoritos, notas y planner, vivirán en la API y serán la fuente de verdad de la aplicación.

---

## Datos que manejará la aplicación

### Datos informativos
- cultivos
- peces
- aldeanos

### Datos del usuario
- favoritos
- notas
- tareas o elementos del planner

---

## Repositorio del proyecto

Se creará un nuevo repositorio en GitHub para desarrollar este proyecto.  
En él se incluirán:

- frontend
- backend
- documentación en la carpeta `docs/`
- README principal del proyecto

---

## Conclusión

Stardew Companion será una aplicación web fullstack orientada a jugadores de Stardew Valley que necesiten consultar información útil y organizar su progreso de forma sencilla.

El proyecto está pensado para ser lo bastante completo como para demostrar el uso de React, TypeScript, Tailwind, Express, rutas, estado, hooks, contexto y cliente de API tipado, pero sin volverse excesivamente grande o difícil de mantener.

La idea encaja bien con los requisitos de la práctica porque permite desarrollar tanto una parte visual e interactiva como una API propia bien estructurada y documentada.