# Proyecto Samy

Proyecto de desarrollo de una Single Page Application (SPA) interactiva que permite a los usuarios visualizar, buscar y gestionar imágenes de manera eficiente. La aplicación consta de un scroll infinito para mostrar todas las imágenes, permitir búsquedas dinámicas, y ofrecer la opción de dar like o unlike a cada imagen. Además, la interfaz es responsive, adaptándose tanto a dispositivos móviles como a desktop, siguiendo los diseños proporcionados.

Dado que la API real aún no está disponible, se utilizará una API simulada para desarrollar y probar la aplicación, por lo que se debe obligatoriamente levantar el servidor de los mocks para poder probar la funcionalidad.

## Arquitectura del Proyecto

La arquitectura del proyecto esta basada en React con Typescript, adicionalmente consta de Vite como empaquetador, y tiene algunas depencias importantes como: Styled Component para los estilos, react-router-dom para la gestión de rutas (En este caso lo utilice para simular los query params), para los Test utilicé Vitest y React testing library, para gestionar animaciones dentro del sitio se utilizó la misma libreria de Styled Components.

### Componentes Principales

- **Main Page**: El componente Main Page gestiona todo lo relacionado con el listado de los items, el infinite scroll y la búsqueda.

- **Input**: Es un input reutilizable que se usó para la pagina principal.

- **Card**: Es un componente reutilizable que se usó para la pagina principal.

- **UseInfiniteScroll**: Adicionalmente, se utilizó un Hook para manejar toda la lógica del Infinite scroll y el manejo de la petición http.

## Cómo Ejecutar el Proyecto

## Este proyecto se creó con yarn create vite

- Instalar las dependencias con yarn add

### `yarn dev`

Este es el comando para ejecutar el proyecto en modo de desarrollo.

Copia el siguiente vínculo [http://localhost:5173] y así podrás ver el proyecto en tu navegador.

### Nota

(Necesitas levantar el servidor del mock de las APIs, que corresponden al proyecto que me enviaron en el challenge, para así poder visualizar el contenido de las mismas.)

### `yarn test`

Este es el comando para ejecutar los Test Unitarios en la aplicación web.
