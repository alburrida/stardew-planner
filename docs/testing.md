# Pruebas y revisión de la aplicación

## Introducción

Durante el desarrollo de Stardew Planner se han realizado pruebas manuales para comprobar que las funcionalidades principales de la aplicación funcionan correctamente tanto en el frontend como en el backend.

El objetivo de estas pruebas ha sido detectar errores, comprobar la integración entre la interfaz y la API y revisar que la experiencia general de uso sea correcta.

## Funcionalidades probadas

Las pruebas manuales realizadas han cubierto las principales áreas de la aplicación.

### Navegación
Se ha comprobado que:

- la barra de navegación funciona correctamente
- cada ruta lleva a su página correspondiente
- la página 404 aparece cuando se accede a una ruta no válida

### Consulta de datos
Se ha verificado que:

- la página de cultivos carga datos desde la API
- la página de peces carga datos desde la API
- la página de aldeanos carga datos desde la API

### Filtros y búsqueda
Se ha comprobado que:

- la búsqueda por texto funciona en cultivos, peces y aldeanos
- el filtro por estación funciona correctamente
- la combinación de búsqueda y filtro muestra los resultados esperados

### Favoritos
Se ha probado que:

- se pueden añadir favoritos desde las tarjetas
- se pueden eliminar favoritos
- la página de favoritos muestra los elementos guardados
- el estado global de favoritos se actualiza correctamente

### Notas
Se ha verificado que:

- se pueden crear notas
- se pueden editar notas
- se pueden borrar notas
- la validación básica del formulario funciona

### Planner
Se ha comprobado que:

- se pueden crear tareas
- se pueden editar tareas
- se pueden borrar tareas
- se puede cambiar el estado de completado
- el filtro por estación funciona correctamente

## Revisión visual y errores detectados

Además de probar la funcionalidad, también se ha revisado el comportamiento visual general de la aplicación.

### Revisión visual

Se ha comprobado que:

- la interfaz se muestra correctamente en las distintas páginas
- la navegación es clara
- los mensajes de carga, error y ausencia de datos aparecen cuando corresponde
- los formularios responden bien a la interacción del usuario

### Errores detectados y corregidos

Durante el desarrollo aparecieron algunos errores, sobre todo relacionados con:

- imports incorrectos en TypeScript
- ajustes de tipado en parámetros de rutas
- valores posiblemente nulos en páginas que dependen de varias fuentes de datos
- coordinación entre estado local, contexto y respuestas de la API

Estos problemas se corrigieron a medida que fueron apareciendo para mantener el proyecto estable y funcional.