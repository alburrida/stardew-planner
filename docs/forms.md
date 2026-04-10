# Formularios e interacción en la aplicación

## Introducción

En Stardew Planner se han implementado formularios controlados para gestionar la creación y edición de datos introducidos por el usuario.

Los formularios permiten interactuar con la aplicación de forma directa y son una parte importante del proyecto, ya que se utilizan para crear y modificar notas y tareas del planner.

## Formularios creados y funcionamiento

Los formularios principales de la aplicación son `NoteForm` y `PlannerForm`.

### NoteForm

Este formulario se utiliza para crear y editar notas.

#### Campos
- título
- contenido

#### Funcionamiento
El usuario introduce los datos, el formulario valida la información y, si todo es correcto, envía la operación correspondiente al backend.

---

### PlannerForm

Este formulario se utiliza para crear y editar tareas del planner.

#### Campos
- título
- estación
- estado de completado, en modo edición

#### Funcionamiento
El usuario puede crear una nueva tarea o modificar una existente, incluyendo su estación y su estado.

### Característica común

Ambos formularios funcionan como formularios controlados, ya que los valores de sus campos se almacenan en el estado del componente y se actualizan con cada cambio del usuario.

## Validación e interacción con el usuario

Los formularios incluyen validación básica para evitar envíos incorrectos.

### Ejemplos de validación

- el título de una nota debe tener una longitud mínima
- el contenido de una nota también debe tener una longitud mínima
- el título de una tarea del planner debe tener una longitud mínima
- la estación seleccionada debe ser válida

Cuando los datos no cumplen las condiciones esperadas, se muestra un mensaje de error al usuario.

### Interacción con la API

Si la validación es correcta, el formulario ejecuta la petición correspondiente al backend para crear o actualizar el recurso.

Después, la interfaz se actualiza para reflejar los cambios realizados.

### Ventaja

Este enfoque mejora la experiencia de usuario y ayuda a mantener la coherencia entre la interfaz y los datos gestionados por la API.