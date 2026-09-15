# Servicio de Pizzas

Proyecto de una API REST desarrollada con Node.js y Express para administrar información de pizzas mediante operaciones CRUD.

Los datos de las pizzas son almacenados en una base de datos MongoDB.


## Instalación y ejecución

Para utilizar el proyecto se necesita tener instalado Node.js, Docker y MongoDB.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Angelsg4/ServicioPizzas.git
```

### 2. Entrar a la carpeta del proyecto

```bash
cd ServicioPizzas
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Verificar que MongoDB esté ejecutándose

MongoDB se ejecuta mediante Docker utilizando el contenedor correspondiente al proyecto.

Para verificar los contenedores activos se puede utilizar:

```bash
docker ps
```

El contenedor de MongoDB debe encontrarse en ejecución.

### 5. Iniciar el servidor

```bash
npm start
```

El servidor se ejecutará en:

```text
http://localhost:3000
```

## Base de datos

El proyecto utiliza MongoDB para almacenar la información de las pizzas.

La cadena de conexión utilizada es:

```text
mongodb://localhost:27017
```

La base de datos utilizada por el proyecto es:

```text
pizzas
```

La colección utilizada es:

```text
pizzas
```

MongoDB puede ser administrado y visualizado mediante MongoDB Compass.

## Operaciones CRUD

La API permite realizar las operaciones de crear, consultar, actualizar y eliminar pizzas.

### Obtener todas las pizzas

Método:

```text
GET
```

URL:

```text
http://localhost:3000/api/v1/pizzas
```

Esta operación devuelve todas las pizzas almacenadas en MongoDB.

### Obtener una pizza por ID

Método:

```text
GET
```

URL:

```text
http://localhost:3000/api/v1/pizzas/:id
```

Ejemplo:

```text
http://localhost:3000/api/v1/pizzas/1
```

Esta operación busca una pizza específica utilizando su identificador.

### Agregar una pizza

Método:

```text
POST
```

URL:

```text
http://localhost:3000/api/v1/pizzas
```

En Postman se debe seleccionar:

```text
Body → raw → JSON
```

Ejemplo de información enviada:

```json
{
    "id": 1,
    "nombre": "Hawaiina",
    "descripcion": "Jamon y piña"
}
```

### Actualizar una pizza

Método:

```text
PUT
```

URL:

```text
http://localhost:3000/api/v1/pizzas/:id
```

Ejemplo:

```text
http://localhost:3000/api/v1/pizzas/1
```

Ejemplo de información enviada:

```json
{
    "nombre": "Hawaiana Especial",
    "descripcion": "Jamon, piña y queso extra"
}
```

### Eliminar una pizza

Método:

```text
DELETE
```

URL:

```text
http://localhost:3000/api/v1/pizzas/:id
```

Ejemplo:

```text
http://localhost:3000/api/v1/pizzas/1
```

Esta operación elimina de MongoDB la pizza correspondiente al identificador indicado.

## Pruebas con Postman

La API fue probada mediante Postman utilizando las operaciones CRUD.

Se realizaron pruebas para:

- Consultar todas las pizzas.
- Consultar una pizza por su ID.
- Agregar una nueva pizza.
- Actualizar una pizza existente.
- Eliminar una pizza.

Las pruebas permiten comprobar que la API puede comunicarse correctamente con MongoDB y realizar las operaciones correspondientes.

## Estructura del proyecto

```text
ServicioPizzas/
├── index.js
├── pizza.repositorio.js
├── package.json
├── package-lock.json
└── README.md
```

## Archivos principales

### index.js

Contiene la configuración del servidor Express y las rutas de la API para realizar las operaciones CRUD de las pizzas.

### pizza.repositorio.js

Contiene las funciones encargadas de comunicarse con MongoDB para consultar, agregar, actualizar y eliminar pizzas.

### package.json

Contiene la información del proyecto y las dependencias necesarias para ejecutar la aplicación.
