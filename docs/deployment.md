# Despliegue de la aplicación

## Introducción

El despliegue de Stardew Planner se ha realizado utilizando Vercel, una plataforma que permite publicar aplicaciones web y configurar tanto el proceso de build como las variables de entorno del proyecto. En el caso de aplicaciones creadas con Vite, Vercel detecta automáticamente el framework y aplica una configuración base adecuada, aunque también permite personalizar el comportamiento mediante configuración del proyecto o archivos como `vercel.json`.

Además, Vercel permite definir variables de entorno a nivel de proyecto desde el panel de configuración, y estas solo se aplican a nuevos despliegues una vez guardadas y redeployadas.