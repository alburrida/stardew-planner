# Componentes de la aplicación

## Introducción

En este documento se describen los componentes principales desarrollados en el frontend de Stardew Planner, su función dentro de la aplicación y la forma en que se reutilizan en distintas partes de la interfaz.

La aplicación está desarrollada con React y TypeScript, por lo que cada componente recibe props tipadas cuando es necesario. Además, se ha buscado separar los componentes de presentación, los componentes de formulario y los componentes de apoyo a la experiencia de usuario.

## Clasificación general de componentes

Los componentes del proyecto pueden agruparse en varias categorías según su función:

### Componentes de estructura
Se encargan de la organización general de la interfaz y la navegación principal.

- `Navbar`

### Componentes de estado visual
Sirven para representar estados comunes de la aplicación, como carga, error o ausencia de datos.

- `LoadingState`
- `ErrorMessage`
- `EmptyState`

### Componentes de interacción y filtros
Permiten al usuario buscar, filtrar o interactuar con elementos de la aplicación.

- `SearchBar`
- `SeasonFilter`
- `FavoriteButton`

### Componentes de contenido
Representan entidades concretas del dominio de la aplicación.

- `CropCard`
- `FishCard`
- `VillagerCard`
- `NoteCard`
- `PlannerCard`

### Componentes de formulario
Gestionan la creación o edición de información introducida por el usuario.

- `NoteForm`
- `PlannerForm`

Esta clasificación ayuda a entender mejor la función de cada componente y facilita la organización del proyecto.

## Navbar

`Navbar` es el componente encargado de mostrar la navegación principal de la aplicación.

Su función es permitir al usuario moverse entre las distintas páginas disponibles, como inicio, cultivos, peces, aldeanos, favoritos, notas y planner.

### Responsabilidades

- mostrar los enlaces principales de navegación
- destacar visualmente la ruta activa
- ofrecer un acceso rápido a todas las secciones importantes

### Reutilización

Aunque solo aparece una vez dentro de la aplicación, se considera un componente reutilizable de estructura porque encapsula toda la lógica de navegación en una sola pieza independiente.

### Relación con React Router

Este componente utiliza `NavLink`, lo que permite aplicar estilos diferentes al enlace activo y mejorar la experiencia de navegación del usuario.

### Beneficio en la arquitectura

Separar la barra de navegación en su propio componente hace que `App.tsx` quede más limpio y facilita modificar la navegación sin tocar el resto de la aplicación.

## Componentes de estado visual

En la aplicación se han creado varios componentes pequeños para representar estados comunes de la interfaz. Esto evita repetir el mismo código en varias páginas y hace que el comportamiento visual sea más consistente.

### LoadingState

`LoadingState` se utiliza cuando una página está esperando la respuesta de la API.

#### Función
- mostrar al usuario que los datos todavía se están cargando
- evitar que la interfaz quede vacía mientras llega la respuesta

#### Uso
Se utiliza en páginas como:
- cultivos
- peces
- aldeanos
- favoritos
- notas
- planner

### ErrorMessage

`ErrorMessage` se utiliza cuando ocurre un fallo al cargar datos o al realizar una operación.

#### Función
- mostrar un mensaje de error claro
- permitir, cuando procede, volver a intentar la acción

#### Uso
Se utiliza en las páginas que consumen API y también en operaciones que pueden fallar, como recargar datos.

### EmptyState

`EmptyState` se utiliza cuando una petición ha sido correcta, pero no hay datos que mostrar.

#### Función
- informar de que la operación no ha fallado, pero no existen resultados
- mejorar la experiencia de usuario con mensajes más claros que una pantalla vacía

#### Uso
Se emplea, por ejemplo, cuando:
- no hay resultados tras aplicar filtros
- todavía no existen favoritos
- todavía no se han creado notas
- no hay tareas en el planner

### Ventaja de estos componentes

La principal ventaja es que permiten reutilizar estructuras visuales comunes en toda la aplicación, manteniendo coherencia y reduciendo duplicación de código.

## Componentes de interacción y filtros

Estos componentes permiten al usuario interactuar con la información mostrada en pantalla y modificar la vista de los datos sin cambiar directamente la estructura de las páginas.

### SearchBar

`SearchBar` es un componente reutilizable que encapsula un campo de búsqueda controlado.

#### Función
- recoger texto introducido por el usuario
- comunicar ese valor al componente padre
- servir como filtro dinámico sobre listas de datos

#### Uso
Se utiliza en:
- cultivos
- peces
- aldeanos

#### Ventaja
Permite reutilizar la misma estructura de búsqueda en varias páginas cambiando solo el valor, la función de actualización y el placeholder.

---

### SeasonFilter

`SeasonFilter` es un componente reutilizable basado en un `select` que permite filtrar datos por estación.

#### Función
- mostrar una lista de estaciones disponibles
- permitir seleccionar una estación concreta o mostrar todas
- comunicar la selección al componente padre

#### Uso
Se utiliza en:
- cultivos
- peces
- aldeanos
- planner

#### Ventaja
Centraliza el filtro por estación en un único componente y evita repetir la misma lógica en varias páginas.

---

### FavoriteButton

`FavoriteButton` es el componente encargado de añadir o quitar elementos de favoritos.

#### Función
- comprobar si un elemento ya está marcado como favorito
- mostrar un texto distinto según el estado actual
- ejecutar la acción de añadir o quitar favoritos

#### Uso
Se utiliza dentro de:
- `CropCard`
- `FishCard`
- `VillagerCard`

#### Relación con el contexto global
Este componente se conecta con `FavoritesContext`, por lo que puede acceder al estado global de favoritos sin necesidad de recibir demasiadas props desde niveles superiores.

#### Ventaja
Permite reutilizar una misma lógica de favoritos en distintos tipos de elementos del dominio.

## Componentes de contenido

Estos componentes representan los distintos tipos de datos principales de la aplicación. Su función es mostrar información concreta de forma estructurada y visualmente clara.

### CropCard

`CropCard` muestra la información de un cultivo.

#### Datos que presenta
- nombre
- estación o estaciones
- días de crecimiento
- precio de venta
- tiempo de regrowth, si existe

#### Función adicional
Incluye el botón de favoritos para poder guardar el cultivo desde la propia tarjeta.

---

### FishCard

`FishCard` muestra la información de un pez.

#### Datos que presenta
- nombre
- estación o estaciones
- ubicación
- horario
- clima, si aplica

#### Función adicional
También incluye el botón de favoritos.

---

### VillagerCard

`VillagerCard` muestra información básica de un aldeano.

#### Datos que presenta
- nombre
- cumpleaños
- regalos favoritos

#### Función adicional
Incluye igualmente el botón de favoritos.

---

### NoteCard

`NoteCard` representa una nota creada por el usuario.

#### Datos que presenta
- título
- contenido
- fecha de creación

#### Acciones disponibles
- editar la nota
- borrar la nota

---

### PlannerCard

`PlannerCard` representa una tarea o elemento del planner.

#### Datos que presenta
- título de la tarea
- estación asociada
- estado de completado

#### Acciones disponibles
- marcar como completada o pendiente
- editar
- borrar

### Ventaja de separar estos componentes

Separar cada tarjeta en su propio componente hace que las páginas queden más limpias y permite reutilizar la visualización de cada tipo de dato sin duplicar código.

## Componentes de formulario

Los formularios de la aplicación se han separado en componentes específicos para encapsular tanto la interfaz como la lógica básica de validación y envío.

### NoteForm

`NoteForm` se utiliza para crear y editar notas.

#### Función
- gestionar el estado de los campos del formulario
- validar los datos introducidos antes de enviarlos
- reutilizar la misma estructura tanto para creación como para edición

#### Campos principales
- título
- contenido

#### Comportamiento
- si no hay una nota inicial, el formulario crea una nueva nota
- si existe una nota inicial, el formulario actúa en modo edición

---

### PlannerForm

`PlannerForm` se utiliza para crear y editar tareas del planner.

#### Función
- gestionar el estado de los inputs
- validar el título
- permitir seleccionar la estación
- permitir marcar una tarea como completada cuando se está editando

#### Campos principales
- título
- estación
- completada

#### Comportamiento
- en modo creación, genera una nueva tarea
- en modo edición, actualiza una tarea existente

### Ventaja de estos formularios

Separar los formularios en componentes propios facilita su reutilización, reduce la complejidad de las páginas y permite centralizar mejor la validación y el comportamiento de creación o edición.

## Uso de props tipadas con TypeScript

Todos los componentes que reciben datos o funciones desde sus componentes padre utilizan props tipadas mediante interfaces o tipos de TypeScript.

Esto permite:

- definir con claridad qué espera cada componente
- detectar errores antes de ejecutar la aplicación
- mejorar el autocompletado y la legibilidad del código
- asegurar consistencia entre datos y componentes

### Ejemplos

`CropCard` recibe un objeto de tipo `Crop`.

`FishCard` recibe un objeto de tipo `Fish`.

`VillagerCard` recibe un objeto de tipo `Villager`.

`NoteCard` recibe una nota y funciones para editar o borrar.

`PlannerCard` recibe un elemento del planner y varias funciones de interacción.

`SearchBar`, `SeasonFilter` y `FavoriteButton` también definen props específicas para controlar su comportamiento.

### Ventaja del tipado

El uso de TypeScript hace que los componentes sean más fiables y fáciles de mantener, ya que ayuda a evitar errores como pasar propiedades equivocadas o usar tipos incompatibles.

## Composición de componentes

En varias partes del proyecto se ha utilizado composición de componentes para construir interfaces más complejas a partir de piezas pequeñas y reutilizables.

Por ejemplo, una página como `CropsPage` no contiene toda la lógica visual en un único bloque grande, sino que combina varios componentes:

- `SearchBar`
- `SeasonFilter`
- `LoadingState`
- `ErrorMessage`
- `EmptyState`
- `CropCard`

Lo mismo ocurre en otras páginas, como `FishPage`, `VillagersPage`, `NotesPage` o `PlannerPage`.

### Ventaja de la composición

La composición permite:

- dividir mejor responsabilidades
- reutilizar piezas de interfaz
- hacer que cada componente sea más fácil de entender
- simplificar el mantenimiento y la evolución del proyecto

En lugar de crear páginas monolíticas y difíciles de modificar, se construyen vistas a partir de componentes pequeños, cada uno con una tarea concreta.

## Relación entre páginas y componentes

Las páginas principales de la aplicación actúan como contenedores de alto nivel que organizan y combinan distintos componentes reutilizables.

### Ejemplos

**HomePage**  
Muestra contenido introductorio y sirve como punto de entrada a la aplicación.

**CropsPage**  
Combina filtros, búsqueda, estados visuales y tarjetas de cultivos.

**FishPage**  
Combina filtros, búsqueda, estados visuales y tarjetas de peces.

**VillagersPage**  
Combina filtros, búsqueda, estados visuales y tarjetas de aldeanos.

**FavoritesPage**  
Combina estado global de favoritos con tarjetas de distintos tipos de contenido.

**NotesPage**  
Combina un formulario reutilizable con tarjetas de notas y gestión de estado asíncrono.

**PlannerPage**  
Combina filtro por estación, formulario de tareas, tarjetas del planner y acciones de edición.

### Papel de las páginas

Las páginas no deben contener demasiada lógica visual repetida, sino coordinar:

- carga de datos
- estado local
- uso de hooks
- composición de componentes
- conexión con la API

Esta separación hace que el proyecto sea más claro y fácil de mantener.

## Conclusión

La aplicación se ha construido siguiendo una organización basada en componentes reutilizables, tipados y con responsabilidades bien definidas.

Esta forma de trabajo permite:

- reducir duplicación de código
- mantener una interfaz coherente
- facilitar el mantenimiento
- separar mejor la lógica visual de la lógica de datos
- aprovechar mejor las ventajas de React y TypeScript

En conjunto, los componentes desarrollados permiten construir una aplicación modular, escalable y más fácil de entender que una interfaz hecha de forma monolítica.