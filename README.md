# Poli ‑ Task & User Manager (React + TypeScript)

[**Demo en vivo**](https://poli.3dseros.com/)

Aplicación de página única (**SPA**) que permite registrar usuarios y administrar tareas de forma sencilla directamente en el navegador, sin necesidad de backend. Está desarrollada con **React 18**, **TypeScript** y el bundler **Vite**, lo que ofrece recarga en caliente y un paquete de producción muy ligero.

---

## ✨ Características principales

- **Gestión de usuarios** : alta, edición y eliminación con validación de duplicados.
- **Gestión de tareas** : crear, completar o borrar tareas con identificación *UUID v4*.
- **Persistencia local** : toda la información se guarda en `localStorage`, lo que hace que los datos persistan entre sesiones del navegador.
- **Enrutamiento SPA** : navegación instantánea entre páginas gracias a **React Router DOM v6**.
- **UI reactiva** : manejo de estado y efectos con **React Hooks** (`useState`, `useEffect`).
- **Interfaz limpia y responsive** : componentes reutilizables, **CSS Modules** y **React Icons** para iconografía.
- **Calidad del código** : configuración de **ESLint** con reglas para TypeScript.

---

## 🛠️ Tecnologías y librerías

| Herramienta               | Rol en el proyecto                                              |
| ------------------------- | --------------------------------------------------------------- |
| **Vite** + **TypeScript** | Entorno de desarrollo ultrarrápido y *bundler* para producción. |
| **React 18**              | Renderizado declarativo de la interfaz de usuario.              |
| **React Router DOM v6**   | Enrutamiento cliente para SPA.                                  |
| **React Hooks**           | Manejo de estado y efectos.                                     |
| **uuid v4**               | Generación de IDs únicos para tareas.                           |
| **localStorage Web API**  | Persistencia de datos en navegador.                             |
| **React Icons**           | Paquete de íconos SVG listos para usar.                         |
| **CSS Modules**           | Estilizado encapsulado y responsive.                            |
| **ESLint / TS‑ESLint**    | Linter y reglas de tipado estricto para mantener la calidad.    |

---

## 📁 Estructura del proyecto

```
ft-poli/
│
├─ public/               # Estáticos (favicon, index.html)
├─ src/
│   ├─ components/       # Componentes reutilizables (CardItem, Header…)
│   ├─ pages/            # Vistas / páginas completas (Home, GestiónTareas…)
│   ├─ routes/           # Definición central de rutas
│   ├─ services/         # Lógica de acceso a datos (userService.ts, taskService.ts)
│   ├─ styles/           # Hojas de estilos globales y helpers
│   ├─ App.tsx           # Layout y navegación
│   └─ main.tsx          # Punto de entrada y montaje de React
└─ vite.config.ts        # Configuración de Vite
```

---

## 🚀 Instalación y puesta en marcha

> Requiere **Node ≥ 18** y **npm ≥ 9** (o `pnpm`/`yarn`).

```bash
# 1. Clona el repositorio
$ git clone https://github.com/tu‑usuario/ft-poli.git
$ cd ft-poli

# 2. Instala dependencias
$ npm install

# 3. Levanta el servidor de desarrollo
$ npm run dev
# → abre http://localhost:5173 y disfruta de recarga en caliente
```

### Crear build de producción

```bash
# Genera la carpeta dist/ optimizada
$ npm run build

# Sirve localmente para testear la build
$ npm run preview
```

---

## 📜 Scripts disponibles

| Comando           | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR.          |
| `npm run build`   | Genera una build lista para producción en `dist/`. |
| `npm run preview` | Sirve la build localmente para pruebas finales.    |
| `npm run lint`    | Ejecuta ESLint.                                    |

---

## 🤝 Contribuir

1. **Fork** este repositorio
2. Crea una rama con tu funcionalidad: `git checkout -b feature/tu-funcionalidad`
3. Haz *commit* de tus cambios: `git commit -m "feat: añade nueva funcionalidad"`
4. Haz *push* a la rama: `git push origin feature/tu-funcionalidad`
5. Abre un *Pull Request* ✨

Se revisarán PRs que sigan el estilo de código existente y pasen ESLint.

---

## 📝 Licencia

Distribuido bajo licencia **MIT**. Consulta el archivo `LICENSE` para más información.

---

> Hecho con ❤️ y café por el grupo 14 Poli - Front End.

