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
   git clone: [https://github.com/RaimaAftab95/React-Assignment2]

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

## Components

### MyNavbar.js

- **Description:** Navbar component for navigation.
- **Usage:** Included in the layout for navigation.

## Pages

### Albums.js

- **Description:** Displays a list of albums.
- **Features:**
  - Fetches data from the Albums API.
  - Clicking on an album redirects to the AlbumDetail page.

### AlbumDetail.js

- **Description:** Displays details of a specific album.
- **Features:**
  - Fetches album-specific photos from the API.

### Posts.js

- **Description:** Displays a list of posts.
- **Features:**
  - Fetches data from the Posts API.
  - Clicking on a post redirects to the PostDetail page.

### PostDetail.js

- **Description:** Displays details of a specific post.

### NotFound.js

- **Description:** Displays a 404 Not Found page.

## Routing

- `/` - Albums page
- `/posts` - Posts page
- `/albums/:id` - AlbumDetail page
- `/posts/:id` - PostDetail page
- `/*` - NotFound page
## UI Framework
Reactstrap is used for styling the components.
