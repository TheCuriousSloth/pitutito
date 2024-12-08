# Base de Datos de Referenciales para Tasación
Proyecto desarrollado con Next.js 14 App Router

## Estado del Proyecto
🚧 **En desarrollo activo** 🚧

Actualmente trabajando en:
- Robustecimiento del sistema de autenticación con Google
- Corrección de problemas en el flujo de login durante la creación de datos
- Optimización del formulario de ingreso de referenciales

## Descripción
Sistema de gestión de referenciales para tasación inmobiliaria con:
- Autenticación mediante Google OAuth 2.0
- Panel de administración protegido
- Gestión de referenciales (crear/editar)
- Base de datos PostgreSQL con Prisma ORM

## Estructura Actual del Proyecto
/ ├── app/ │ ├── (auth)/ │ │ ├── login/ │ │ └── register/ │ ├── dashboard/ │ │ ├── referenciales/ │ │ └── profile/ │ ├── api/ │ ├── lib/ │ └── ui/ ├── prisma/ ├── public/ └── components/


## Instalación y Configuración

1. Clonar el repositorio:
```bash
git clone [url-repositorio]

Instalar dependencias:
npm install

Configurar variables de entorno:
POSTGRES_PRISMA_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

Inicializar la base de datos:
npx prisma generate
npx prisma db push
Problemas Conocidos
El flujo de autenticación puede fallar al crear nuevos referenciales
La redirección post-login requiere optimización
El formulario de creación necesita validación mejorada
En Desarrollo
Implementación de manejo de errores robusto
Mejora del sistema de validación de formularios
Optimización del flujo de autenticación
Sistema de caché para mejorar el rendimiento
Base de Datos
Utilizamos PostgreSQL + Prisma ORM. El esquema actual incluye:

Tabla users: Información de usuarios autenticados
Tabla referenciales: Datos de referenciales inmobiliarios
Tabla accounts: Gestión de cuentas OAuth
Contribuciones
Proyecto inspirado en varios repositorios de código abierto. Contribuciones son bienvenidas mediante pull requests. ```