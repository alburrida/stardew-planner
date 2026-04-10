# Metodologías de desarrollo: Agile, Scrum y Kanban

## Introducción

En el desarrollo de software no basta con programar. También es necesario organizar el trabajo, repartir tareas, revisar avances y adaptarse a los cambios. Para eso existen distintas metodologías de trabajo. Entre las más conocidas están Agile, Scrum y Kanban.

En este documento explico qué es cada una, cuáles son sus conceptos principales, en qué se diferencian y en qué situaciones conviene usar cada una.

---

## ¿Qué es Agile?

Agile es una forma de trabajar en el desarrollo de software basada en la flexibilidad, la colaboración y la mejora continua. Su idea principal es que un proyecto no siempre se puede definir por completo desde el inicio, porque los requisitos pueden cambiar durante el desarrollo.

En lugar de intentar planificar todo al detalle desde el principio, Agile propone avanzar poco a poco, entregando partes funcionales del producto y revisando continuamente si se va en la dirección correcta.

### Objetivo de Agile

El objetivo de Agile es desarrollar software útil de forma continua, adaptándose a los cambios y manteniendo una comunicación constante entre el equipo y el cliente o usuario.

### Ideas principales de Agile

- Se trabaja por iteraciones o ciclos cortos.
- Se valora más la capacidad de adaptación que seguir un plan rígido.
- Se busca entregar valor lo antes posible.
- Se da mucha importancia a la comunicación entre personas.
- Se revisa el trabajo con frecuencia para corregir errores o cambiar prioridades.

Agile no es una única metodología concreta, sino una forma general de entender el desarrollo. Scrum y Kanban son dos formas de aplicar esa filosofía.

---

## ¿Qué es Scrum?

Scrum es una metodología ágil que organiza el trabajo en periodos cortos llamados **sprints**. Durante cada sprint, el equipo se compromete a completar una serie de tareas o funcionalidades concretas.

La idea es que al final de cada sprint exista un avance real del producto, aunque sea pequeño. Después se revisa lo hecho, se detectan mejoras y se planifica el siguiente ciclo.

### Conceptos principales de Scrum

#### Roles

**Product Owner**  
Es la persona que decide qué necesita el producto y qué tareas tienen más prioridad. Se encarga de organizar y mantener el backlog.

**Scrum Master**  
Ayuda al equipo a seguir la metodología Scrum correctamente. No actúa como jefe, sino como facilitador. Su función es eliminar bloqueos y mejorar la forma de trabajar.

**Equipo de desarrollo**  
Es el grupo que diseña, programa, prueba y construye el producto. Es un equipo autoorganizado, es decir, decide cómo abordar el trabajo.

#### Sprint

Un sprint es un ciclo de trabajo corto, normalmente de una a cuatro semanas. Durante ese tiempo el equipo desarrolla un conjunto de tareas previamente seleccionadas.

La duración fija ayuda a mantener ritmo, control y revisiones frecuentes.

#### Backlog

El backlog es una lista ordenada de tareas, mejoras, errores o funcionalidades pendientes.

- **Product Backlog**: lista general de todo lo que se quiere hacer en el producto.
- **Sprint Backlog**: conjunto de tareas escogidas para desarrollarse en un sprint concreto.

#### Sprint Planning

Es la reunión al inicio de cada sprint. En ella se decide qué trabajo se va a realizar y cómo se va a organizar.

#### Daily Scrum

Es una reunión breve, normalmente diaria, en la que cada integrante comenta qué hizo, qué va a hacer y si tiene algún bloqueo.

#### Sprint Review

Se realiza al final del sprint para mostrar el trabajo completado y comprobar si cumple lo esperado.

#### Sprint Retrospective

Es una reunión de reflexión interna del equipo. Se analiza qué ha ido bien, qué ha ido mal y qué se puede mejorar en el siguiente sprint.

### Ventajas de Scrum

- Aporta estructura y orden.
- Facilita el seguimiento del progreso.
- Permite detectar problemas pronto.
- Fomenta la mejora continua.
- Ayuda a entregar partes funcionales del producto de forma periódica.

---

## ¿Qué es Kanban?

Kanban es una metodología de trabajo visual que sirve para organizar tareas y controlar el flujo de trabajo. Su herramienta más conocida es el tablero Kanban, en el que las tareas se representan como tarjetas que van pasando por distintas columnas.

Las columnas suelen reflejar estados del trabajo, por ejemplo:

- Pendiente
- En proceso
- En revisión
- Hecho

La idea es ver de forma clara en qué punto está cada tarea y evitar que el equipo acumule demasiado trabajo a la vez.

### ¿Cómo se usa Kanban?

En Kanban se crea un tablero con columnas que representan fases del trabajo. Cada tarea se mueve de una columna a otra según avanza.

También es habitual limitar cuántas tareas puede haber al mismo tiempo en una columna de trabajo activo. Esto ayuda a no saturar al equipo y a terminar antes lo empezado.

### Principios básicos de Kanban

- Visualizar el trabajo.
- Limitar el trabajo en curso.
- Mejorar el flujo de tareas.
- Detectar cuellos de botella.
- Hacer mejoras continuas sin cambiar todo de golpe.

### Ventajas de Kanban

- Es fácil de entender y aplicar.
- Da una visión muy clara del estado del trabajo.
- Ayuda a priorizar mejor.
- Reduce el desorden y la acumulación de tareas abiertas.
- Es muy útil cuando las tareas llegan de forma continua.

---

## Diferencias entre Scrum y Kanban

Aunque ambos pertenecen al enfoque Agile, no funcionan igual.

### 1. Organización del tiempo

**Scrum** trabaja con sprints de duración fija.  
**Kanban** no necesita sprints, el trabajo fluye de forma continua.

### 2. Planificación

**Scrum** planifica el trabajo al inicio de cada sprint.  
**Kanban** permite añadir y mover tareas de forma más flexible en cualquier momento.

### 3. Roles

**Scrum** define roles concretos, como Product Owner y Scrum Master.  
**Kanban** no obliga a usar roles específicos.

### 4. Gestión del trabajo

**Scrum** se centra en completar objetivos de sprint.  
**Kanban** se centra en mantener un flujo constante y ordenado de tareas.

### 5. Cambios durante el trabajo

En **Scrum**, una vez empezado el sprint, lo normal es evitar cambios importantes.  
En **Kanban**, los cambios son más fáciles de introducir porque el sistema es más flexible.

### 6. Seguimiento visual

Los dos pueden usar tableros, pero en **Kanban** el tablero es el centro del sistema.  
En **Scrum**, el tablero ayuda, pero el marco de trabajo es más amplio y estructurado.

---

## ¿Cuándo usar Scrum?

Scrum es útil cuando:

- el proyecto tiene un objetivo bastante claro
- se necesita trabajar por fases cortas
- conviene revisar resultados cada poco tiempo
- el equipo puede comprometerse con bloques de trabajo cerrados
- se quiere una organización más estructurada

### Ejemplo de uso de Scrum

Puede encajar bien en el desarrollo de una aplicación web donde se quiere dividir el trabajo en entregas: primero diseño base, luego navegación, después formularios, luego integración con API, etc.

---

## ¿Cuándo usar Kanban?

Kanban es útil cuando:

- las tareas aparecen de forma continua
- el trabajo cambia mucho de prioridad
- se necesita mucha flexibilidad
- se quiere controlar visualmente el estado de cada tarea
- el equipo no necesita una estructura tan rígida como Scrum

### Ejemplo de uso de Kanban

Puede funcionar muy bien en mantenimiento de software, soporte técnico, corrección de errores o proyectos pequeños donde interesa mover tareas de forma sencilla según van surgiendo.

---

## Conclusión

Agile es una forma de trabajar que busca desarrollar software de manera flexible, rápida y adaptada a los cambios. Dentro de ese enfoque, Scrum y Kanban son dos métodos distintos para organizar el trabajo.

Scrum aporta más estructura, roles definidos y ciclos cerrados mediante sprints. Kanban, en cambio, ofrece un sistema más visual y flexible, centrado en el flujo continuo de tareas.

No existe una metodología perfecta para todo. La mejor opción depende del tipo de proyecto, del tamaño del equipo y de la forma en que se necesite organizar el trabajo. En proyectos con objetivos bien divididos y revisiones periódicas, Scrum suele encajar mejor. En trabajos más cambiantes o continuos, Kanban puede ser más práctico.

En cualquier caso, las tres ideas comparten lo más importante: organizar mejor el desarrollo, adaptarse a la realidad del proyecto y mejorar de forma constante.