# Practica-MVC-con-Angular-y-Node.js
Proyecto simple pero concreto del desarrollo de una aplicación con la arquitectura MVC, el framework de Angular para el frontend y el entorno de ejecución de Node.js para el backend.

## Tecnologías utilizadas
- Angular
- Node.js
- Express.js
- MySQL
- HTML/CSS
- TypeScript

## Estructura del proyecto
El repositorio se organiza de la siguiente manera:

/client: Contiene el código fuente de Angular.

/server: Contiene el código fuente del servidor Node.js.

/database: Contiene scripts SQL para la creación y manipulación de la base de datos.

## Configuración y ejecución del proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio en tu máquina local.

2. Instala los módulos de Node necesarios para el servidor. Ejecuta en la carpeta `/server`:

    ```
    npm i express morgan promise-mysql cors
    ```

3. Instala el comando `tsc` para TypeScript:

    ```
    npm install -g typescript
    ```

4. Instala `supervisor` para ejecutar el proyecto:

    ```
    npm install supervisor -g
    ```

5. En la ruta `/server/src/keys.ts`, encuentra el archivo `keys.ts` donde puedes configurar las claves de acceso para tu base de datos MySQL.

6. En una terminal abierta desde la carpeta `/server`, ejecuta el siguiente comando para acceder a MySQL e importa el script `database.sql`.

7. En el archivo `package.json` del directorio `/server`, cambia el atributo script por el siguiente:

    ```json
    "scripts": {
        "build": "tsc -w",
        "dev": "nodemon build/index.js",
        "start": "supervisor build/index.js"
    }
    ```

8. Compila el proyecto para que los archivos TypeScript se conviertan en JavaScript. Ejecuta en la carpeta `/server`:

    ```
    npm run build
    ```

9. Crea una nueva terminal en la misma carpeta `/server` y ejecuta el siguiente comando para iniciar el servidor:

    ```
    npm run start
    ```

10. Crea una nueva terminal en la carpeta `/client` y ejecuta el siguiente comando para iniciar el cliente:

    ```
    ng serve -o
    ```
