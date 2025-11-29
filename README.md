# Programador de citas

## Descripción General
El Appointment Scheduler es una aplicación escalable diseñada para gestionar registros de clientes y agendar citas de manera eficiente. Proporciona una interfaz amigable para que los clientes y administradores creen, actualicen y gestionen citas e información de los clientes.

## Características
- **Gestión de Citas:** Crear, recuperar, actualizar y eliminar citas.
- **Gestión de Clientes:** Gestionar registros de clientes, incluyendo agregar y actualizar información del cliente.
- **Notificaciones:** Enviar notificaciones por correo electrónico y SMS para recordatorios de citas.
- **Autenticación:** Acceso seguro a la aplicación con middleware de autenticación.
- **Integración de Base de Datos:** Integración fluida con una base de datos para el almacenamiento persistente de citas y registros de clientes.
- **Job Scheduling (Programación de Tareas):** Programar background jobs para enviar recordatorios sobre citas próximas.

## Estructura del Proyecto
```
appointment-scheduler
├── src
│   ├── api
│   │   ├── controllers
│   │   ├── routes
│   │   └── middleware
│   ├── services
│   ├── repositories
│   ├── models
│   ├── jobs
│   ├── notifications
│   ├── db
│   ├── config
│   ├── utils
│   └── types
├── tests
│   ├── unit
│   └── integration
├── scripts
├── docker
├── .env.example
├── package.json
├── tsconfig.json
├── ormconfig.js
├── .eslintrc.js
├── .prettierrc
└── .gitignore
```

## Instalación
1. Clonar el repositorio:
   ```
   git clone <repository-url>
   ```
2. Navegar al directorio del proyecto:
   ```
   cd appointment-scheduler
   ```
3. Instalar dependencias:
   ```
   npm install
   ```
4. Configurar la base de datos ejecutando el script de configuración:
   ```
   ./scripts/setup-db.sh
   ```

## Uso
- Iniciar el servidor:
  ```
  npm start
  ```
- Acceder a la documentación de la API para los endpoints relacionados con citas y clientes.
