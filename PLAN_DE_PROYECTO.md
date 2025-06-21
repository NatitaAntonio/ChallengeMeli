# Plan de Proyecto: Comparador de Productos Simplificado

## 1. Resumen Ejecutivo

Este documento describe el plan para desarrollar un prototipo de una página de comparación de productos. El proyecto consta de un frontend (página de comparación) y un backend (API de productos), diseñado para evaluar tanto las habilidades de desarrollo como las de gestión de proyectos. El objetivo es entregar un prototipo funcional que sea visualmente claro, técnicamente sólido y esté bien documentado.

---

## 2. Objetivos del Proyecto

*   **Frontend:** Crear una página web responsiva y clara que muestre una comparación de productos lado a lado, utilizando un diseño de tarjetas.
*   **Backend:** Desarrollar una API RESTful básica que proporcione los datos de los productos desde un archivo JSON local.
*   **Prototipo:** El producto final debe ser un prototipo funcional que demuestre la interacción entre el frontend y el backend.
*   **Documentación:** Entregar este plan de proyecto como un resumen de la estrategia y la ejecución.

---

## 3. Estrategia Técnica

### 3.1. Stack Tecnológico

*   **Backend:**
    *   **Runtime:** Node.js
    *   **Framework:** Express.js
    *   **Dependencias:** `cors` (para permitir peticiones desde el frontend).
    *   **Fuente de Datos:** Archivo `products.json` local para simular una base de datos, según los requisitos.

*   **Frontend:**
    *   **Framework:** React
    *   **Herramienta de Build:** Vite
    *   **Lenguaje:** JavaScript (ES6+) y JSX.
    *   **Estilos:** CSS plano con una metodología BEM implícita para mantener las clases organizadas (`App.css`, `index.css`).

### 3.2. Arquitectura

*   **Cliente-Servidor:** La arquitectura es un modelo cliente-servidor desacoplado.
    *   El **servidor backend** expone una API RESTful (`/api/products`). Su única responsabilidad es leer los datos del archivo JSON y servirlos.
    *   El **cliente frontend** es una Single Page Application (SPA) en React que consume los datos de la API del backend y los renderiza en la interfaz de usuario.
*   **Flujo de Datos:**
    1.  El usuario abre la página web.
    2.  El componente principal de React (`App.jsx`) se monta y ejecuta una petición `fetch` al endpoint `/api/products` del backend.
    3.  El servidor Express responde con el contenido de `products.json`.
    4.  React recibe los datos, los guarda en su estado y renderiza dinámicamente la lista de productos.

---

## 4. Planificación y Recursos

Este proyecto se considera un prototipo y se planifica para ser ejecutado por un único desarrollador en un corto período de tiempo.

### 4.1. Fases del Proyecto

1.  **Fase 1: Configuración y Backend (Realizada)**
    *   **Tareas:**
        *   Inicializar la estructura de carpetas del proyecto.
        *   Configurar el entorno de Node.js para el backend.
        *   Crear el servidor Express y el endpoint de la API.
        *   Crear y poblar el archivo `products.json`.
    *   **Duración estimada:** 1-2 horas.

2.  **Fase 2: Desarrollo del Frontend (Realizada)**
    *   **Tareas:**
        *   Configurar el entorno de React con Vite.
        *   Crear la estructura de componentes básicos.
        *   Implementar la lógica para consumir la API del backend.
        *   Diseñar la UI con tarjetas de productos.
        *   Aplicar estilos con CSS para lograr un diseño responsivo y claro.
    *   **Duración estimada:** 2-3 horas.

3.  **Fase 3: Pruebas y Documentación (Realizada)**
    *   **Tareas:**
        *   Verificar la correcta comunicación entre frontend y backend.
        *   Asegurar que la UI se visualice correctamente en diferentes tamaños de pantalla.
        *   Redactar este documento (`PLAN_DE_PROYECTO.md`).
    *   **Duración estimada:** 1 hora.

### 4.2. Recursos Necesarios

*   **Hardware:** Un computador de desarrollo estándar.
*   **Software:**
    *   Node.js (incluye npm).
    *   Un editor de código (ej. VS Code).
    *   Un navegador web moderno para pruebas.
    *   Git para control de versiones (recomendado).

---

## 5. Integración de Herramientas

*   **Backend y Frontend:** La integración se realiza a través de peticiones HTTP. La librería `cors` en el backend es crucial para permitir que el servidor de desarrollo de Vite (en un dominio diferente) pueda acceder a la API.
*   **Servidor de Desarrollo:** Vite proporciona un servidor de desarrollo con Hot Module Replacement (HMR), lo que permite ver los cambios en el frontend instantáneamente sin recargar la página completa, agilizando el desarrollo.
*   **Control de Versiones:** Se recomienda `git` para gestionar el historial de cambios del proyecto y un repositorio (ej. en GitHub) para alojar el código.

---

## 6. Conclusión

Este plan describe un enfoque directo y eficiente para cumplir con los requisitos del challenge. Se eligieron tecnologías modernas y populares (React, Node.js) que demuestran conocimiento de los estándares actuales de la industria. La separación clara entre backend y frontend resulta en un código más mantenible y escalable, sentando una buena base para un futuro desarrollo. 