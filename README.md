# Pokedex App

# React + TypeScript + Redux(rematch) + graphql + apollo/client + react-router-dom + sass + Vite

- Aplicacion frontend desarrollada con React que consume la api de pokemon graphql, lista los pokemons en una vista principal implementando paginacion inicial y filtros por busqueda por nombre y por tipo de pokemon.

- Tiene una vista de detalles del pokemon y ver mas informacion y agregarlo a favoritos.

- Tambien cuenta con una vista que muestra los pokemons que se han agregado a favoritos.

## Requisitos Previos

### Lista de las dependencias o tecnologías que deben estar instaladas para correr el proyecto.

- Node.js >= 18
- Yarn

## Instalación

Pasos para clonar y configurar el proyecto:

git clone https://github.com/maohen/pokedex-app.git
cd proyecto
npm install

## Ejecución

- yarn dev -> ejecuta el proyecto en local
- yarn build -> compilar una version del proyecto

## Estructura proyecto

src/
│
├── pages/        # Vistas de la aplicacion
├── shared/       # Recursos globales de la aplicacion -> Api, assets, components, helpers, router, store (estados de la aplicacion)
├── styles/       # Estilos globales de la apliacion 
├── tests/        # 
└── App.js        # Componente principal