# Examen-Dise-o-Interfaces-1Ev-Angular : 4V Pizza

**Repositorio:** [SrAlvarado/Examen-Dise-o-Interfaces-1Ev-Angular](https://github.com/SrAlvarado/Examen-Dise-o-Interfaces-1Ev-Angular)

## Descripción
Aplicación web desarrollada en Angular para la gestión y pedido de pizzas (simulación examen DI 1ª Evaluación). Incluye listado de pizzas, carrito de compra y proceso de pago.

## Funcionalidades

- **Listado de pizzas:** Visualización de pizzas disponibles en una interfaz con tarjetas.
- **Carrito interactivo:** Añade pizzas al carrito, visualiza resumen del pedido y calcula el total.
- **Formulario de pago:**
  - Introducción de datos de entrega (hora y dirección).
  - Selección de método de pago: tarjeta o Bizum.
  - Validación de número de tarjeta (16 dígitos) o teléfono (9 dígitos), según el método.
  - Feedback de errores en tiempo real en el formulario.
  - Botón para pagar y limpiar el pedido.
- **Componentización moderna:** Uso de átomos, moléculas y organismos siguiendo la arquitectura Atomic Design.
- **Diseño responsive:** Basado en [Bootstrap](https://getbootstrap.com/), estilos propios adaptados y variables de tema inspiradas en la bandera italiana.
- **Interfaz intuitiva:** Colores y fuentes personalizadas, animaciones en las cartas de pizza, y navegación clara.
- **Eventos y lógica modular:** Comunicación entre componentes vía `@input` y `@output`.
- **Footer informativo y cabecera personalizada.**

## Estructura del proyecto

- **src/app/core/organisms:** Organismos para el listado de pizzas y el formulario de pago.
- **src/app/core/atoms:** Inputs, botones y otros elementos básicos.
- **src/app/core/molecules:** Tarjetas de pizza, items del pedido.
- **src/app/app.html:** Composición principal de la vista.
- **src/styles.scss:** Tema visual, modificando variables de Bootstrap.

> **Nota:** No se ha implementado navegación por rutas avanzadas ni integración con backend, centrando el proyecto en la interfaz y la experiencia del usuario.

## Lenguajes utilizados

- **TypeScript** (lógica, componentes Angular)
- **HTML** (plantillas de vistas)
- **SCSS** (estilos personalizados y tema)

> Para ver todos los archivos y componentes relacionados con las funcionalidades:  
> [Ver resultados completos en GitHub code search](https://github.com/SrAlvarado/Examen-Dise-o-Interfaces-1Ev-Angular/search?q=funci%C3%B3n+OR+feature+OR+componente+OR+CRUD+OR+formulario+OR+pizza+OR+carrito+OR+validaci%C3%B3n)

---

_Repositorios creados por Markel Alvarado para simular un examen práctico de Diseño de Interfaces._