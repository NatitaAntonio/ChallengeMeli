# 🚀 Cómo Ejecutar el Proyecto ChallengeMeli

Este proyecto consiste en una aplicación web con **backend** (Node.js/Express) y **frontend** (Vite/React) separados.

## 📋 Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)
- **Git** (para clonar el repositorio)

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/NatitaAntonio/ChallengeMeli.git
cd ChallengeMeli
```

### 2. Instalar dependencias del Backend
```bash
cd backend
npm install
```

### 3. Instalar dependencias del Frontend
```bash
cd ../frontend
npm install
```

## 🏃‍♂️ Ejecutar el Proyecto

### Opción 1: Ejecutar Backend y Frontend por separado

#### Backend (Terminal 1)
```bash
cd backend
node server.js
```
El servidor estará disponible en: **http://localhost:3001**

#### Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
La aplicación estará disponible en: **http://localhost:5173**

### Opción 2: Scripts automatizados (si están configurados)

```bash
# Ejecutar todo desde la raíz del proyecto
npm run dev
```

## 🌐 URLs de la API

### Endpoints disponibles:
- **GET** `/api/products` - Obtener todos los productos
  - URL completa: `http://localhost:3001/api/products`

## 📁 Estructura del Proyecto

```
ChallengeMeli/
├── backend/
│   ├── server.js          # Servidor Express
│   ├── products.json      # Datos de productos
│   └── package.json       # Dependencias del backend
├── frontend/
│   ├── src/               # Código fuente React
│   ├── index.html         # HTML principal
│   └── package.json       # Dependencias del frontend
├── PLAN_DE_PROYECTO.md    # Documentación del proyecto
└── run.md                 # Este archivo
```

## 🔧 Solución de Problemas

### Error: "Cannot find module"
- Asegúrate de estar en la carpeta correcta antes de ejecutar los comandos
- Verifica que las dependencias estén instaladas con `npm install`

### Error: "Puerto ya en uso"
- El backend usa el puerto 3001
- El frontend usa el puerto 5173
- Si están ocupados, cierra otros procesos o cambia los puertos

### Error: "npm no se reconoce"
- Instala Node.js desde: https://nodejs.org/
- Reinicia la terminal después de la instalación

## 📱 Acceso a la Aplicación

1. Abre tu navegador
2. Ve a: **http://localhost:5173**
3. La aplicación debería cargar automáticamente

## 🛑 Detener el Proyecto

- En cada terminal, presiona **Ctrl + C**
- Esto detendrá tanto el backend como el frontend

---

## 📞 Soporte

Si tienes problemas para ejecutar el proyecto:
1. Verifica que todos los prerrequisitos estén instalados
2. Asegúrate de seguir los pasos en el orden indicado
3. Revisa los logs de error en la terminal

¡Disfruta desarrollando! 🎉 