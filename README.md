API de Trailers de Películas y Series 🎬
Esta API permite gestionar y consultar un catálogo de trailers de series y películas almacenados en MongoDB. Puedes realizar operaciones como filtrar por género, buscar por actor, crear, y eliminar trailers.

Endpoints

1. Filtrar trailers por género
- Descripción: Obtiene una lista de trailers filtrados por género.
- Método HTTP: GET
- Ruta: /trailers
- Parámetro de consulta:
- genero (String): Filtra trailers por género, como "Drama", "Acción", etc.
- Ejemplo de solicitud:
GET http://localhost:3000/trailers?genero=Drama
[
  {
    "_id": "672d0e666ed04262126985d7",
    "id": 4,
    "poster": "./posters/4.jpg",
    "titulo": "The Umbrella Academy",
    "categoria": "Serie",
    "gen": "Ciencia Ficción",
    "genero": [
      "Sci-Fi",
      "Fantasía",
      "Drama"
    ],
    "busqueda": [
      "The Umbrella Academy",
      "Sci-Fi",
      "Fantasía",
      "Drama",
      "Tom Hopper",
      "David Castañeda",
      "Emmy Raver-Lampman",
      "Robert Sheehan",
      "Aidan Gallagher",
      "Elliot Page"
    ],
    "resumen": "La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.",
    "temporadas": 1,
    "reparto": [
      "Tom Hopper",
      "David Castañeda",
      "Emmy Raver-Lampman",
      "Robert Sheehan",
      "Aidan Gallagher",
      "Elliot Page"
    ],
    "trailer": "https://www.youtube.com/embed/KHucKOK-Vik"
  }
  Códigos de estado:
- 200 OK: Solicitud exitosa.
- 500 Internal Server Error: Error en el servidor.

2. Buscar trailers por actor

- Descripción: Busca trailers que incluyan un actor específico en el reparto.
- Método HTTP: GET
- Ruta: /trailers/actor
- Parámetro de consulta:
- actor (String): Nombre del actor para buscar trailers.
- Ejemplo de solicitud:
GET http://localhost:3000/trailers/actor?actor=Tom Hopper
- Ejemplo de respuesta:
[
  {
    "_id": "672d0e666ed04262126985d7",
    "id": 4,
    "poster": "./posters/4.jpg",
    "titulo": "The Umbrella Academy",
    "categoria": "Serie",
    "gen": "Ciencia Ficción",
    "genero": [
      "Sci-Fi",
      "Fantasía",
      "Drama"
    ],
    "busqueda": [
      "The Umbrella Academy",
      "Sci-Fi",
      "Fantasía",
      "Drama",
      "Tom Hopper",
      "David Castañeda",
      "Emmy Raver-Lampman",
      "Robert Sheehan",
      "Aidan Gallagher",
      "Elliot Page"
    ],
    "resumen": "La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.",
    "temporadas": 1,
    "reparto": [
      "Tom Hopper",
      "David Castañeda",
      "Emmy Raver-Lampman",
      "Robert Sheehan",
      "Aidan Gallagher",
      "Elliot Page"
    ],
    "trailer": "https://www.youtube.com/embed/KHucKOK-Vik"
  }
]
- Códigos de estado:
- 200 OK: Solicitud exitosa.
- 404 Not Found: No se encontraron trailers con el actor especificado.
- 500 Internal Server Error: Error en el servidor.

3. Obtener series con más de X temporadas
- Descripción: Obtiene una lista de series con al menos el número de - temporadas especificado.
- Método HTTP: GET
- Ruta: /trailers/temp
- Parámetro de consulta:
minTemporadas (Number): Número mínimo de temporadas para filtrar.
- Ejemplo de solicitud:
GET http://localhost:3000/trailers/temp?minTemporadas=3
- Ejemplo de respuesta:
[
  {
    "_id": "672d0e666ed04262126985db",
    "id": 6,
    "poster": "./posters/6.jpg",
    "titulo": "Enola Holmes",
    "categoria": "Película",
    "gen": "Drama",
    "genero": [
      "Ficción",
      "Drama",
      "Misterio"
    ],
    "busqueda": [
      "Enola Holmes",
      "Ficción",
      "Drama",
      "Misterio",
      "Millie Bobby Brown",
      "Henry Cavill",
      "Sam Claflin",
      "Helena Bonham Carter",
      "Louis Partridge",
      "Adeel Akhtar"
    ],
    "resumen": "La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.",
    "temporadas": "N/A",
    "duracion": "97 minutos",
    "reparto": [
      "Millie Bobby Brown",
      "Henry Cavill",
      "Sam Claflin",
      "Helena Bonham Carter",
      "Louis Partridge",
      "Adeel Akhtar"
    ],
    "trailer": "https://www.youtube.com/embed/3t1g2pa355k"
  }

  - Códigos de estado:
- 200 OK: Solicitud exitosa.
- 404 Not Found: No se encontraron series con el número mínimo de temporadas especificado.
- 500 Internal Server Error: Error en el servidor.

4. Crear un nuevo trailer
Descripción: Agrega un nuevo trailer a la base de datos.
Método HTTP: POST
Ruta: /trailers
Cuerpo de solicitud (JSON):
{
    "titulo": "Nuevo Trailer",
    "categoria": "Serie",
    "genero": ["Acción", "Aventura"],
    "reparto": ["Actor 1", "Actor 2"],
    "resumen": "Este es un trailer de ejemplo",
    "trailer": "https://www.example.com/trailer"
}
- Ejemplo de respuesta:
{
  "titulo": "Nuevo Trailer",
  "categoria": "Serie",
  "genero": [
    "Acción",
    "Aventura"
  ],
  "reparto": [
    "Actor 1",
    "Actor 2"
  ],
  "resumen": "Este es un trailer de ejemplo",
  "trailer": "https://www.example.com/trailer",
  "_id": "672d173f7fb5fd3bd27a77c4",
  "__v": 0
}
- Códigos de estado:
- 201 Created: Trailer creado con éxito.
- 400 Bad Request: Datos de entrada incorrectos.
- 500 Internal Server Error: Error en el servidor.

5. Eliminar un trailer
- Descripción: Elimina un trailer de la base de datos usando su id.
- Método HTTP: DELETE
- Ruta: /trailers/:id
- Parámetro de la ruta:
id (String): ID del trailer a eliminar.
- Ejemplo de solicitud:
DELETE http://localhost:3000/trailers/672d1420cb11aa24a963a6  (aqui va el _id del trailer)
Ejemplo de respuesta:
{
    "message": "Trailer eliminado con éxito"
}

- Códigos de estado:
- 200 OK: Trailer eliminado con éxito.
- 404 Not Found: Trailer no encontrado.
- 500 Internal Server Error: Error en el servidor.

6. Manejo de error - Trailer no encontrado
Descripción: Este endpoint ejemplifica el manejo de errores cuando el trailer solicitado no existe.
Método HTTP: GET
Ruta: /trailers/:id
Ejemplo de solicitud:
GET http://localhost:3000/trailers/9999

- Ejemplo de respuesta:

{
    "error": "Trailer no encontrado"
}

- Códigos de estado:
- 404 Not Found: Trailer no encontrado.
- 500 Internal Server Error: Error en el servidor.