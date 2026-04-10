# Hooks de React utilizados en la aplicación

## Introducción

En este documento se explican los hooks de React utilizados en el desarrollo de Stardew Planner, tanto los hooks nativos como el custom hook creado para gestionar peticiones de datos.

Los hooks permiten gestionar estado, efectos secundarios, valores memorizados y funciones optimizadas dentro de componentes funcionales. Gracias a ellos, la aplicación puede manejar interacción del usuario, llamadas a la API y procesamiento de datos de forma más clara y organizada.

En este proyecto se han utilizado los siguientes hooks:

- `useState`
- `useEffect`
- `useMemo`
- `useCallback`

Además, se ha creado un custom hook reutilizable:

- `useFetchState`

## useState

`useState` se ha utilizado para gestionar el estado local de muchos componentes de la aplicación.

Este hook permite almacenar valores que cambian con la interacción del usuario o con el propio comportamiento de la interfaz.

### Usos principales en el proyecto

Se ha utilizado `useState` para controlar:

- textos introducidos en los buscadores
- estación seleccionada en los filtros
- campos de formularios
- mensajes de error locales
- estado de envío de formularios
- elemento que se está editando en notas o planner
- lista de favoritos cargada en el contexto
- estados de carga y error en el contexto global de favoritos

### Ejemplos de uso

En páginas como `CropsPage`, `FishPage` y `VillagersPage`, `useState` se usa para guardar el texto de búsqueda y la estación seleccionada.

En `NoteForm` y `PlannerForm`, se usa para controlar los inputs del formulario, permitiendo trabajar con formularios controlados.

En `FavoritesContext`, se utiliza para almacenar los favoritos actuales y el estado asociado a su carga.

### Ventaja

`useState` permite que la interfaz reaccione automáticamente a los cambios de datos, actualizando la vista cuando cambia el estado sin necesidad de manipular el DOM manualmente.

## useEffect

`useEffect` se ha utilizado para ejecutar efectos secundarios dentro de la aplicación.

Un efecto secundario es una acción que no forma parte directa del renderizado visual, como por ejemplo cargar datos desde una API o sincronizar valores cuando cambia una prop.

### Usos principales en el proyecto

En Stardew Planner, `useEffect` se ha utilizado sobre todo para:

- lanzar la carga inicial de datos desde el backend
- ejecutar recargas automáticas en el custom hook `useFetchState`
- sincronizar valores iniciales en formularios de edición
- cargar los favoritos al iniciar el contexto global

### Ejemplos de uso

En `useFetchState`, `useEffect` se utiliza para ejecutar automáticamente la función `refetch()` cuando el componente se monta.

En `NoteForm` y `PlannerForm`, se utiliza para actualizar los valores del formulario cuando se recibe un elemento inicial para editar.

En `FavoritesContext`, se usa para cargar la lista de favoritos al iniciar la aplicación.

### Ventaja

`useEffect` permite separar la lógica de efectos secundarios del renderizado de la interfaz, haciendo que el código sea más claro y más fácil de mantener.

## useMemo

`useMemo` se ha utilizado para memorizar valores calculados y evitar que ciertos cálculos se repitan innecesariamente en cada renderizado.

Este hook es útil cuando un componente necesita derivar información a partir de unos datos de entrada y no conviene recalcularlo todo continuamente si las dependencias no han cambiado.

### Usos principales en el proyecto

En Stardew Planner, `useMemo` se ha utilizado para:

- filtrar la lista de cultivos según texto y estación
- filtrar la lista de peces según texto y estación
- filtrar la lista de aldeanos según texto y estación
- filtrar las tareas del planner por estación
- resolver la lista de favoritos y convertirla en elementos reales del dominio

### Ejemplos de uso

En `CropsPage`, `FishPage` y `VillagersPage`, `useMemo` se usa para generar listas filtradas a partir de los datos recibidos desde la API y de los filtros seleccionados por el usuario.

En `FavoritesPage`, se utiliza para transformar la lista de favoritos en una lista de objetos completos, como cultivos, peces o aldeanos.

### Ventaja

`useMemo` ayuda a mejorar la eficiencia y además hace más clara la separación entre los datos originales y los datos derivados que se muestran finalmente en pantalla.

## useCallback y custom hook useFetchState

### useCallback

`useCallback` se ha utilizado para memorizar funciones y evitar que se vuelvan a crear innecesariamente en cada render.

Esto resulta útil cuando una función se pasa como dependencia a otros hooks o cuando forma parte de un contexto compartido.

#### Usos principales en el proyecto

En Stardew Planner, `useCallback` se ha utilizado para:

- definir la función `refetch` dentro del custom hook `useFetchState`
- memorizar funciones del contexto de favoritos, como `isFavorite`, `toggleFavorite` y `refetchFavorites`
- crear funciones auxiliares como `handleRetry` en páginas que necesitan recargar varios recursos

#### Ventaja

`useCallback` ayuda a mantener referencias estables a funciones importantes y evita recreaciones innecesarias cuando las dependencias no cambian.

---

### Custom hook: useFetchState

`useFetchState` es un hook personalizado creado para reutilizar la lógica de carga de datos desde la API.

En lugar de repetir en cada página el mismo patrón de:

- estado de datos
- estado de carga
- estado de error
- función de recarga

se ha encapsulado toda esa lógica dentro de un solo hook reutilizable.

#### Qué devuelve

`useFetchState` devuelve un objeto con:

- `data`
- `loading`
- `error`
- `refetch`

#### Dónde se utiliza

Se utiliza en páginas como:

- `CropsPage`
- `FishPage`
- `VillagersPage`
- `FavoritesPage`
- `NotesPage`
- `PlannerPage`

#### Ventaja

La principal ventaja es que reduce repetición, mejora la organización del código y hace más uniforme la gestión de peticiones HTTP en toda la aplicación.