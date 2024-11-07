API de Trailers 🎬
Esta API permite gestionar un catálogo de trailers de series y películas almacenado en MongoDB. Los usuarios pueden realizar operaciones CRUD básicas y búsquedas avanzadas, como filtrar por género y buscar trailers por actor.

Endpoints

1. Obtener o filtrar por atributos específicos
Descripción: Obtiene una lista de todos los trailers. Si se proporcionan parámetros de consulta, se aplican filtros basados en esos atributos.
Método HTTP: GET
Ruta: /peliculas/trailers
Parámetros de consulta (opcional):
genero (String): Filtra trailers por género, como "Drama", "Acción", etc.
categoria (String): Filtra por el tipo de contenido, como "Serie" o "Película".