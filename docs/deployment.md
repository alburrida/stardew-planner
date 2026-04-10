# Despliegue de la aplicación

## Introducción

El despliegue de Stardew Planner se ha realizado utilizando Vercel, una plataforma que permite publicar aplicaciones web y configurar tanto el proceso de build como las variables de entorno del proyecto. En el caso de aplicaciones creadas con Vite, Vercel detecta automáticamente el framework y aplica una configuración base adecuada, aunque también permite personalizar el comportamiento mediante configuración del proyecto o archivos como `vercel.json`.

Además, Vercel permite definir variables de entorno a nivel de proyecto desde el panel de configuración, y estas solo se aplican a nuevos despliegues una vez guardadas y redeployadas.

## Qué se ha desplegado y organización del proyecto

El proyecto se ha organizado en un único repositorio que contiene tanto el frontend como el backend.

### Frontend
El frontend está desarrollado con:

- React
- TypeScript
- Tailwind CSS
- Vite

### Backend
El backend está desarrollado con:

- Node.js
- Express
- TypeScript

### Enfoque de despliegue

Para el despliegue se ha seguido un enfoque similar al trabajado previamente con Vercel, manteniendo frontend y backend dentro del mismo proyecto.

Este planteamiento permite centralizar el desarrollo y simplificar la gestión del repositorio, aunque requiere revisar correctamente la configuración para que la parte cliente y la parte servidor funcionen juntas en producción.

## Proceso de despliegue

El despliegue se realiza conectando el repositorio del proyecto con Vercel y creando un nuevo proyecto desde su panel. Vercel permite trabajar directamente con repositorios Git y genera despliegues automáticos a partir de nuevos commits, además de crear despliegues de preview para cambios en ramas o pull requests.

Una vez importado el repositorio, Vercel detecta automáticamente el framework y configura valores razonables para la build y el despliegue. Si fuera necesario, esa configuración puede ajustarse desde la configuración del proyecto o mediante un archivo `vercel.json`.

Además, si la aplicación necesita variables de entorno, estas se configuran desde el panel del proyecto. Los cambios en esas variables no se aplican a despliegues anteriores, sino a nuevos despliegues, por lo que es necesario volver a desplegar la aplicación después de modificarlas.

## Comprobaciones tras el despliegue

Después del despliegue es necesario comprobar que la aplicación funciona correctamente en producción.

### Comprobaciones realizadas

- que el frontend carga sin errores
- que la navegación entre páginas funciona
- que la API responde correctamente
- que las operaciones de favoritos, notas y planner siguen funcionando
- que no aparecen errores graves en consola
- que la configuración del proyecto en producción coincide con la esperada

También es importante verificar que cualquier variable de entorno necesaria se haya configurado correctamente y que la URL de la API utilizada por el frontend sea la adecuada para producción.