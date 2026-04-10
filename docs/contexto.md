# Context API en la aplicación

## Introducción

En este proyecto se ha utilizado Context API de React para gestionar un estado global compartido entre varios componentes sin necesidad de pasar props manualmente por muchos niveles del árbol.

Su uso en Stardew Planner permite centralizar la lógica de favoritos y compartirla entre distintas páginas y componentes de forma más limpia.

## Contexto creado y finalidad

El contexto global creado en la aplicación es `FavoritesContext`.

Su finalidad es almacenar y compartir la información relacionada con los favoritos del usuario.

### Qué gestiona este contexto

- la lista de favoritos actual
- el estado de carga
- el posible error al cargar o modificar favoritos
- una función para comprobar si un elemento ya está en favoritos
- una función para añadir o quitar favoritos
- una función para recargar los favoritos desde la API

### Por qué se ha usado

Los favoritos pueden modificarse desde distintas partes de la aplicación, como las tarjetas de cultivos, peces o aldeanos, y además deben mostrarse agrupados en la página de favoritos.

Por eso tiene sentido tratarlos como un estado global compartido.

## Uso del contexto en la aplicación

El contexto se implementa mediante un `FavoritesProvider`, que envuelve la aplicación y pone el estado global de favoritos a disposición de los componentes hijos.

Después, los componentes que necesitan acceder a esa información utilizan el hook `useFavorites`.

### Dónde se utiliza

El contexto se usa principalmente en:

- `FavoriteButton`, para saber si un elemento está guardado y permitir añadirlo o quitarlo
- `FavoritesPage`, para obtener la lista global de favoritos y mostrar los elementos correspondientes

### Ventaja

Gracias al contexto, no es necesario pasar manualmente la lista de favoritos y sus funciones desde `App.tsx` hasta cada tarjeta o botón. Esto simplifica la estructura del proyecto y mejora su mantenimiento.