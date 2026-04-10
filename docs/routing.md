# Rutas y navegación de la aplicación

## Introducción

La navegación de Stardew Planner se ha implementado con React Router.

Gracias a este sistema, la aplicación se organiza en varias páginas y el usuario puede moverse entre ellas sin recargar completamente la web. Esto permite una experiencia más fluida y una estructura más clara del proyecto.

## Estructura de rutas principales

La aplicación cuenta con las siguientes rutas principales:

- `/` → página de inicio
- `/crops` → página de cultivos
- `/fish` → página de peces
- `/villagers` → página de aldeanos
- `/favorites` → página de favoritos
- `/notes` → página de notas
- `/planner` → página del planner
- `*` → página 404 para rutas no existentes

Cada una de estas rutas está asociada a una página concreta del proyecto, lo que permite separar mejor las distintas funcionalidades.

## Implementación de la navegación

La navegación principal se ha centralizado en el componente `Navbar`.

Este componente utiliza `NavLink` para mostrar enlaces a las distintas secciones de la aplicación y resaltar visualmente la ruta activa.

Además, en `App.tsx` se utiliza `Routes` y `Route` para asociar cada URL con su componente de página correspondiente.

### Ventaja

Esta organización permite:

- separar claramente cada página
- facilitar el mantenimiento
- hacer la aplicación más escalable
- ofrecer una navegación más clara al usuario

## Página 404 y conclusión

La aplicación incluye una página 404 para manejar rutas no válidas.

Esto mejora la experiencia de usuario, ya que evita mostrar una pantalla vacía o un error poco claro cuando se intenta acceder a una ruta inexistente.

En conjunto, la configuración de rutas permite organizar Stardew Planner como una aplicación de varias páginas bien diferenciadas, con una navegación sencilla y clara.