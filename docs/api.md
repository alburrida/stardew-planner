# API del proyecto

## Introducción

Stardew Planner utiliza una API REST propia desarrollada con Node.js, Express y TypeScript.

Esta API permite tanto consultar datos informativos del juego como gestionar datos del usuario, por ejemplo favoritos, notas y tareas del planner.

El backend está organizado por capas, separando rutas, controladores, servicios y datos, lo que hace que la estructura sea más clara y fácil de mantener.

## Estructura general de la API

Todos los endpoints de la aplicación comparten el prefijo:

```txt
/api/v1
```
Esto permite agrupar la API bajo una versión concreta y deja preparada la estructura por si en el futuro se quisiera ampliar o modificar el servicio sin romper compatibilidad.

La API devuelve respuestas en formato JSON y utiliza los verbos HTTP adecuados según la operación:

`GET` para obtener datos
`POST` para crear recursos
`PUT` para actualizar recursos
`DELETE` para eliminar recursos

## Endpoints de consulta

La API incluye varios endpoints para consultar información del juego:

- `GET /api/v1/crops`
- `GET /api/v1/fish`
- `GET /api/v1/villagers`

Estos endpoints devuelven listados de datos mock servidos por el backend.

### Ejemplo de respuesta

```json id="apiqueryexample"
{
  "success": true,
  "data": []
}
```

## Endpoints de favoritos

El recurso de favoritos permite guardar y eliminar elementos marcados por el usuario.

### Endpoints disponibles

- `GET /api/v1/favorites`
- `POST /api/v1/favorites`
- `DELETE /api/v1/favorites/:id`

### Función

Este recurso se utiliza para:

- obtener la lista actual de favoritos
- añadir un nuevo favorito
- eliminar un favorito existente

### Ejemplo de body para crear un favorito

```json id="apifavoritebody"
{
  "itemId": "parsnip",
  "type": "crop"
}
```
## Endpoints de favoritos

El recurso de favoritos permite guardar y eliminar elementos marcados por el usuario.

### Endpoints disponibles

- `GET /api/v1/favorites`
- `POST /api/v1/favorites`
- `DELETE /api/v1/favorites/:id`

### Función

Este recurso se utiliza para:

- obtener la lista actual de favoritos
- añadir un nuevo favorito
- eliminar un favorito existente

### Ejemplo de body para crear un favorito

```json id="apifavoritebody"
{
  "itemId": "parsnip",
  "type": "crop"
}
```

## Endpoints de planner

El recurso de planner permite gestionar tareas u objetivos organizados por estación.

### Endpoints disponibles

- `GET /api/v1/planner`
- `POST /api/v1/planner`
- `PUT /api/v1/planner/:id`
- `DELETE /api/v1/planner/:id`

### Función

Este recurso se utiliza para crear, consultar, modificar y eliminar tareas del planner.

### Ejemplo de body para crear una tarea

```json id="apiplannerbody"
{
  "title": "Plantar arándanos",
  "season": "summer"
}
```
### Ejemplo de body para actualizar una tarea
```json
{
  "title": "Plantar arándanos",
  "season": "summer",
  "completed": true
}
```

## Respuestas y códigos HTTP

La API utiliza respuestas JSON con una estructura uniforme para facilitar su consumo desde el frontend.

### Respuesta correcta con datos

```json id="apiokdata"
{
  "success": true,
  "data": []
}
```
### Respuesta correcta sin contenido útil

```json
{
  "success": true,
  "data": null
}
```

### Respuesta con error

```json
{
  "success": false,
  "message": "Mensaje de error"
}
```

### Códigos HTTP utilizados

`200` para operaciones correctas de consulta, actualización o borrado
`201` para creación correcta de recursos
`400` para peticiones inválidas
`404` para recursos no encontrados

Esta estructura hace que el frontend pueda manejar mejor los distintos estados de red y mostrar información más clara al usuario.