# Horrflix | Netflix Clone

Este es un clon de la interfaz de usuario de Netflix, desarrollado con React. El proyecto utiliza la API de The Movie Database (TMDb) para obtener información sobre películas y series de televisión.

## Características

- Mostrar una película principal seleccionada aleatoriamente en la portada.
- Carrusel de las primeras 6 películas.
- Cuadrícula con las películas restantes.
- Detalles de la película al hacer clic en el póster.
- Filtrado para mostrar solo películas de terror.

## Tecnologías Utilizadas

- React
- Axios
- React Router DOM
- CSS

## Requisitos Previos

- Node.js
- npm o yarn

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/netflix-clone.git
    cd netflix-clone
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de TMDb:

    ```plaintext
    REACT_APP_TMDB_API_KEY=your_api_key_here
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm start
    ```

    o

    ```bash
    yarn start
    ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── api.js
│   ├── components
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── MovieDetail.js
│   │   ├── MovieList.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
