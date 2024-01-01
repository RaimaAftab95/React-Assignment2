# React Album & Posts App

This is a React application with two main pages: Albums and Posts. The app utilizes `react-router-dom` for routing and fetches data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Pages](#pages)
- [Routing](#routing)
- [UI Framework](#ui-framework)

## Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/react-albums-posts-app.git](https://github.com/RaimaAftab95/React-Assignment2)https://github.com/RaimaAftab95/React-Assignment2

## Navigate to the project directory: 
   cd react-albums-posts-app
   
## Install dependencies:
   npm install

## Usage
To start the development server, run:
   npm start

The app will be accessible at http://localhost:3000.

## Folder Structure

```
react-albums-posts-app/
|-- src/
|   |-- Components/
|   |   |-- MyNavbar.js
|   |-- Pages/
|   |   |-- Albums.js
|   |   |-- AlbumDetail.js
|   |   |-- Posts.js
|   |   |-- PostDetail.js
|   |   |-- NotFound.js
|-- App.js
|-- index.js
|-- ...
```

## Dependencies
     React
     React Router DOM
     Reactstrap

     Install additional dependencies using:
       npm install react react-router-dom reactstrap

## API Endpoints
Albums: https://jsonplaceholder.typicode.com/albums (GET)
Album Photos: https://jsonplaceholder.typicode.com/photos?albumId=20 (GET)
Posts: https://jsonplaceholder.typicode.com/posts (GET)
