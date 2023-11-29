# API REST

## Descripción
Esta API REST fue creada con el propósito de ser utilizada en un taller en la Universidad Politécnica de Chiapas.

## Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu máquina.

## Instalación
1. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

## Configuración
1. Copia el archivo de ejemplo `.env.example` y renómbralo a `.env`:
    ```bash
    cp .env.example .env
    ```

2. Abre el archivo `.env` en un editor de texto y ajusta las variables de entorno según sea necesario.

## Migraciones
Ejecuta las migraciones de la base de datos:
   ```bash
   npm run migrate
   ```
## Ejecución
Levanta el proyecto:
   ```bash
   npm start
   ```